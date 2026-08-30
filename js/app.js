/* =========================================================
   総まとめ — JLPT N1 GRAMMAR APP
   PERFORMANCE / STABILITY REWRITE

   Main fixes:
   - No Kuroshiro initialization at startup.
   - Furigana is lazy, serialized, cached, and cancellable per render.
   - LocalStorage cache writes are debounced instead of stringifying on every item.
   - Cards are rendered in one DOM write instead of insertAdjacentHTML per card.
   - Search is indexed once and debounced.
   - Explanation translations are lazy and limited by an observer.
   - Event delegation replaces hundreds of inline listeners.
   - Async jobs are invalidated whenever the view changes.
   ========================================================= */

/* =========================================================
   COURSE DATA
   ========================================================= */

const WEEK_TITLES = [
  '第1週 努力してこそ合格できる',
  '第2週 私なりに努力している',
  '第3週 言うまでもなく、努力している',
  '第4週 努力なくして合格はない',
  '第5週 努力せずには進まない',
  '第6週 以前にも増して努力している',
  '第7週 努力に努力を重ねている',
  '第8週 結果はどうあれ、努力しよう'
]

const courseData = {}

for (let week = 1; week <= 8; week++) {
  const days = {}

  for (let day = 1; day <= 7; day++) {
    const data = window[`W${week}H${day}`]

    days[`day${day}`] = data
      ? normalizeDayData(data)
      : createEmptyDay(week, day)
  }

  courseData[`week${week}`] = {
    title: WEEK_TITLES[week - 1] || `第${week}週 JLPT N1`,
    days
  }
}

function normalizeDayData (data) {
  return {
    ...data,
    title: data?.title || 'Materi belum tersedia',
    grammar: Array.isArray(data?.grammar) ? data.grammar : [],
    exam: data?.exam || null
  }
}

function createEmptyDay (week, day) {
  if (day === 7) {
    return {
      title: `７日目 実戦問題 (Ujian Minggu ${week})`,
      grammar: [],
      exam: `
        <div class="exam-container">
          <div class="exam-empty">
            <i class="bi bi-hourglass-split"></i>
            <h3>Exam belum tersedia</h3>
            <p>
              Soal Hari 7 untuk Minggu ${week}
              akan ditambahkan ke materi.
            </p>
          </div>
        </div>
      `
    }
  }

  return {
    title: `Hari ${day} — Materi Belum Tersedia`,
    grammar: [],
    exam: null
  }
}

/* =========================================================
   STATE
   ========================================================= */

let activeWeek = 'week1'
let activeDay = 'day1'
let currentSearch = ''
let currentStatus = 'all'
let memoMode = false

let renderVersion = 0
let searchTimer = null
let explanationObserver = null

const allGrammar = []
const searchIndex = new Map()

function rebuildGrammarIndex () {
  allGrammar.length = 0
  searchIndex.clear()

  Object.entries(courseData).forEach(([weekKey, weekData]) => {
    Object.entries(weekData.days).forEach(([dayKey, dayData]) => {
      if (!Array.isArray(dayData.grammar)) return

      dayData.grammar.forEach(item => {
        const normalized = {
          ...item,
          _week: weekKey,
          _day: dayKey
        }

        allGrammar.push(normalized)

        const searchable = [
          item.rule,
          item.reading,
          item.yomi,
          item.furigana,
          item.meaning?.id,
          item.meaning?.en,
          item.meaning?.cn,
          item.meaning?.zh,
          item.explanation,
          item.explanationJP,
          ...(Array.isArray(item.examples) ? item.examples : [])
        ]
          .map(value => stripHTML(value || ''))
          .join(' ')
          .toLowerCase()

        searchIndex.set(String(item.id), searchable)
      })
    })
  })
}

/* =========================================================
   LANGUAGE
   ========================================================= */

let currentLanguage = normalizeLanguage(
  localStorage.getItem('n1_language') || 'id'
)

const languageText = {
  id: {
    meaning: 'Arti Indonesia',
    explanation: 'Penjelasan',
    noExample: 'Belum ada contoh.',
    translating: 'Menerjemahkan...',
    translationFailed: 'Terjemahan gagal.',
    copiedOriginal: 'Kalimat asli disalin!',
    copiedTranslation: 'Terjemahan disalin!',
    translateTitle: 'Klik = salin • Double click = translate'
  },

  en: {
    meaning: 'English Meaning',
    explanation: 'Explanation',
    noExample: 'No example available.',
    translating: 'Translating...',
    translationFailed: 'Translation unavailable.',
    copiedOriginal: 'Original sentence copied!',
    copiedTranslation: 'Translation copied!',
    translateTitle: 'Click = copy • Double click = translate'
  },

  cn: {
    meaning: '中文意思',
    explanation: '解释',
    noExample: '暂无例句。',
    translating: '正在翻译...',
    translationFailed: '暂时无法翻译。',
    copiedOriginal: '原句已复制！',
    copiedTranslation: '译文已复制！',
    translateTitle: '单击 = 复制 • 双击 = 翻译'
  }
}

function normalizeLanguage (lang) {
  const value = String(lang || '')
    .toLowerCase()
    .trim()

  if (value === 'en' || value === 'en-us' || value === 'en-gb') {
    return 'en'
  }

  if (
    value === 'cn' ||
    value === 'zh' ||
    value === 'zh-cn' ||
    value === 'zh_cn'
  ) {
    return 'cn'
  }

  return 'id'
}

function getLanguageText (key) {
  const lang = normalizeLanguage(currentLanguage)

  return languageText[lang]?.[key] || languageText.id[key] || ''
}

function getApiLanguage (lang) {
  const normalized = normalizeLanguage(lang)

  if (normalized === 'en') {
    return 'en'
  }

  if (normalized === 'cn') {
    return 'zh-CN'
  }

  return 'id'
}

/* =========================================================
   ELEMENTS
   ========================================================= */

const grammarCards = document.getElementById('grammarCards')

const miniExam = document.getElementById('miniExam')

const examContent = document.getElementById('examContent')

const emptyState = document.getElementById('emptyState')

const searchInput = document.getElementById('searchInput')

const weekSelect = document.getElementById('weekSelect')

const daySelect = document.getElementById('daySelect')

const statusSelect = document.getElementById('statusSelect')

const resultCounter = document.getElementById('resultCounter')

const activeFilterLabel = document.getElementById('activeFilterLabel')

const resetFiltersBtn = document.getElementById('resetFiltersBtn')

const emptyResetBtn = document.getElementById('emptyResetBtn')

const weekTitle = document.getElementById('weekTitle')

const dayTitle = document.getElementById('dayTitle')

const progressPercent = document.getElementById('progressPercent')

const progressBarFill = document.getElementById('progressBarFill')

const memoToggle = document.getElementById('memoToggle')

const themeToggle = document.getElementById('themeToggle')

const langToggleBtn = document.getElementById('langToggleBtn')

const languageMenu = document.getElementById('languageMenu')

const liveClock = document.getElementById('liveClock')

const greetingLabel = document.getElementById('greetingLabel')

const greetingJapanese = document.getElementById('greetingJapanese')

const greetingMessage = document.getElementById('greetingMessage')

const greetingIcon = document.getElementById('greetingIcon')

const timePeriodText = document.getElementById('timePeriodText')

const examAnswered = document.getElementById('examAnswered')

const examProgressFill = document.getElementById('examProgressFill')

/* =========================================================
   HELPERS
   ========================================================= */

function elementExists (element) {
  return element instanceof Element
}

function nextFrame () {
  return new Promise(resolve => {
    const raf = window.requestAnimationFrame

    if (typeof raf === 'function') {
      raf(() => resolve())
    } else {
      setTimeout(resolve, 0)
    }
  })
}

function idle (callback, timeout = 1200) {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(callback, {
      timeout
    })
  } else {
    setTimeout(callback, 80)
  }
}

function escapeHTML (value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function stripHTML (html) {
  const temp = document.createElement('div')

  temp.innerHTML = html || ''

  return (temp.textContent || temp.innerText || '').replace(/\s+/g, ' ').trim()
}

function getStatus (item) {
  return localStorage.getItem(`status_${item.id}`) || '0'
}

function safeNumber (value, fallback = 0) {
  const number = Number(value)

  return Number.isFinite(number) ? number : fallback
}

/* =========================================================
   FURIGANA — LAZY + SERIALIZED
   ========================================================= */

const FURIGANA_CONFIG = {
  kuroshiroSources: [
    'https://unpkg.com/kuroshiro@1.2.0/dist/kuroshiro.min.js',
    'https://cdn.jsdelivr.net/npm/kuroshiro@1.2.0/dist/kuroshiro.min.js'
  ],

  analyzerSources: [
    'https://unpkg.com/kuroshiro-analyzer-kuromoji@1.1.0/dist/kuroshiro-analyzer-kuromoji.min.js',
    'https://cdn.jsdelivr.net/npm/kuroshiro-analyzer-kuromoji@1.1.0/dist/kuroshiro-analyzer-kuromoji.min.js'
  ],

  dictPaths: [
    'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/',
    'https://unpkg.com/kuromoji@0.1.2/dict/'
  ],

  cacheKey: 'n1_furigana_cache_v3',

  maxCacheEntries: 400,

  loadTimeout: 12000
}

let kuroshiroInstance = null

let furiganaReady = false

let furiganaLoadingPromise = null

let furiganaHardFailed = false

let furiganaQueue = []

let furiganaProcessing = false

let furiganaObserver = null

let furiganaSaveTimer = null

let furiganaCacheMemory = null

let furiganaRequestEpoch = 0

function getFuriganaCache () {
  if (furiganaCacheMemory) {
    return furiganaCacheMemory
  }

  try {
    const parsed = JSON.parse(
      localStorage.getItem(FURIGANA_CONFIG.cacheKey) || '{}'
    )

    furiganaCacheMemory =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : {}
  } catch (error) {
    console.warn('Furigana cache read failed:', error)

    furiganaCacheMemory = {}
  }

  return furiganaCacheMemory
}

function scheduleFuriganaCacheSave () {
  if (furiganaSaveTimer) {
    return
  }

  furiganaSaveTimer = setTimeout(() => {
    furiganaSaveTimer = null

    try {
      const cache = getFuriganaCache()

      const entries = Object.entries(cache)

      if (entries.length > FURIGANA_CONFIG.maxCacheEntries) {
        const trimmed = entries.slice(-FURIGANA_CONFIG.maxCacheEntries)

        const nextCache = Object.fromEntries(trimmed)

        furiganaCacheMemory = nextCache

        localStorage.setItem(
          FURIGANA_CONFIG.cacheKey,
          JSON.stringify(nextCache)
        )

        return
      }

      localStorage.setItem(FURIGANA_CONFIG.cacheKey, JSON.stringify(cache))
    } catch (error) {
      console.warn('Furigana cache save skipped:', error)
    }
  }, 400)
}

function makeFuriganaCacheKey (text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .trim()
}

function setFuriganaCache (key, value) {
  const cache = getFuriganaCache()

  cache[key] = value

  scheduleFuriganaCacheSave()
}

/* =========================================================
   SCRIPT LOADER
   ========================================================= */

function loadExternalScript (src, timeout = FURIGANA_CONFIG.loadTimeout) {
  return new Promise((resolve, reject) => {
    const existing = Array.from(document.scripts).find(
      script => script.src === src
    )

    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve()

        return
      }

      let settled = false

      let timer = null

      const cleanup = () => {
        if (timer) {
          clearTimeout(timer)
        }

        existing.removeEventListener('load', onLoad)

        existing.removeEventListener('error', onError)
      }

      const onLoad = () => {
        if (settled) {
          return
        }

        settled = true

        existing.dataset.loaded = 'true'

        cleanup()

        resolve()
      }

      const onError = () => {
        if (settled) {
          return
        }

        settled = true

        cleanup()

        reject(new Error(`Script failed: ${src}`))
      }

      existing.addEventListener('load', onLoad, { once: true })

      existing.addEventListener('error', onError, { once: true })

      timer = setTimeout(() => {
        if (settled) {
          return
        }

        settled = true

        cleanup()

        reject(new Error(`Script timeout: ${src}`))
      }, timeout)

      return
    }

    const script = document.createElement('script')

    script.src = src

    script.async = true

    script.defer = true

    let settled = false

    let timer = null

    const cleanup = () => {
      if (timer) {
        clearTimeout(timer)
      }

      script.removeEventListener('load', onLoad)

      script.removeEventListener('error', onError)
    }

    const onLoad = () => {
      if (settled) {
        return
      }

      settled = true

      script.dataset.loaded = 'true'

      cleanup()

      resolve()
    }

    const onError = () => {
      if (settled) {
        return
      }

      settled = true

      cleanup()

      try {
        script.remove()
      } catch (_) {}

      reject(new Error(`Script failed: ${src}`))
    }

    script.addEventListener('load', onLoad, { once: true })

    script.addEventListener('error', onError, { once: true })

    document.head.appendChild(script)

    timer = setTimeout(() => {
      if (settled) {
        return
      }

      settled = true

      cleanup()

      try {
        script.remove()
      } catch (_) {}

      reject(new Error(`Script timeout: ${src}`))
    }, timeout)
  })
}

async function loadFirstWorkingScript (sources) {
  let lastError = null

  for (const src of sources) {
    try {
      await loadExternalScript(src)

      return true
    } catch (error) {
      lastError = error

      console.warn('External script failed:', src, error)
    }
  }

  throw lastError || new Error('No working script source.')
}

/* =========================================================
   INITIALIZE FURIGANA
   ========================================================= */

async function initializeFurigana () {
  if (furiganaReady) {
    return true
  }

  if (furiganaLoadingPromise) {
    return furiganaLoadingPromise
  }

  if (furiganaHardFailed) {
    return false
  }

  furiganaLoadingPromise = (async () => {
    try {
      await loadFirstWorkingScript(FURIGANA_CONFIG.kuroshiroSources)

      await loadFirstWorkingScript(FURIGANA_CONFIG.analyzerSources)

      const KuroshiroClass = window.Kuroshiro?.default || window.Kuroshiro

      const AnalyzerClass =
        window.KuromojiAnalyzer?.default || window.KuromojiAnalyzer

      if (!KuroshiroClass) {
        throw new Error('Kuroshiro tidak ditemukan.')
      }

      if (!AnalyzerClass) {
        throw new Error('KuromojiAnalyzer tidak ditemukan.')
      }

      kuroshiroInstance = new KuroshiroClass()

      let lastAnalyzerError = null

      for (const dictPath of FURIGANA_CONFIG.dictPaths) {
        try {
          const analyzer = new AnalyzerClass({
            dictPath
          })

          await kuroshiroInstance.init(analyzer)

          furiganaReady = true
          furiganaHardFailed = false

          return true
        } catch (error) {
          lastAnalyzerError = error

          console.warn('Kuromoji dictionary init failed:', dictPath, error)
        }
      }

      throw lastAnalyzerError || new Error('Kuromoji initialization failed.')
    } catch (error) {
      furiganaReady = false
      kuroshiroInstance = null
      furiganaHardFailed = true

      console.warn('Furigana initialization failed:', error)

      return false
    } finally {
      furiganaLoadingPromise = null
    }
  })()

  return furiganaLoadingPromise
}

/* =========================================================
   FURIGANA CONVERSION
   ========================================================= */

async function convertToFurigana (text) {
  const clean = stripHTML(text)

  if (!clean) {
    return ''
  }

  if (!/[\u3400-\u4DBF\u4E00-\u9FFF]/.test(clean)) {
    return escapeHTML(clean)
  }

  const cacheKey = makeFuriganaCacheKey(clean)

  const cache = getFuriganaCache()

  if (cache[cacheKey] && typeof cache[cacheKey] === 'string') {
    return cache[cacheKey]
  }

  const ready = await initializeFurigana()

  if (!ready || !kuroshiroInstance) {
    return escapeHTML(clean)
  }

  try {
    const result = await kuroshiroInstance.convert(clean, {
      mode: 'furigana',
      to: 'hiragana'
    })

    const output = result || escapeHTML(clean)

    if (result) {
      setFuriganaCache(cacheKey, result)
    }

    return output
  } catch (error) {
    console.warn('Furigana conversion failed:', error)

    return escapeHTML(clean)
  }
}

/* =========================================================
   FURIGANA QUEUE
   ========================================================= */

function enqueueFuriganaBox (box, priority = false) {
  if (!box) {
    return
  }

  const state = box._translationState

  if (!state) {
    return
  }

  if (state.furiganaReady || state.furiganaBusy || !state.originalText) {
    return
  }

  if (detectLanguage(state.originalText) !== 'ja') {
    state.furiganaHTML = escapeHTML(state.originalText)

    state.furiganaReady = true

    return
  }

  state.furiganaBusy = true

  const job = {
    box,
    priority,
    epoch: furiganaRequestEpoch
  }

  if (priority) {
    furiganaQueue.unshift(job)
  } else {
    furiganaQueue.push(job)
  }

  processFuriganaQueue()
}

function cancelFuriganaJobs () {
  furiganaRequestEpoch++

  furiganaQueue = []

  if (furiganaObserver) {
    try {
      furiganaObserver.disconnect()
    } catch (_) {}
  }

  document.querySelectorAll('.example-box[data-example-id]').forEach(box => {
    const state = box._translationState

    if (state) {
      state.furiganaBusy = false
    }
  })
}

async function processFuriganaQueue () {
  if (furiganaProcessing) {
    return
  }

  furiganaProcessing = true

  try {
    while (furiganaQueue.length) {
      const job = furiganaQueue.shift()

      if (!job?.box) {
        continue
      }

      if (job.epoch !== furiganaRequestEpoch) {
        continue
      }

      const box = job.box

      if (!document.body.contains(box)) {
        continue
      }

      const state = box._translationState

      if (!state) {
        continue
      }

      if (state.furiganaReady) {
        state.furiganaBusy = false

        continue
      }

      const originalText = state.originalText

      if (!originalText) {
        state.furiganaBusy = false

        continue
      }

      try {
        const html = await convertToFurigana(originalText)

        if (job.epoch !== furiganaRequestEpoch) {
          state.furiganaBusy = false

          continue
        }

        if (!document.body.contains(box)) {
          state.furiganaBusy = false

          continue
        }

        const latestState = box._translationState

        if (!latestState) {
          continue
        }

        latestState.furiganaHTML = html || escapeHTML(originalText)

        latestState.furiganaReady = true

        latestState.furiganaBusy = false

        if (latestState.translated) {
          continue
        }

        const content = box.querySelector('.example-content')

        if (content) {
          content.innerHTML = latestState.furiganaHTML
        }
      } catch (error) {
        state.furiganaBusy = false

        console.warn('Furigana queue error:', error)
      }

      await nextFrame()
    }
  } finally {
    furiganaProcessing = false
  }
}

/* =========================================================
   FURIGANA OBSERVER
   ========================================================= */

function initializeFuriganaObserver () {
  if (furiganaObserver || typeof IntersectionObserver === 'undefined') {
    return
  }

  furiganaObserver = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue
        }

        const box = entry.target

        furiganaObserver.unobserve(box)

        enqueueFuriganaBox(box, true)
      }
    },
    {
      root: null,
      rootMargin: '300px 0px',
      threshold: 0.01
    }
  )
}

function applyFuriganaToExamples () {
  if (!grammarCards) {
    return
  }

  initializeFuriganaObserver()

  const boxes = grammarCards.querySelectorAll('.example-box[data-example-id]')

  boxes.forEach(box => {
    const state = box._translationState

    if (!state) {
      return
    }

    if (state.furiganaReady || state.furiganaBusy) {
      return
    }

    if (!state.originalText) {
      return
    }

    if (detectLanguage(state.originalText) !== 'ja') {
      state.furiganaHTML = escapeHTML(state.originalText)

      state.furiganaReady = true

      return
    }

    const cache = getFuriganaCache()

    const key = makeFuriganaCacheKey(state.originalText)

    if (cache[key] && typeof cache[key] === 'string') {
      state.furiganaHTML = cache[key]

      state.furiganaReady = true

      if (!state.translated) {
        const content = box.querySelector('.example-content')

        if (content) {
          content.innerHTML = state.furiganaHTML
        }
      }

      return
    }

    if (furiganaObserver) {
      furiganaObserver.observe(box)
    } else {
      enqueueFuriganaBox(box)
    }
  })
}

function warmupVisibleFurigana () {
  if (!grammarCards) {
    return
  }

  const boxes = Array.from(
    grammarCards.querySelectorAll('.example-box[data-example-id]')
  )

  let processed = 0

  for (const box of boxes) {
    if (processed >= 2) {
      break
    }

    const rect = box.getBoundingClientRect()

    const visible =
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)

    if (visible) {
      enqueueFuriganaBox(box, true)

      processed++
    }
  }
}

/* =========================================================
   TRANSLATION STATE
   ========================================================= */

const translationCacheKey = 'n1_translation_cache'

const explanationCacheKey = 'n1_explanation_translation_cache'

const exampleTranslationTimers = new Map()

const translationPending = new Map()

let translationMemoryCache = null

let explanationMemoryCache = null

/* =========================================================
   TRANSLATION CONFIG
   ========================================================= */

const TRANSLATION_CONFIG = {
  timeout: 10000,
  retries: 2,
  myMemory: 'https://api.mymemory.translated.net/get',
  google: 'https://translate.googleapis.com/translate_a/single'
}

/* =========================================================
   EXPLANATION CACHE
   ========================================================= */

function getExplanationCache () {
  if (explanationMemoryCache) {
    return explanationMemoryCache
  }

  try {
    const parsed = JSON.parse(localStorage.getItem(explanationCacheKey) || '{}')

    explanationMemoryCache =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : {}
  } catch (error) {
    console.warn('Explanation cache read failed:', error)

    explanationMemoryCache = {}
  }

  return explanationMemoryCache
}

function saveExplanationCache (cache) {
  explanationMemoryCache = cache

  try {
    localStorage.setItem(explanationCacheKey, JSON.stringify(cache))
  } catch (error) {
    console.warn('Explanation cache save skipped:', error)
  }
}

/* =========================================================
   TRANSLATION CACHE
   ========================================================= */

function getTranslationCache () {
  if (translationMemoryCache) {
    return translationMemoryCache
  }

  try {
    const parsed = JSON.parse(localStorage.getItem(translationCacheKey) || '{}')

    translationMemoryCache =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : {}
  } catch (error) {
    console.warn('Translation cache read failed:', error)

    translationMemoryCache = {}
  }

  return translationMemoryCache
}

function saveTranslationCache (cache) {
  translationMemoryCache = cache

  try {
    localStorage.setItem(translationCacheKey, JSON.stringify(cache))
  } catch (error) {
    console.warn('Translation cache save skipped:', error)
  }
}

/* =========================================================
   VOICE
   ========================================================= */

let availableVoices = []

let speakingCardId = null

let speechQueue = []

let speechIndex = 0

let speechPaused = false

let currentSpeakingItem = null

function loadVoices () {
  if (!('speechSynthesis' in window)) {
    return
  }

  availableVoices = window.speechSynthesis.getVoices() || []
}

loadVoices()

if ('speechSynthesis' in window) {
  window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
}

function findJapaneseVoice () {
  loadVoices()

  if (!availableVoices.length) {
    return null
  }

  const priorities = [
    voice =>
      /microsoft/i.test(voice.name) &&
      /online|natural/i.test(voice.name) &&
      /^ja/i.test(voice.lang),

    voice => /microsoft/i.test(voice.name) && /^ja/i.test(voice.lang),

    voice => /^ja-JP/i.test(voice.lang),

    voice => /^ja/i.test(voice.lang)
  ]

  for (const test of priorities) {
    const found = availableVoices.find(test)

    if (found) {
      return found
    }
  }

  return null
}

/* =========================================================
   LANGUAGE DETECTION
   ========================================================= */

function detectLanguage (text) {
  const clean = stripHTML(text)

  if (!clean) {
    return 'id'
  }

  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(clean)) {
    return 'ja'
  }

  if (/[\u4e00-\u9fff]/.test(clean)) {
    return 'zh-CN'
  }

  const lower = clean.toLowerCase()

  const indonesianPattern =
    /(\byang\b|\bdan\b|\buntuk\b|\bdengan\b|\btidak\b|\bini\b|\bitu\b|\bakan\b|\bsudah\b|\bbelum\b|\bkarena\b|\bagar\b|\bketika\b|\bjika\b|\bbisa\b|\bharus\b|\bsangat\b|\bdalam\b|\bpada\b|\bsebuah\b|\btersebut\b|\bdapat\b|\bmenjadi\b|\blebih\b|\bhanya\b)/i

  return indonesianPattern.test(lower) ? 'id' : 'en'
}

/* =========================================================
   API LANGUAGE
   ========================================================= */

function normalizeApiLanguage (lang) {
  const value = String(lang || '')
    .trim()
    .toLowerCase()

  if (value === 'zh' || value === 'zh-cn' || value === 'cn') {
    return 'zh-CN'
  }

  if (value === 'jp') {
    return 'ja'
  }

  return value
}

function getTargetLanguage (sourceLanguage) {
  const source = normalizeApiLanguage(sourceLanguage)

  const selected = getApiLanguage(currentLanguage)

  if (source === selected) {
    if (source === 'ja') {
      return 'id'
    }

    if (source === 'id') {
      return 'en'
    }

    if (source === 'en') {
      return 'id'
    }

    if (source === 'zh-CN') {
      return 'id'
    }
  }

  return selected
}

/* =========================================================
   FETCH WITH TIMEOUT
   ========================================================= */

async function fetchWithTimeout (
  url,
  options = {},
  timeout = TRANSLATION_CONFIG.timeout
) {
  const controller = new AbortController()

  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...(options.headers || {})
      }
    })
  } finally {
    clearTimeout(timeoutId)
  }
}

/* =========================================================
   MYMEMORY
   ========================================================= */

async function translateWithMyMemory (text, from, to) {
  const source = normalizeApiLanguage(from)

  const target = normalizeApiLanguage(to)

  const url = new URL(TRANSLATION_CONFIG.myMemory)

  url.searchParams.set('q', text)

  url.searchParams.set('langpair', `${source}|${target}`)

  const response = await fetchWithTimeout(url.toString(), {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error(`MyMemory HTTP ${response.status}`)
  }

  const data = await response.json()

  if (data && data.responseStatus && Number(data.responseStatus) !== 200) {
    throw new Error(`MyMemory API status ${data.responseStatus}`)
  }

  if (data?.quotaFinished === true) {
    throw new Error('MyMemory quota finished')
  }

  const translated =
    data?.responseData?.translatedText || data?.matches?.[0]?.translation || ''

  const result = String(translated || '').trim()

  if (!result) {
    throw new Error('MyMemory returned empty translation')
  }

  return result
}

/* =========================================================
   GOOGLE FALLBACK
   ========================================================= */

async function translateWithGoogleFallback (text, from, to) {
  const source = normalizeApiLanguage(from)

  const target = normalizeApiLanguage(to)

  const url = new URL(TRANSLATION_CONFIG.google)

  url.searchParams.set('client', 'gtx')

  url.searchParams.set('sl', source)

  url.searchParams.set('tl', target)

  url.searchParams.set('dt', 't')

  url.searchParams.set('q', text)

  const response = await fetchWithTimeout(url.toString(), {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error(`Fallback translator HTTP ${response.status}`)
  }

  const data = await response.json()

  const translated =
    Array.isArray(data) && Array.isArray(data[0])
      ? data[0]
          .map(part => (Array.isArray(part) ? part[0] : ''))
          .filter(Boolean)
          .join('')
      : ''

  const result = String(translated || '').trim()

  if (!result) {
    throw new Error('Fallback translator returned empty result')
  }

  return result
}

/* =========================================================
   TRANSLATE TEXT
   ========================================================= */

async function translateText (text, from = 'ja', to = 'id') {
  const clean = stripHTML(text)

  if (!clean) {
    return ''
  }

  const source = normalizeApiLanguage(from)

  const target = normalizeApiLanguage(to)

  if (source === target) {
    return clean
  }

  const cache = getTranslationCache()

  const cacheKey = `${source}__${target}__${clean}`

  if (cache[cacheKey] && typeof cache[cacheKey] === 'string') {
    return cache[cacheKey]
  }

  if (translationPending.has(cacheKey)) {
    return translationPending.get(cacheKey)
  }

  const promise = (async () => {
    let lastError = null

    for (let attempt = 0; attempt < TRANSLATION_CONFIG.retries; attempt++) {
      try {
        const result = await translateWithMyMemory(clean, source, target)

        if (result) {
          cache[cacheKey] = result

          saveTranslationCache(cache)

          return result
        }
      } catch (error) {
        lastError = error

        if (attempt < TRANSLATION_CONFIG.retries - 1) {
          await new Promise(resolve => setTimeout(resolve, 350 * (attempt + 1)))
        }
      }
    }

    try {
      const fallback = await translateWithGoogleFallback(clean, source, target)

      if (fallback) {
        cache[cacheKey] = fallback

        saveTranslationCache(cache)

        return fallback
      }
    } catch (error) {
      lastError = error
    }

    console.warn('Translation unavailable:', {
      source,
      target,
      error: lastError?.message || 'Unknown translation error'
    })

    return ''
  })()

  translationPending.set(cacheKey, promise)

  try {
    return await promise
  } finally {
    translationPending.delete(cacheKey)
  }
}
/* =========================================================
   EXPLANATION AUTO TRANSLATION
   ========================================================= */

async function getExplanationForLanguage (item) {
  const source = stripHTML(item?.explanation || '')

  if (!source) {
    return ''
  }

  const lang = normalizeLanguage(currentLanguage)

  if (lang === 'id') {
    return source
  }

  const target = getApiLanguage(lang)

  const cache = getExplanationCache()

  const cacheKey = `${lang}::${source}`

  if (cache[cacheKey] && typeof cache[cacheKey] === 'string') {
    return cache[cacheKey]
  }

  const translated = await translateText(source, 'id', target)

  if (translated) {
    cache[cacheKey] = translated

    saveExplanationCache(cache)

    return translated
  }

  return source
}

/* =========================================================
   TTS
   ========================================================= */

let speechSession = 0

async function buildSpeechQueue (item) {
  const queue = []

  if (item?.rule) {
    queue.push({
      text: `文法 ${stripHTML(item.rule)}`,
      type: 'jp'
    })
  }

  if (item?.reading) {
    queue.push({
      text: stripHTML(item.reading),
      type: 'jp'
    })
  }

  let explanationJP = ''

  if (item?.explanationJP) {
    explanationJP = stripHTML(item.explanationJP)
  } else if (item?.explanation) {
    explanationJP = await translateText(item.explanation, 'id', 'ja')
  }

  if (explanationJP) {
    queue.push({
      text: `簡単な説明。${explanationJP}`,
      type: 'jp'
    })
  }

  if (Array.isArray(item?.examples)) {
    item.examples.forEach((example, index) => {
      const clean = stripHTML(example)

      if (!clean) {
        return
      }

      queue.push({
        text: `例文 ${index + 1}。${clean}`,
        type: 'jp'
      })
    })
  }

  return queue
}

async function startSpeech (item) {
  if (!('speechSynthesis' in window)) {
    alert('Browser ini tidak mendukung Text to Speech.')

    return
  }

  stopSpeech()

  const session = ++speechSession

  currentSpeakingItem = item

  speakingCardId = String(item.id)

  speechPaused = false
  speechIndex = 0

  updateSpeechButtons()

  const queue = await buildSpeechQueue(item)

  if (session !== speechSession || speakingCardId !== String(item.id)) {
    return
  }

  speechQueue = queue

  speakCurrentChunk(session)
}

function speakCurrentChunk (session = speechSession) {
  if (session !== speechSession) {
    return
  }

  if (!speechQueue.length || speechIndex >= speechQueue.length) {
    stopSpeech()

    return
  }

  if (!('speechSynthesis' in window)) {
    stopSpeech()

    return
  }

  const chunk = speechQueue[speechIndex]

  if (!chunk?.text) {
    speechIndex++

    speakCurrentChunk(session)

    return
  }

  const utterance = new SpeechSynthesisUtterance(chunk.text)

  utterance.lang = 'ja-JP'

  utterance.rate = 0.88

  utterance.pitch = 1

  utterance.volume = 1

  const voice = findJapaneseVoice()

  if (voice) {
    utterance.voice = voice
  }

  utterance.onstart = () => {
    if (session === speechSession) {
      updateSpeechButtons()
    }
  }

  utterance.onend = () => {
    if (session !== speechSession) {
      return
    }

    speechIndex++

    speakCurrentChunk(session)
  }

  utterance.onerror = event => {
    console.warn('TTS error:', event?.error || 'unknown')

    if (session === speechSession) {
      stopSpeech()
    }
  }

  try {
    window.speechSynthesis.speak(utterance)
  } catch (error) {
    console.warn('Speech start failed:', error)

    stopSpeech()
  }
}

window.togglePauseSpeech = function () {
  if (!('speechSynthesis' in window)) {
    return
  }

  if (speakingCardId === null) {
    return
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()

      speechPaused = false
    } else {
      window.speechSynthesis.pause()

      speechPaused = true
    }

    updateSpeechButtons()
  } catch (error) {
    console.warn('Speech pause/resume failed:', error)
  }
}

window.replaySpeech = function () {
  if (!currentSpeakingItem) {
    return
  }

  startSpeech(currentSpeakingItem)
}

window.stopSpeech = function () {
  speechSession++

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel()
    } catch (error) {
      console.warn('Speech cancel failed:', error)
    }
  }

  speakingCardId = null

  speechQueue = []

  speechIndex = 0

  speechPaused = false

  currentSpeakingItem = null

  updateSpeechButtons()
}

function stopSpeech () {
  window.stopSpeech()
}

function updateSpeechButtons () {
  if (!grammarCards) {
    return
  }

  grammarCards.querySelectorAll('.grammar-card').forEach(card => {
    const id = card.dataset.id

    const status = card.querySelector('.tts-status')

    const play = card.querySelector('.tts-play')

    const pause = card.querySelector('.tts-pause')

    if (!status) {
      return
    }

    const active = id === speakingCardId

    card.classList.toggle('speaking', active)

    if (active) {
      status.textContent = speechPaused
        ? 'Dijeda'
        : 'Sedang membaca bahasa Jepang...'

      if (play) {
        play.innerHTML = '<i class="bi bi-stop-fill"></i>'
      }

      if (pause) {
        pause.innerHTML = speechPaused
          ? '<i class="bi bi-play-fill"></i>'
          : '<i class="bi bi-pause-fill"></i>'
      }
    } else {
      status.textContent = '読み上げ機能'

      if (play) {
        play.innerHTML = '<i class="bi bi-play-fill"></i>'
      }

      if (pause) {
        pause.innerHTML = '<i class="bi bi-pause-fill"></i>'
      }
    }
  })
}

window.handleMainSpeech = function (id) {
  const item = findItemById(id)

  if (!item) {
    return
  }

  if (speakingCardId === String(id)) {
    stopSpeech()

    return
  }

  startSpeech(item)
}

/* =========================================================
   FIND ITEM
   ========================================================= */

function findItemById (id) {
  return allGrammar.find(item => String(item.id) === String(id))
}

/* =========================================================
   EXAMPLE STATE
   ========================================================= */

function createExampleState (item, example, index) {
  return {
    exampleId: `${item.id}_${index}`,

    originalHTML: String(example ?? ''),

    originalText: stripHTML(example),

    furiganaHTML: '',

    furiganaReady: false,

    furiganaBusy: false,

    translated: false,

    translation: '',

    sourceLanguage: null,

    targetLanguage: null,

    key: null,

    busy: false,

    renderVersion: renderVersion
  }
}

function getExampleOriginalHTML (state) {
  if (state?.furiganaHTML) {
    return state.furiganaHTML
  }

  return state?.originalHTML || escapeHTML(state?.originalText || '')
}

/* =========================================================
   EXAMPLE TIMER CLEANUP
   ========================================================= */

function clearExampleTimer (state) {
  if (!state?.key) {
    return
  }

  const timer = exampleTranslationTimers.get(state.key)

  if (timer) {
    clearTimeout(timer)
    exampleTranslationTimers.delete(state.key)
  }
}

/* =========================================================
   RESET EXAMPLE
   ========================================================= */

function resetExampleDisplay (exampleBox, state) {
  if (!exampleBox || !state) {
    return
  }

  clearExampleTimer(state)

  exampleBox.classList.remove('translating', 'translated', 'copied')

  exampleBox.innerHTML = `
    <i class="bi bi-caret-right-fill"></i>
    <span class="example-content">
      ${getExampleOriginalHTML(state)}
    </span>
  `

  state.translated = false

  state.translation = ''

  state.sourceLanguage = null

  state.targetLanguage = null

  state.key = null

  state.busy = false

  /*
     Kalau furigana belum siap,
     kita masukkan kembali ke queue.
  */
  if (!state.furiganaReady && detectLanguage(state.originalText) === 'ja') {
    if (furiganaObserver) {
      try {
        furiganaObserver.observe(exampleBox)
      } catch (_) {}
    } else {
      enqueueFuriganaBox(exampleBox)
    }
  }
}

/* =========================================================
   SHOW EXAMPLE TRANSLATION
   ========================================================= */

async function showExampleTranslation (exampleBox) {
  const state = exampleBox?._translationState

  if (!state) {
    return
  }

  if (state.translated) {
    resetExampleDisplay(exampleBox, state)

    return
  }

  if (state.busy) {
    return
  }

  const originalText = state.originalText

  if (!originalText) {
    return
  }

  const sourceLanguage = detectLanguage(originalText)

  const targetLanguage = getTargetLanguage(sourceLanguage)

  const requestKey = [
    state.exampleId,
    sourceLanguage,
    targetLanguage,
    originalText
  ].join('::')

  state.sourceLanguage = sourceLanguage

  state.targetLanguage = targetLanguage

  state.key = requestKey

  state.busy = true

  const localRenderVersion = state.renderVersion

  exampleBox.classList.add('translating')

  exampleBox.classList.remove('translated', 'copied')

  exampleBox.innerHTML = `
    <i class="bi bi-translate"></i>
    <span>
      ${escapeHTML(getLanguageText('translating'))}
    </span>
  `

  try {
    const translated = await translateText(
      originalText,
      sourceLanguage,
      targetLanguage
    )

    if (!document.body.contains(exampleBox)) {
      return
    }

    const latestState = exampleBox._translationState

    if (!latestState) {
      return
    }

    if (latestState.key !== requestKey) {
      return
    }

    if (latestState.renderVersion !== localRenderVersion) {
      return
    }

    if (!translated) {
      latestState.busy = false

      exampleBox.classList.remove('translating')

      exampleBox.innerHTML = `
        <i class="bi bi-info-circle"></i>
        <span>
          ${escapeHTML(getLanguageText('translationFailed'))}
        </span>
      `

      const errorTimer = setTimeout(() => {
        if (document.body.contains(exampleBox)) {
          const currentState = exampleBox._translationState

          if (currentState) {
            resetExampleDisplay(exampleBox, currentState)
          }
        }
      }, 1800)

      exampleTranslationTimers.set(requestKey, errorTimer)

      return
    }

    latestState.translation = translated

    latestState.translated = true

    latestState.busy = false

    exampleBox.classList.remove('translating')

    exampleBox.classList.add('translated')

    exampleBox.innerHTML = `
      <i class="bi bi-translate"></i>
      <span>
        ${escapeHTML(translated)}
      </span>
    `

    const timer = setTimeout(() => {
      if (!document.body.contains(exampleBox)) {
        return
      }

      const currentState = exampleBox._translationState

      if (currentState?.translated) {
        resetExampleDisplay(exampleBox, currentState)
      }
    }, 5000)

    exampleTranslationTimers.set(requestKey, timer)
  } catch (error) {
    console.warn('Example translation failed:', error)

    if (document.body.contains(exampleBox)) {
      resetExampleDisplay(exampleBox, state)
    }
  } finally {
    if (exampleBox && exampleBox._translationState) {
      exampleBox._translationState.busy = false
    }
  }
}

/* =========================================================
   COPY EXAMPLE
   ========================================================= */

async function copyExampleText (exampleBox) {
  const state = exampleBox?._translationState

  if (!state) {
    return
  }

  const text =
    state.translated && state.translation
      ? state.translation
      : state.originalText

  if (!text) {
    return
  }

  const message = state.translated
    ? getLanguageText('copiedTranslation')
    : getLanguageText('copiedOriginal')

  try {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text)
    } else {
      throw new Error('Clipboard unavailable')
    }

    showCopyFeedback(exampleBox, message)
  } catch (error) {
    console.warn('Clipboard API failed:', error)

    const textarea = document.createElement('textarea')

    textarea.value = text

    textarea.style.position = 'fixed'

    textarea.style.left = '-9999px'

    textarea.style.top = '0'

    textarea.style.opacity = '0'

    document.body.appendChild(textarea)

    textarea.focus()
    textarea.select()

    let copied = false

    try {
      copied = document.execCommand('copy')
    } catch (fallbackError) {
      console.warn('Fallback copy failed:', fallbackError)
    }

    textarea.remove()

    if (copied) {
      showCopyFeedback(exampleBox, message)
    }
  }
}

function showCopyFeedback (exampleBox, message) {
  if (!document.body.contains(exampleBox)) {
    return
  }

  const previousHTML = exampleBox.innerHTML

  exampleBox.classList.add('copied')

  exampleBox.innerHTML = `
    <i class="bi bi-check-circle-fill"></i>
    <span>
      ${escapeHTML(message)}
    </span>
  `

  setTimeout(() => {
    if (!document.body.contains(exampleBox)) {
      return
    }

    const state = exampleBox._translationState

    if (state?.translated) {
      exampleBox.innerHTML = `
        <i class="bi bi-translate"></i>
        <span>
          ${escapeHTML(state.translation)}
        </span>
      `
    } else {
      exampleBox.innerHTML = previousHTML
    }

    exampleBox.classList.remove('copied')
  }, 900)
}

/* =========================================================
   CREATE CARD HTML
   ========================================================= */

function createCardHTML (item, index) {
  const savedStatus = getStatus(item)

  const examples = Array.isArray(item.examples) ? item.examples : []

  const lang = normalizeLanguage(currentLanguage)

  const meaning =
    lang === 'en'
      ? item.meaning?.en || '-'
      : lang === 'cn'
      ? item.meaning?.cn || item.meaning?.zh || '-'
      : item.meaning?.id || '-'

  const examplesHTML = examples
    .map((example, exampleIndex) => {
      const state = createExampleState(item, example, exampleIndex)

      /*
             Hanya simpan ID di HTML.
             State asli dipasang setelah render.
          */
      return `
            <div
              class="example-box"
              role="button"
              tabindex="0"
              title="${escapeHTML(getLanguageText('translateTitle'))}"
              data-example-id="${escapeHTML(state.exampleId)}"
            >
              <i class="bi bi-caret-right-fill"></i>
              <span class="example-content">
                ${escapeHTML(state.originalText)}
              </span>
            </div>
          `
    })
    .join('')

  const reading = item.reading || item.yomi || item.furigana || ''

  const weekNumber = String(item._week || 'week1').replace('week', '')

  const dayNumber = String(item._day || 'day1').replace('day', '')

  const moduleText =
    item.module || item.lesson || `M${weekNumber} - H${dayNumber}`

  return `
    <article
      class="grammar-card"
      data-id="${escapeHTML(String(item.id))}"
      style="animation-delay:${Math.min(index * 0.02, 0.5)}s"
    >

      <div class="card-top">

        <span class="day-badge">
          <i class="bi bi-bookmark-star-fill"></i>
          ${escapeHTML(moduleText)}
        </span>

        ${
          item.formal
            ? `
              <span class="module-badge">
                <i class="bi bi-building"></i>
                Formal
              </span>
            `
            : `
              <span class="module-badge">
                <i class="bi bi-stars"></i>
                N1
              </span>
            `
        }

      </div>

      <div class="rule-area">

        <div class="rule-reading">
          ${escapeHTML(reading)}
        </div>

        <div class="grammar-rule">
          ${item.rule || '-'}
        </div>

        <div class="meaning-main">
          <span>
            ${
              lang === 'id'
                ? item.meaning?.id || ''
                : lang === 'en'
                ? item.meaning?.en || ''
                : item.meaning?.cn || item.meaning?.zh || ''
            }
          </span>
        </div>

        <button
          class="speaker-main-btn"
          type="button"
          data-action="speech-main"
          data-id="${escapeHTML(String(item.id))}"
          title="Bacakan bahasa Jepang"
          aria-label="Bacakan bahasa Jepang"
        >
          <i class="bi bi-volume-up-fill"></i>
        </button>

      </div>

      <div class="card-body">

        <div class="info-block">

          <div class="info-label">
            <i class="bi bi-info-circle-fill"></i>
            ${escapeHTML(getLanguageText('meaning'))}
          </div>

          <div class="info-text">
            <span>
              ${escapeHTML(meaning)}
            </span>
          </div>

        </div>

        <div class="info-block">

          <div
            class="translation-box"
            data-explanation-id="${escapeHTML(String(item.id))}"
          >

            <div class="translation-label">
              <i class="bi bi-globe2"></i>

              <span>
                ${escapeHTML(getLanguageText('explanation'))}
              </span>
            </div>

            <span class="id-explanation">
              ${
                lang === 'id'
                  ? escapeHTML(stripHTML(item.explanation || '')) || '—'
                  : escapeHTML(getLanguageText('translating'))
              }
            </span>

          </div>

        </div>

        <div class="info-block examples">

          <div class="info-label">
            <i class="bi bi-chat-square-text-fill"></i>

            <span class="example-label">
              ${
                lang === 'id'
                  ? 'Contoh Kalimat'
                  : lang === 'en'
                  ? 'Example Sentences'
                  : '例句'
              }
            </span>
          </div>

          ${
            examplesHTML ||
            `
              <div class="example-box">
                <i class="bi bi-dash-circle"></i>

                <span>
                  ${escapeHTML(getLanguageText('noExample'))}
                </span>
              </div>
            `
          }

        </div>

      </div>

      <div class="tts-toolbar">

        <div class="tts-status">
          読み上げ機能
        </div>

        <button
          class="tts-btn tts-play"
          type="button"
          data-action="speech-main"
          data-id="${escapeHTML(String(item.id))}"
          title="Play / Stop"
          aria-label="Play / Stop"
        >
          <i class="bi bi-play-fill"></i>
        </button>

        <button
          class="tts-btn tts-pause"
          type="button"
          data-action="speech-pause"
          title="Pause / Resume"
          aria-label="Pause / Resume"
        >
          <i class="bi bi-pause-fill"></i>
        </button>

        <button
          class="tts-btn"
          type="button"
          data-action="speech-replay"
          title="Ulangi"
          aria-label="Ulangi"
        >
          <i class="bi bi-arrow-repeat"></i>
        </button>

        <button
          class="tts-btn stop"
          type="button"
          data-action="speech-stop"
          title="Stop"
          aria-label="Stop"
        >
          <i class="bi bi-stop-fill"></i>
        </button>

      </div>

      <div class="card-footer">

        <button
          class="
            status-btn
            btn-0
            ${savedStatus === '0' ? 'active' : ''}
          "
          type="button"
          data-action="status"
          data-id="${escapeHTML(String(item.id))}"
          data-status="0"
        >
          <i class="bi bi-x-circle"></i>
          <span>Belum</span>
        </button>

        <button
          class="
            status-btn
            btn-1
            ${savedStatus === '1' ? 'active' : ''}
          "
          type="button"
          data-action="status"
          data-id="${escapeHTML(String(item.id))}"
          data-status="1"
        >
          <i class="bi bi-dash-circle"></i>
          <span>Agak</span>
        </button>

        <button
          class="
            status-btn
            btn-2
            ${savedStatus === '2' ? 'active' : ''}
          "
          type="button"
          data-action="status"
          data-id="${escapeHTML(String(item.id))}"
          data-status="2"
        >
          <i class="bi bi-check-circle"></i>
          <span>Hafal</span>
        </button>

      </div>

    </article>
  `
}

/* =========================================================
   INITIALIZE EXAMPLE STATES
   ========================================================= */

function initializeExampleStates (items) {
  if (!grammarCards) {
    return
  }

  const cardMap = new Map()

  grammarCards.querySelectorAll('.grammar-card[data-id]').forEach(card => {
    cardMap.set(String(card.dataset.id), card)
  })

  items.forEach(item => {
    const card = cardMap.get(String(item.id))

    if (!card) {
      return
    }

    const examples = Array.isArray(item.examples) ? item.examples : []

    examples.forEach((example, index) => {
      const exampleBox = card.querySelector(
        `.example-box[data-example-id="${CSS.escape(`${item.id}_${index}`)}"]`
      )

      if (!exampleBox) {
        return
      }

      exampleBox._translationState = createExampleState(item, example, index)
    })
  })
}

/* =========================================================
   GET FILTERED ITEMS
   ========================================================= */

function getFilteredItems () {
  let items = []

  if (currentSearch) {
    const query = currentSearch.toLowerCase()

    items = allGrammar.filter(item => {
      const searchable = searchIndex.get(String(item.id)) || ''

      return searchable.includes(query)
    })
  } else {
    const day = courseData[activeWeek]?.days?.[activeDay]

    items = Array.isArray(day?.grammar)
      ? day.grammar.map(item => ({
          ...item,
          _week: activeWeek,
          _day: activeDay
        }))
      : []
  }

  if (currentStatus !== 'all') {
    items = items.filter(item => getStatus(item) === currentStatus)
  }

  return items
}

/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress (items) {
  if (!elementExists(progressPercent)) {
    return
  }

  if (!items.length) {
    progressPercent.textContent = '0%'

    if (progressBarFill) {
      progressBarFill.style.width = '0%'
    }

    return
  }

  let mastered = 0

  for (const item of items) {
    if (getStatus(item) === '2') {
      mastered++
    }
  }

  const percentage = Math.round((mastered / items.length) * 100)

  progressPercent.textContent = `${percentage}%`

  if (progressBarFill) {
    progressBarFill.style.width = `${percentage}%`
  }
}
/* =========================================================
   HEADER
   ========================================================= */

function updateContentHeader () {
  if (!elementExists(weekTitle) || !elementExists(dayTitle)) {
    return
  }

  if (currentSearch) {
    weekTitle.textContent = 'Hasil Pencarian'

    dayTitle.textContent = `Menemukan materi untuk "${currentSearch}"`

    return
  }

  const week = courseData[activeWeek]

  const day = week?.days?.[activeDay]

  weekTitle.textContent =
    activeDay === 'day7' ? week?.title || '' : week?.title || 'Materi JLPT N1'

  dayTitle.textContent = day?.title || ''
}

/* =========================================================
   FILTER LABEL
   ========================================================= */

function updateFilterLabel () {
  if (!elementExists(activeFilterLabel)) {
    return
  }

  if (currentSearch) {
    activeFilterLabel.textContent = `Pencarian: "${currentSearch}"`

    return
  }

  const weekNumber = activeWeek.replace('week', '')

  const dayNumber = activeDay.replace('day', '')

  activeFilterLabel.textContent =
    activeDay === 'day7'
      ? `Minggu ${weekNumber} • Hari 7 • Full Exam`
      : `Minggu ${weekNumber} • Hari ${dayNumber}`
}

/* =========================================================
   WEEK SELECT
   ========================================================= */

function populateWeekSelect () {
  if (!elementExists(weekSelect)) {
    return
  }

  const fragment = document.createDocumentFragment()

  for (let week = 1; week <= 8; week++) {
    const option = document.createElement('option')

    option.value = `week${week}`

    option.textContent = `Minggu ${week}`

    fragment.appendChild(option)
  }

  weekSelect.replaceChildren(fragment)

  weekSelect.value = activeWeek
}

/* =========================================================
   DAY SELECT
   ========================================================= */

function populateDaySelect () {
  if (!elementExists(daySelect)) {
    return
  }

  const fragment = document.createDocumentFragment()

  for (let day = 1; day <= 7; day++) {
    const option = document.createElement('option')

    option.value = `day${day}`

    option.textContent = day === 7 ? 'Hari 7 — Full Exam' : `Hari ${day}`

    fragment.appendChild(option)
  }

  daySelect.replaceChildren(fragment)

  daySelect.value = activeDay
}

/* =========================================================
   RENDER CARDS
   ========================================================= */

async function renderCards () {
  const thisRender = ++renderVersion

  stopSpeech()

  /*
     Jangan biarkan pekerjaan furigana dari
     halaman sebelumnya tetap aktif.
  */
  cancelFuriganaJobs()

  if (explanationObserver) {
    try {
      explanationObserver.disconnect()
    } catch (_) {}

    explanationObserver = null
  }

  /*
     Hari 7 = Full Exam.
     Card grammar disembunyikan.
  */
  if (activeDay === 'day7' && !currentSearch) {
    if (grammarCards) {
      grammarCards.replaceChildren()

      grammarCards.classList.add('hidden')
    }

    if (emptyState) {
      emptyState.classList.add('hidden')
    }

    if (resultCounter) {
      resultCounter.textContent = 'Full Exam'
    }

    updateProgress([])

    return
  }

  if (grammarCards) {
    grammarCards.classList.remove('hidden')
  }

  const items = getFilteredItems()

  if (grammarCards) {
    if (!items.length) {
      grammarCards.replaceChildren()
    } else {
      const html = items
        .map((item, index) => createCardHTML(item, index))
        .join('')

      grammarCards.innerHTML = html
    }
  }

  if (emptyState) {
    emptyState.classList.toggle('hidden', items.length !== 0)
  }

  if (resultCounter) {
    resultCounter.textContent = `${items.length} materi`
  }

  updateProgress(items)

  if (!items.length) {
    return
  }

  /*
     Pasang state contoh setelah DOM
     selesai dibuat.
  */
  initializeExampleStates(items)

  /*
     Pastikan render lama tidak
     menjalankan pekerjaan async.
  */
  if (thisRender !== renderVersion) {
    return
  }

  /*
     Furigana dijalankan lazy.
  */
  applyFuriganaToExamples()

  /*
     Terjemahan explanation juga
     tidak boleh memblokir render.
  */
  setupExplanationObserver(items, thisRender)

  idle(() => {
    if (thisRender !== renderVersion) {
      return
    }

    warmupVisibleFurigana()
  })
}

/* =========================================================
   EXPLANATION OBSERVER
   ========================================================= */

function setupExplanationObserver (items, renderId) {
  if (normalizeLanguage(currentLanguage) === 'id') {
    loadCardTranslations(items, renderId).catch(error =>
      console.warn('Card translation load failed:', error)
    )

    return
  }

  if (typeof IntersectionObserver === 'undefined') {
    loadLimitedCardTranslations(items, renderId, 3)

    return
  }

  explanationObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }

        const box = entry.target

        explanationObserver.unobserve(box)

        const id = box.dataset.explanationId

        const item = items.find(current => String(current.id) === String(id))

        if (!item) {
          return
        }

        translateExplanationBox(item, box, renderId)
      })
    },
    {
      root: null,
      rootMargin: '300px 0px',
      threshold: 0.01
    }
  )

  const boxes =
    grammarCards?.querySelectorAll('.translation-box[data-explanation-id]') ||
    []

  boxes.forEach(box => {
    explanationObserver.observe(box)
  })
}

async function loadLimitedCardTranslations (items, renderId, limit = 3) {
  let processed = 0

  for (const item of items) {
    if (processed >= limit) {
      break
    }

    if (renderId !== renderVersion) {
      return
    }

    const box = grammarCards?.querySelector(
      `.translation-box[data-explanation-id="${CSS.escape(String(item.id))}"]`
    )

    if (!box) {
      continue
    }

    await translateExplanationBox(item, box, renderId)

    processed++
  }
}

/* =========================================================
   TRANSLATE EXPLANATION BOX
   ========================================================= */

async function translateExplanationBox (item, box, renderId) {
  if (renderId !== renderVersion) {
    return
  }

  if (!box) {
    return
  }

  const target = box.querySelector('.id-explanation')

  if (!target) {
    return
  }

  if (box.dataset.loaded === 'true') {
    return
  }

  box.dataset.loaded = 'loading'

  target.textContent = getLanguageText('translating')

  try {
    const translated = await getExplanationForLanguage(item)

    if (renderId !== renderVersion) {
      return
    }

    if (!document.body.contains(target)) {
      return
    }

    target.textContent = translated || stripHTML(item.explanation || '') || '—'

    box.dataset.loaded = 'true'
  } catch (error) {
    console.warn('Explanation translation failed:', error)

    if (renderId === renderVersion && document.body.contains(target)) {
      target.textContent = stripHTML(item.explanation || '') || '—'

      box.dataset.loaded = 'true'
    }
  }
}

/* =========================================================
   LOAD CARD TRANSLATIONS
   ========================================================= */

async function loadCardTranslations (items, renderId) {
  const selectedLanguage = normalizeLanguage(currentLanguage)

  if (selectedLanguage === 'id') {
    items.forEach(item => {
      if (renderId !== renderVersion) {
        return
      }

      const box = grammarCards?.querySelector(
        `.translation-box[data-explanation-id="${CSS.escape(String(item.id))}"]`
      )

      if (!box) {
        return
      }

      const target = box.querySelector('.id-explanation')

      if (!target) {
        return
      }

      target.textContent = stripHTML(item.explanation || '') || '—'

      box.dataset.loaded = 'true'
    })

    return
  }

  /*
     Untuk browser tanpa IntersectionObserver,
     tetap batasi request.
  */
  await loadLimitedCardTranslations(items, renderId, 3)
}

/* =========================================================
   EXAM
   ========================================================= */

function renderExam (examData) {
  if (!elementExists(miniExam)) {
    return
  }

  if (currentSearch) {
    miniExam.classList.add('hidden')

    return
  }

  if (!examData) {
    miniExam.classList.add('hidden')

    return
  }

  miniExam.classList.remove('hidden')

  if (typeof examData === 'string') {
    if (examContent) {
      examContent.innerHTML = examData

      initializeHTMLExam()
    }

    return
  }

  if (examData.type === 'html') {
    if (examContent) {
      examContent.innerHTML = examData.content || ''

      initializeHTMLExam()
    }

    return
  }

  if (Array.isArray(examData.questions)) {
    renderObjectExam(examData)

    return
  }

  if (examContent) {
    examContent.innerHTML = `
      <div class="exam-empty">
        <i class="bi bi-info-circle"></i>
        Exam belum tersedia.
      </div>
    `
  }
}

/* =========================================================
   HTML EXAM
   ========================================================= */

function initializeHTMLExam () {
  if (!examContent) {
    return
  }

  const buttons = examContent.querySelectorAll('.exam-btn')

  buttons.forEach((button, index) => {
    button.dataset.examOption = String(index + 1)

    button.style.animationDelay = `${Math.min(index * 0.01, 0.3)}s`
  })

  const paragraphs = examContent.querySelectorAll('.exam-q')

  paragraphs.forEach((question, index) => {
    question.style.animationDelay = `${Math.min(index * 0.02, 0.4)}s`
  })

  window.currentObjectExam = null

  examAnswers = {}

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM
   ========================================================= */

let examAnswers = {}

function renderObjectExam (examData) {
  examAnswers = {}

  if (!examContent) {
    return
  }

  const fragment = document.createDocumentFragment()

  const container = document.createElement('div')

  container.className = 'exam-container'

  examData.questions.forEach((question, index) => {
    const questionEl = document.createElement('div')

    questionEl.className = 'exam-q'

    questionEl.dataset.questionIndex = String(index)

    const title = document.createElement('h3')

    title.textContent = `問題 ${index + 1}`

    questionEl.appendChild(title)

    const text = document.createElement('p')

    /*
         Question content berasal
         dari data internal aplikasi.
         innerHTML dipertahankan agar
         formatting Jepang tetap bekerja.
      */
    text.innerHTML = question.question || ''

    questionEl.appendChild(text)

    const optionsContainer = document.createElement('div')

    const options = Array.isArray(question.options) ? question.options : []

    options.forEach((option, optionIndex) => {
      const button = document.createElement('button')

      button.className = 'exam-opt-btn'

      button.type = 'button'

      button.dataset.examQuestion = String(index)

      button.dataset.examOption = String(optionIndex)

      button.innerHTML = `${optionIndex + 1}. ${option}`

      optionsContainer.appendChild(button)
    })

    questionEl.appendChild(optionsContainer)

    const feedback = document.createElement('div')

    feedback.className = 'exam-feedback'

    feedback.id = `exam-feedback-${index}`

    questionEl.appendChild(feedback)

    container.appendChild(questionEl)
  })

  const submit = document.createElement('button')

  submit.className = 'exam-submit'

  submit.type = 'button'

  submit.dataset.action = 'finish-exam'

  submit.innerHTML = `
    <i
      class="bi bi-send-check"
      style="font-size:18px;"
    ></i>

    Selesai & Lihat Skor
  `

  container.appendChild(submit)

  const result = document.createElement('div')

  result.id = 'objectExamResult'

  result.className = 'exam-result hidden'

  container.appendChild(result)

  fragment.appendChild(container)

  examContent.replaceChildren(fragment)

  window.currentObjectExam = examData

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM ANSWER
   ========================================================= */

window.chooseExamAnswer = function (questionIndex, optionIndex, button) {
  if (examAnswers[questionIndex] !== undefined) {
    return
  }

  const exam = window.currentObjectExam

  const question = exam?.questions?.[questionIndex]

  if (!question) {
    return
  }

  examAnswers[questionIndex] = optionIndex

  const parent = button?.parentElement

  const buttons = parent?.querySelectorAll('button') || []

  buttons.forEach(btn => {
    btn.disabled = true
  })

  if (optionIndex === question.correct) {
    button.style.background = 'var(--success)'

    button.style.color = 'white'
  } else {
    button.style.background = 'var(--danger)'

    button.style.color = 'white'

    const correctButton = buttons[question.correct]

    if (correctButton) {
      correctButton.style.background = 'var(--success)'

      correctButton.style.color = 'white'
    }
  }

  const feedback = document.getElementById(`exam-feedback-${questionIndex}`)

  if (feedback) {
    feedback.innerHTML =
      optionIndex === question.correct
        ? `
            <span style="color:var(--success)">
              <i class="bi bi-check-circle-fill"></i>
              Benar!
            </span>
          `
        : `
            <span style="color:var(--danger)">
              <i class="bi bi-x-circle-fill"></i>
              Kurang tepat.
            </span>
          `
  }

  updateExamProgress()
}

/* =========================================================
   FINISH OBJECT EXAM
   ========================================================= */

window.finishObjectExam = function () {
  const exam = window.currentObjectExam

  if (!exam) {
    return
  }

  const total = Array.isArray(exam.questions) ? exam.questions.length : 0

  if (Object.keys(examAnswers).length < total) {
    alert('Jawab semua pertanyaan terlebih dahulu.')

    return
  }

  let score = 0

  exam.questions.forEach((question, index) => {
    if (examAnswers[index] === question.correct) {
      score++
    }
  })

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  const result = document.getElementById('objectExamResult')

  if (!result) {
    return
  }

  result.classList.remove('hidden')

  result.innerHTML = `
      <i class="bi bi-trophy-fill"></i>

      Skor:
      ${score}/${total}

      (${percentage}%)

      <br>

      ${percentage >= 70 ? 'よくできました！' : 'もう一度復習しましょう。'}
    `
}

/* =========================================================
   EXAM PROGRESS
   ========================================================= */

function updateExamProgress () {
  if (!elementExists(examContent)) {
    return
  }

  const questionBlocks = examContent.querySelectorAll('.exam-q')

  if (window.currentObjectExam && questionBlocks.length) {
    const total = questionBlocks.length

    const answered = Object.keys(examAnswers).length

    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0

    if (examAnswered) {
      examAnswered.textContent = `${percentage}%`
    }

    if (examProgressFill) {
      examProgressFill.style.width = `${percentage}%`
    }

    return
  }

  if (examAnswered) {
    const total = examContent.querySelectorAll('.exam-btn').length

    examAnswered.textContent = total ? `${total} Soal` : '25 Soal'
  }

  if (examProgressFill) {
    examProgressFill.style.width = '0%'
  }
}

/* =========================================================
   STATUS UPDATE
   ========================================================= */

window.updateStatus = function (id, status, button) {
  localStorage.setItem(`status_${id}`, String(status))

  if (button?.parentElement) {
    button.parentElement.querySelectorAll('.status-btn').forEach(btn => {
      btn.classList.remove('active')
    })

    button.classList.add('active')
  }

  updateProgress(getFilteredItems())
}

/* =========================================================
   EVENT DELEGATION
   ========================================================= */

let exampleClickTimer = null

if (grammarCards) {
  grammarCards.addEventListener('click', event => {
    const target = event.target.closest('[data-action]')

    if (target) {
      const action = target.dataset.action

      if (action === 'speech-main') {
        const id = target.dataset.id

        window.handleMainSpeech(id)

        return
      }

      if (action === 'speech-pause') {
        window.togglePauseSpeech()

        return
      }

      if (action === 'speech-replay') {
        window.replaySpeech()

        return
      }

      if (action === 'speech-stop') {
        window.stopSpeech()

        return
      }

      if (action === 'status') {
        const id = target.dataset.id

        const status = target.dataset.status

        window.updateStatus(id, status, target)

        return
      }
    }

    const exampleBox = event.target.closest('.example-box[data-example-id]')

    if (!exampleBox) {
      return
    }

    const state = exampleBox._translationState

    if (!state) {
      return
    }

    if (exampleClickTimer) {
      clearTimeout(exampleClickTimer)
    }

    exampleClickTimer = setTimeout(() => {
      copyExampleText(exampleBox)

      exampleClickTimer = null
    }, 220)
  })

  grammarCards.addEventListener('dblclick', event => {
    const exampleBox = event.target.closest('.example-box[data-example-id]')

    if (!exampleBox) {
      return
    }

    if (!exampleBox._translationState) {
      return
    }

    event.preventDefault()

    if (exampleClickTimer) {
      clearTimeout(exampleClickTimer)

      exampleClickTimer = null
    }

    showExampleTranslation(exampleBox)
  })

  grammarCards.addEventListener('keydown', event => {
    const exampleBox = event.target.closest('.example-box[data-example-id]')

    if (!exampleBox) {
      return
    }

    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()

    copyExampleText(exampleBox)
  })
}

/* =========================================================
   EXAM EVENT DELEGATION
   ========================================================= */

if (examContent) {
  examContent.addEventListener('click', event => {
    const optionButton = event.target.closest('.exam-opt-btn')

    if (optionButton) {
      const questionIndex = safeNumber(optionButton.dataset.examQuestion, -1)

      const optionIndex = safeNumber(optionButton.dataset.examOption, -1)

      if (questionIndex >= 0 && optionIndex >= 0) {
        window.chooseExamAnswer(questionIndex, optionIndex, optionButton)
      }

      return
    }

    const submitButton = event.target.closest('[data-action="finish-exam"]')

    if (submitButton) {
      window.finishObjectExam()
    }
  })
}

/* =========================================================
   SEARCH
   ========================================================= */

if (searchInput) {
  searchInput.addEventListener('input', event => {
    const value = event.target.value.trim().toLowerCase()

    currentSearch = value

    updateContentHeader()
    updateFilterLabel()

    if (searchTimer) {
      clearTimeout(searchTimer)
    }

    searchTimer = setTimeout(() => {
      renderCards()

      renderExam(courseData[activeWeek]?.days?.[activeDay]?.exam)
    }, 180)
  })
}

/* =========================================================
   WEEK CHANGE
   ========================================================= */

if (weekSelect) {
  weekSelect.addEventListener('change', event => {
    activeWeek = event.target.value

    activeDay = 'day1'

    currentSearch = ''

    if (searchInput) {
      searchInput.value = ''
    }

    if (daySelect) {
      daySelect.value = activeDay
    }

    updateContentHeader()
    updateFilterLabel()

    renderCards()

    renderExam(courseData[activeWeek]?.days?.[activeDay]?.exam)
  })
}

/* =========================================================
   DAY CHANGE
   ========================================================= */

if (daySelect) {
  daySelect.addEventListener('change', event => {
    activeDay = event.target.value

    currentSearch = ''

    if (searchInput) {
      searchInput.value = ''
    }

    updateContentHeader()
    updateFilterLabel()

    renderCards()

    renderExam(courseData[activeWeek]?.days?.[activeDay]?.exam)
  })
}

/* =========================================================
   STATUS FILTER
   ========================================================= */

if (statusSelect) {
  statusSelect.addEventListener('change', event => {
    currentStatus = event.target.value

    if (activeDay === 'day7' && !currentSearch) {
      return
    }

    renderCards()
  })
}

/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters () {
  currentSearch = ''

  currentStatus = 'all'

  activeWeek = 'week1'

  activeDay = 'day1'

  if (searchInput) {
    searchInput.value = ''
  }

  if (statusSelect) {
    statusSelect.value = 'all'
  }

  if (weekSelect) {
    weekSelect.value = activeWeek
  }

  if (daySelect) {
    daySelect.value = activeDay
  }

  updateContentHeader()
  updateFilterLabel()

  renderCards()

  renderExam(courseData.week1?.days?.day1?.exam)
}

if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', resetFilters)
}

if (emptyResetBtn) {
  emptyResetBtn.addEventListener('click', resetFilters)
}

/* =========================================================
   CTRL + K SEARCH
   ========================================================= */

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()

    if (searchInput) {
      searchInput.focus()

      /*
           Select seluruh isi agar
           Ctrl + K langsung siap
           mengetik query baru.
        */
      try {
        searchInput.select()
      } catch (_) {}
    }
  }
})

/* =========================================================
   SPACE = PAUSE SPEECH
   ========================================================= */

document.addEventListener('keydown', event => {
  if (event.code !== 'Space') {
    return
  }

  const target = event.target

  if (
    target?.tagName === 'INPUT' ||
    target?.tagName === 'TEXTAREA' ||
    target?.tagName === 'SELECT' ||
    target?.isContentEditable
  ) {
    return
  }

  /*
       Jangan intercept Space ketika
       user sedang fokus ke button.
       Browser akan menangani button
       secara normal.
    */
  if (target?.closest('button')) {
    return
  }

  if (speakingCardId !== null) {
    event.preventDefault()

    window.togglePauseSpeech()
  }
})

/* =========================================================
   MEMO MODE
   ========================================================= */

if (memoToggle) {
  memoToggle.addEventListener('click', () => {
    memoMode = !memoMode

    document.body.classList.toggle('memo-mode', memoMode)

    memoToggle.classList.toggle('active', memoMode)

    memoToggle.innerHTML = memoMode
      ? `
            <i class="bi bi-eye-slash-fill"></i>
          `
      : `
            <i class="bi bi-eye"></i>
          `
  })
}

/* =========================================================
   DARK MODE
   ========================================================= */

function applyThemeIcon (dark) {
  if (!themeToggle) {
    return
  }

  themeToggle.innerHTML = dark
    ? `
        <i class="bi bi-sun-fill"></i>
      `
    : `
        <i class="bi bi-moon-stars-fill"></i>
      `
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode')

    applyThemeIcon(dark)

    try {
      localStorage.setItem('n1_dark_mode', dark ? '1' : '0')
    } catch (error) {
      console.warn('Theme preference save failed:', error)
    }
  })
}

try {
  const darkMode = localStorage.getItem('n1_dark_mode') === '1'

  if (darkMode) {
    document.body.classList.add('dark-mode')
  }

  applyThemeIcon(darkMode)
} catch (error) {
  console.warn('Theme preference read failed:', error)
}

/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLanguage (lang) {
  currentLanguage = normalizeLanguage(lang)

  try {
    localStorage.setItem('n1_language', currentLanguage)
  } catch (error) {
    console.warn('Language preference save failed:', error)
  }

  /*
     Hapus hanya class bahasa,
     bukan seluruh class body.
     Kode lama memakai document.body.className
     sehingga class seperti dark-mode,
     theme-pagi, memo-mode, dll berpotensi ikut
     hilang saat ganti bahasa.
  */
  document.body.classList.remove('lang-show-id', 'lang-show-en', 'lang-show-cn')

  document.body.classList.add(`lang-show-${currentLanguage}`)

  document.querySelectorAll('#languageMenu button').forEach(button => {
    const buttonLang = normalizeLanguage(button.dataset.lang)

    button.classList.toggle('active', buttonLang === currentLanguage)
  })

  renderCards()

  renderExam(courseData[activeWeek]?.days?.[activeDay]?.exam)
}

function initializeLanguageUI () {
  currentLanguage = normalizeLanguage(currentLanguage)

  document.body.classList.remove('lang-show-id', 'lang-show-en', 'lang-show-cn')

  document.body.classList.add(`lang-show-${currentLanguage}`)

  document.querySelectorAll('#languageMenu button').forEach(button => {
    const buttonLang = normalizeLanguage(button.dataset.lang)

    button.classList.toggle('active', buttonLang === currentLanguage)
  })
}

/* =========================================================
   LANGUAGE MENU
   ========================================================= */

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', event => {
    event.stopPropagation()

    if (languageMenu) {
      languageMenu.classList.toggle('hidden')
    }
  })
}

if (languageMenu) {
  languageMenu.addEventListener('click', event => {
    const button = event.target.closest('button[data-lang]')

    if (!button) {
      return
    }

    event.stopPropagation()

    applyLanguage(button.dataset.lang)

    languageMenu.classList.add('hidden')
  })
}

document.addEventListener('click', event => {
  if (!languageMenu) {
    return
  }

  if (languageMenu.contains(event.target)) {
    return
  }

  if (event.target === langToggleBtn) {
    return
  }

  languageMenu.classList.add('hidden')
})

/* =========================================================
   TIME PERIOD
   ========================================================= */

function getTimePeriod (hour) {
  if (hour >= 0 && hour < 3) {
    return 'larut-malam'
  }

  if (hour >= 3 && hour < 5) {
    return 'subuh'
  }

  if (hour >= 5 && hour < 10) {
    return 'pagi'
  }

  if (hour >= 10 && hour < 15) {
    return 'siang'
  }

  if (hour >= 15 && hour < 18) {
    return 'sore'
  }

  if (hour >= 18 && hour < 23) {
    return 'malam'
  }

  return 'tengah-malam'
}

/* =========================================================
   GREETING DATA
   ========================================================= */

const GREETING_DATA = {
  'larut-malam': {
    label: 'LARUT MALAM',
    japanese: 'こんばんは',
    message:
      'Kalau masih belajar, cukup lakukan review ringan. Besok masih ada waktu untuk melanjutkannya.',
    icon: 'bi-stars',
    period: 'Larut malam'
  },

  subuh: {
    label: 'SELAMAT SUBUH',
    japanese: 'おはようございます',
    message:
      'Waktu yang tenang untuk mengulang bunpou sebelum aktivitas dimulai.',
    icon: 'bi-cloud-sun-fill',
    period: 'Subuh'
  },

  pagi: {
    label: 'SELAMAT PAGI',
    japanese: 'おはようございます',
    message:
      'Mulai hari dengan sedikit latihan. Satu bunpou yang benar-benar dipahami lebih berharga daripada banyak yang hanya dibaca.',
    icon: 'bi-sun-fill',
    period: 'Pagi'
  },

  siang: {
    label: 'SELAMAT SIANG',
    japanese: 'こんにちは',
    message:
      'Tetap konsisten. Sedikit demi sedikit pola tata bahasa N1 akan menjadi semakin familiar.',
    icon: 'bi-brightness-high-fill',
    period: 'Siang'
  },

  sore: {
    label: 'SELAMAT SORE',
    japanese: 'こんにちは',
    message:
      'Matahari mulai turun. Waktunya review beberapa bunpou sebelum target harian terlewat.',
    icon: 'bi-sun',
    period: 'Sore'
  },

  malam: {
    label: 'SELAMAT MALAM',
    japanese: 'こんばんは',
    message:
      'Hari hampir selesai. Perkuat pola yang masih terasa samar sebelum menutup hari.',
    icon: 'bi-moon-stars-fill',
    period: 'Malam'
  },

  'tengah-malam': {
    label: 'TENGAH MALAM',
    japanese: 'こんばんは',
    message:
      'Sudah cukup malam. Review singkat tetap berarti, tetapi jangan memaksakan diri terlalu lama.',
    icon: 'bi-moon-fill',
    period: 'Tengah malam'
  }
}

/* =========================================================
   GREETING / CLOCK
   ========================================================= */

let lastTimePeriod = null

let lastClockText = null

function updateTimeAndGreeting () {
  const now = new Date()

  const hour = now.getHours()

  const minute = now.getMinutes()

  const second = now.getSeconds()

  const period = getTimePeriod(hour)

  /*
     Jangan rewrite seluruh class theme
     setiap detik bila period belum berubah.
  */
  if (period !== lastTimePeriod) {
    document.body.classList.remove(
      'theme-subuh',
      'theme-pagi',
      'theme-siang',
      'theme-sore',
      'theme-malam',
      'theme-tengah-malam',
      'theme-larut-malam'
    )

    document.body.classList.add(`theme-${period}`)

    lastTimePeriod = period
  }

  if (liveClock) {
    const clockText = [hour, minute, second]
      .map(value => String(value).padStart(2, '0'))
      .join(':')

    if (clockText !== lastClockText) {
      liveClock.textContent = clockText

      lastClockText = clockText
    }
  }

  const greeting = GREETING_DATA[period]

  if (!greeting) {
    return
  }

  if (greetingLabel && greetingLabel.textContent !== greeting.label) {
    greetingLabel.textContent = greeting.label
  }

  if (greetingJapanese && greetingJapanese.textContent !== greeting.japanese) {
    greetingJapanese.textContent = greeting.japanese
  }

  if (greetingMessage && greetingMessage.textContent !== greeting.message) {
    greetingMessage.textContent = greeting.message
  }

  if (greetingIcon && greetingIcon.className !== `bi ${greeting.icon}`) {
    greetingIcon.className = `bi ${greeting.icon}`
  }

  if (timePeriodText && timePeriodText.textContent !== greeting.period) {
    timePeriodText.textContent = greeting.period
  }

  /*
     Hanya update meta theme-color
     ketika period berganti.
  */
  if (period !== lastTimePeriod) {
    const root = getComputedStyle(document.body)

    const primary = root.getPropertyValue('--primary')

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', primary.trim())
  }
}

/* =========================================================
   VISIBILITY
   ========================================================= */

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') {
    /*
         Tidak perlu membatalkan Kuroshiro
         yang sedang bekerja. Tetapi queue
         yang belum dieksekusi bisa dibuang
         karena user tidak melihat hasilnya.
      */
    furiganaQueue = []

    return
  }

  /*
       Saat kembali ke tab, hanya proses
       example yang benar-benar dibutuhkan.
    */
  if (furiganaObserver) {
    applyFuriganaToExamples()
  }

  idle(() => {
    warmupVisibleFurigana()
  }, 1500)
})

/* =========================================================
   RESIZE / SCROLL
   ========================================================= */

let visibilityWarmupTimer = null

function scheduleVisibleFuriganaWarmup () {
  if (visibilityWarmupTimer) {
    return
  }

  visibilityWarmupTimer = setTimeout(() => {
    visibilityWarmupTimer = null

    warmupVisibleFurigana()
  }, 150)
}

window.addEventListener(
  'scroll',
  () => {
    scheduleVisibleFuriganaWarmup()
  },
  {
    passive: true
  }
)

window.addEventListener(
  'resize',
  () => {
    scheduleVisibleFuriganaWarmup()
  },
  {
    passive: true
  }
)

/* =========================================================
   BEFORE UNLOAD
   ========================================================= */

window.addEventListener('beforeunload', () => {
  try {
    window.stopSpeech()
  } catch (_) {}

  if (furiganaSaveTimer) {
    clearTimeout(furiganaSaveTimer)

    furiganaSaveTimer = null

    /*
         Simpan cache terakhir
         sebelum halaman ditutup.
      */
    try {
      const cache = getFuriganaCache()

      localStorage.setItem(FURIGANA_CONFIG.cacheKey, JSON.stringify(cache))
    } catch (_) {}
  }
})

/* =========================================================
   GLOBAL ERROR PROTECTION
   ========================================================= */

window.addEventListener('error', event => {
  /*
       Jangan biarkan satu error
       asynchronous menghentikan
       fungsi lain.
    */
  console.warn('App runtime error:', event.error || event.message)
})

window.addEventListener('unhandledrejection', event => {
  console.warn('Unhandled async error:', event.reason)

  /*
       Kita tidak memanggil preventDefault
       secara agresif supaya debugging
       tetap mungkin dilakukan di DevTools.
    */
})

/* =========================================================
   INITIALIZATION
   ========================================================= */

function init () {
  /*
     Build search index SATU KALI.
  */
  rebuildGrammarIndex()

  /*
     Select options.
  */
  populateWeekSelect()

  populateDaySelect()

  if (weekSelect) {
    weekSelect.value = activeWeek
  }

  if (daySelect) {
    daySelect.value = activeDay
  }

  /*
     Language UI.
  */
  initializeLanguageUI()

  /*
     Header / filter.
  */
  updateContentHeader()

  updateFilterLabel()

  /*
     Initial cards.
     renderCards() tidak menunggu
     translation/furigana.
  */
  renderCards()

  /*
     Initial exam.
  */
  renderExam(courseData.week1?.days?.day1?.exam)

  /*
     Greeting.
  */
  updateTimeAndGreeting()

  /*
     Clock hanya melakukan pekerjaan
     sangat ringan setiap detik.
  */
  setInterval(updateTimeAndGreeting, 1000)
}

/* =========================================================
   START APP
   ========================================================= */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, {
    once: true
  })
} else {
  init()
}
