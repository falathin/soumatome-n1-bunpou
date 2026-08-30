/* =========================================================
   総まとめ — JLPT N1 GRAMMAR APP
========================================================= */

/* =========================================================
   COURSE DATA
========================================================= */

const courseData = {}

for (let week = 1; week <= 8; week++) {
  const weekKey = `week${week}`
  const days = {}

  for (let day = 1; day <= 7; day++) {
    const variableName = `W${week}H${day}`
    const data = window[variableName]

    if (data) {
      days[`day${day}`] = normalizeDayData(data)
    } else {
      days[`day${day}`] = createEmptyDay(week, day)
    }
  }

  courseData[weekKey] = {
    title:
      week === 1
        ? '第1週 努力してこそ合格できる'
        : week === 2
        ? '第2週 私なりに努力している'
        : week === 3
        ? '第3週 言うまでもなく、努力している'
        : week === 4
        ? '第4週 努力なくして合格はない'
        : week === 5
        ? '第5週 努力せずには進まない'
        : week === 6
        ? '第6週 以前にも増して努力している'
        : week === 7
        ? '第7週 努力に努力を重ねている'
        : week === 8
        ? '第8週 結果はどうあれ、努力しよう'
        : `第${week}週 JLPT N1`,
    days
  }
}

/* =========================================================
   NORMALIZE DAY
========================================================= */

function normalizeDayData(data) {
  if (!data) {
    return {
      title: 'Materi belum tersedia',
      grammar: [],
      exam: null
    }
  }

  return {
    ...data,
    grammar: Array.isArray(data.grammar)
      ? data.grammar
      : [],
    exam: data.exam || null
  }
}

/* =========================================================
   EMPTY DAY
========================================================= */

function createEmptyDay(week, day) {
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
    copySuccess: 'Berhasil disalin!',
    copiedOriginal: 'Kalimat asli disalin!',
    copiedTranslation: 'Terjemahan disalin!',
    translateTitle:
      'Klik = salin • Double click = translate'
  },

  en: {
    meaning: 'English Meaning',
    explanation: 'Explanation',
    noExample: 'No example available.',
    translating: 'Translating...',
    translationFailed:
      'Translation unavailable.',
    copySuccess: 'Copied!',
    copiedOriginal:
      'Original sentence copied!',
    copiedTranslation:
      'Translation copied!',
    translateTitle:
      'Click = copy • Double click = translate'
  },

  cn: {
    meaning: '中文意思',
    explanation: '解释',
    noExample: '暂无例句。',
    translating: '正在翻译...',
    translationFailed: '暂时无法翻译。',
    copySuccess: '已复制！',
    copiedOriginal: '原句已复制！',
    copiedTranslation: '译文已复制！',
    translateTitle:
      '单击 = 复制 • 双击 = 翻译'
  }
}

function normalizeLanguage(lang) {
  const value = String(lang || '')
    .toLowerCase()
    .trim()

  if (
    value === 'en' ||
    value === 'en-us' ||
    value === 'en-gb'
  ) {
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

function getLanguageText(key) {
  const lang = normalizeLanguage(
    currentLanguage
  )

  return (
    languageText[lang]?.[key] ||
    languageText.id[key] ||
    ''
  )
}

function getApiLanguage(lang) {
  const normalized =
    normalizeLanguage(lang)

  switch (normalized) {
    case 'en':
      return 'en'

    case 'cn':
      return 'zh-CN'

    default:
      return 'id'
  }
}

/* =========================================================
   ELEMENTS
========================================================= */

const grammarCards =
  document.getElementById('grammarCards')

const miniExam =
  document.getElementById('miniExam')

const examContent =
  document.getElementById('examContent')

const emptyState =
  document.getElementById('emptyState')

const searchInput =
  document.getElementById('searchInput')

const weekSelect =
  document.getElementById('weekSelect')

const daySelect =
  document.getElementById('daySelect')

const statusSelect =
  document.getElementById('statusSelect')

const resultCounter =
  document.getElementById('resultCounter')

const activeFilterLabel =
  document.getElementById(
    'activeFilterLabel'
  )

const resetFiltersBtn =
  document.getElementById(
    'resetFiltersBtn'
  )

const emptyResetBtn =
  document.getElementById(
    'emptyResetBtn'
  )

const weekTitle =
  document.getElementById('weekTitle')

const dayTitle =
  document.getElementById('dayTitle')

const progressPercent =
  document.getElementById(
    'progressPercent'
  )

const progressBarFill =
  document.getElementById(
    'progressBarFill'
  )

const memoToggle =
  document.getElementById('memoToggle')

const themeToggle =
  document.getElementById('themeToggle')

const langToggleBtn =
  document.getElementById(
    'langToggleBtn'
  )

const languageMenu =
  document.getElementById(
    'languageMenu'
  )

const liveClock =
  document.getElementById('liveClock')

const greetingLabel =
  document.getElementById(
    'greetingLabel'
  )

const greetingJapanese =
  document.getElementById(
    'greetingJapanese'
  )

const greetingMessage =
  document.getElementById(
    'greetingMessage'
  )

const greetingIcon =
  document.getElementById('greetingIcon')

const timePeriodText =
  document.getElementById(
    'timePeriodText'
  )

const examAnswered =
  document.getElementById(
    'examAnswered'
  )

const examProgressFill =
  document.getElementById(
    'examProgressFill'
  )

/* =========================================================
   SAFE ELEMENT HELPER
========================================================= */

function elementExists(element) {
  return (
    element &&
    typeof element === 'object'
  )
}

/* =========================================================
   TTS STATE
========================================================= */

let availableVoices = []
let speakingCardId = null
let speechQueue = []
let speechIndex = 0
let speechPaused = false
let currentSpeakingItem = null

/* =========================================================
   FURIGANA STATE
========================================================= */

/*
   Kuroshiro digunakan untuk membuat furigana
   otomatis dari kalimat Jepang.

   Library akan dimuat langsung dari CDN.
*/

let kuroshiroInstance = null
let furiganaReady = false
let furiganaLoadingPromise = null

const FURIGANA_CONFIG = {
  kuroshiro:
    'https://unpkg.com/kuroshiro@1.2.0/dist/kuroshiro.min.js',

  analyzer:
    'https://unpkg.com/kuroshiro-analyzer-kuromoji@1.1.0/dist/kuroshiro-analyzer-kuromoji.min.js',

  dictPath:
    'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/'
}

/* =========================================================
   LOAD SCRIPT HELPER
========================================================= */

function loadExternalScript(src) {
  return new Promise(
    (resolve, reject) => {
      const existing =
        document.querySelector(
          `script[src="${src}"]`
        )

      if (existing) {
        if (
          existing.dataset.loaded ===
          'true'
        ) {
          resolve()
          return
        }

        existing.addEventListener(
          'load',
          () => resolve(),
          { once: true }
        )

        existing.addEventListener(
          'error',
          () =>
            reject(
              new Error(
                `Script failed: ${src}`
              )
            ),
          { once: true }
        )

        return
      }

      const script =
        document.createElement('script')

      script.src = src
      script.async = true

      script.addEventListener(
        'load',
        () => {
          script.dataset.loaded =
            'true'

          resolve()
        },
        { once: true }
      )

      script.addEventListener(
        'error',
        () => {
          reject(
            new Error(
              `Script failed: ${src}`
            )
          )
        },
        { once: true }
      )

      document.head.appendChild(
        script
      )
    }
  )
}

/* =========================================================
   INITIALIZE FURIGANA
========================================================= */

async function initializeFurigana() {
  if (furiganaReady) {
    return true
  }

  if (furiganaLoadingPromise) {
    return furiganaLoadingPromise
  }

  furiganaLoadingPromise =
    (async () => {
      try {
        await loadExternalScript(
          FURIGANA_CONFIG.kuroshiro
        )

        await loadExternalScript(
          FURIGANA_CONFIG.analyzer
        )

        const KuroshiroClass =
          window.Kuroshiro?.default ||
          window.Kuroshiro

        const AnalyzerClass =
          window.KuromojiAnalyzer?.default ||
          window.KuromojiAnalyzer

        if (!KuroshiroClass) {
          throw new Error(
            'Kuroshiro tidak ditemukan.'
          )
        }

        if (!AnalyzerClass) {
          throw new Error(
            'KuromojiAnalyzer tidak ditemukan.'
          )
        }

        kuroshiroInstance =
          new KuroshiroClass()

        const analyzer =
          new AnalyzerClass({
            dictPath:
              FURIGANA_CONFIG.dictPath
          })

        await kuroshiroInstance.init(
          analyzer
        )

        furiganaReady = true

        return true
      } catch (error) {
        console.warn(
          'Furigana initialization failed:',
          error
        )

        furiganaReady = false

        return false
      }
    })()

  return furiganaLoadingPromise
}

/* =========================================================
   CONVERT JAPANESE TO FURIGANA
========================================================= */

async function convertToFurigana(
  text
) {
  const clean = stripHTML(text)

  if (!clean) {
    return ''
  }

  /*
     Kalau tidak ada Kanji,
     tidak perlu proses Kuroshiro.
     Hiragana / Katakana / Latin langsung
     dikembalikan sebagai teks biasa.
  */
  if (
    !/[\u3400-\u4DBF\u4E00-\u9FFF]/.test(
      clean
    )
  ) {
    return escapeHTML(clean)
  }

  const ready =
    await initializeFurigana()

  if (
    !ready ||
    !kuroshiroInstance
  ) {
    return escapeHTML(clean)
  }

  try {
    const result =
      await kuroshiroInstance.convert(
        clean,
        {
          mode: 'furigana',
          to: 'hiragana'
        }
      )

    return result || escapeHTML(clean)
  } catch (error) {
    console.warn(
      'Furigana conversion failed:',
      error
    )

    return escapeHTML(clean)
  }
}

/* =========================================================
   APPLY FURIGANA TO EXAMPLES
========================================================= */

async function applyFuriganaToExamples() {
  if (!grammarCards) {
    return
  }

  const boxes =
    grammarCards.querySelectorAll(
      '.example-box[data-example-id]'
    )

  if (!boxes.length) {
    return
  }

  /*
     Pastikan analyzer sudah siap.
  */
  await initializeFurigana()

  await Promise.allSettled(
    Array.from(boxes).map(
      async box => {
        const state =
          box?._translationState

        if (!state) {
          return
        }

        /*
           Jangan proses ulang.
        */
        if (state.furiganaReady) {
          return
        }

        const originalText =
          state.originalText

        if (!originalText) {
          return
        }

        /*
           Hanya beri furigana pada
           kalimat Jepang.
        */
        if (
          detectLanguage(
            originalText
          ) !== 'ja'
        ) {
          state.furiganaHTML =
            escapeHTML(
              originalText
            )

          state.furiganaReady =
            true

          return
        }

        const html =
          await convertToFurigana(
            originalText
          )

        /*
           Pastikan element masih ada.
        */
        if (
          !document.body.contains(box)
        ) {
          return
        }

        const latestState =
          box?._translationState

        if (!latestState) {
          return
        }

        latestState.furiganaHTML =
          html || escapeHTML(
            originalText
          )

        latestState.furiganaReady =
          true

        /*
           Jangan mengganti tampilan
           kalau user sedang melihat
           hasil translation.
        */
        if (
          latestState.translated
        ) {
          return
        }

        box.innerHTML = `
          <i class="bi bi-caret-right-fill"></i>

          <span class="example-content">
            ${
              latestState.furiganaHTML
            }
          </span>
        `
      }
    )
  )
}

/* =========================================================
   TRANSLATION STATE
========================================================= */

const translationCacheKey =
  'n1_translation_cache'

const explanationCacheKey =
  'n1_explanation_translation_cache'

const exampleTranslationTimers =
  new Map()

const translationPending =
  new Map()

let translationMemoryCache = null
let explanationMemoryCache = null

/* =========================================================
   TRANSLATION API CONFIG
========================================================= */

const TRANSLATION_CONFIG = {
  timeout: 12000,
  retries: 2,

  myMemory:
    'https://api.mymemory.translated.net/get',

  google:
    'https://translate.googleapis.com/translate_a/single'
}

/* =========================================================
   EXPLANATION CACHE
========================================================= */

function getExplanationCache() {
  if (explanationMemoryCache) {
    return explanationMemoryCache
  }

  try {
    explanationMemoryCache =
      JSON.parse(
        localStorage.getItem(
          explanationCacheKey
        ) || '{}'
      )
  } catch (error) {
    console.warn(
      'Explanation cache read failed:',
      error
    )

    explanationMemoryCache = {}
  }

  return explanationMemoryCache
}

function saveExplanationCache(
  cache
) {
  explanationMemoryCache = cache

  try {
    localStorage.setItem(
      explanationCacheKey,
      JSON.stringify(cache)
    )
  } catch (error) {
    console.warn(
      'Explanation cache save skipped:',
      error
    )
  }
}

/* =========================================================
   TRANSLATION CACHE
========================================================= */

function getTranslationCache() {
  if (translationMemoryCache) {
    return translationMemoryCache
  }

  try {
    translationMemoryCache =
      JSON.parse(
        localStorage.getItem(
          translationCacheKey
        ) || '{}'
      )
  } catch (error) {
    console.warn(
      'Translation cache read failed:',
      error
    )

    translationMemoryCache = {}
  }

  return translationMemoryCache
}

function saveTranslationCache(
  cache
) {
  translationMemoryCache = cache

  try {
    localStorage.setItem(
      translationCacheKey,
      JSON.stringify(cache)
    )
  } catch (error) {
    console.warn(
      'Translation cache save skipped:',
      error
    )
  }
}

/* =========================================================
   VOICES
========================================================= */

function loadVoices() {
  if (
    !('speechSynthesis' in window)
  ) {
    return
  }

  availableVoices =
    window.speechSynthesis.getVoices() ||
    []
}

loadVoices()

if (
  'speechSynthesis' in window
) {
  window.speechSynthesis.addEventListener(
    'voiceschanged',
    loadVoices
  )
}

/* =========================================================
   JAPANESE VOICE
========================================================= */

function findJapaneseVoice() {
  loadVoices()

  if (!availableVoices.length) {
    return null
  }

  const priority = [
    voice =>
      /microsoft/i.test(
        voice.name
      ) &&
      /online|natural/i.test(
        voice.name
      ) &&
      /^ja/i.test(voice.lang),

    voice =>
      /microsoft/i.test(
        voice.name
      ) &&
      /^ja/i.test(voice.lang),

    voice =>
      /^ja-JP/i.test(voice.lang),

    voice =>
      /^ja/i.test(voice.lang)
  ]

  for (const test of priority) {
    const found =
      availableVoices.find(test)

    if (found) {
      return found
    }
  }

  return null
}

/* =========================================================
   CLEAN HTML
========================================================= */

function stripHTML(html) {
  const temp =
    document.createElement('div')

  temp.innerHTML = html || ''

  return (
    temp.textContent ||
    temp.innerText ||
    ''
  )
    .replace(/\s+/g, ' ')
    .trim()
}

/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    )
}

/* =========================================================
   ESCAPE JS
========================================================= */

function escapeForJS(value) {
  return String(value ?? '')
    .replace(
      /\\/g,
      '\\\\'
    )
    .replace(
      /'/g,
      "\\'"
    )
    .replace(
      /"/g,
      '\\"'
    )
    .replace(
      /\r/g,
      '\\r'
    )
    .replace(
      /\n/g,
      '\\n'
    )
}

/* =========================================================
   STATUS
========================================================= */

function getStatus(item) {
  return (
    localStorage.getItem(
      `status_${item.id}`
    ) || '0'
  )
}

/* =========================================================
   GET ALL GRAMMAR
========================================================= */

function getAllGrammar() {
  const output = []

  Object.entries(courseData).forEach(
    ([weekKey, weekData]) => {
      Object.entries(
        weekData.days
      ).forEach(
        ([dayKey, dayData]) => {
          if (
            !Array.isArray(
              dayData.grammar
            )
          ) {
            return
          }

          dayData.grammar.forEach(
            item => {
              output.push({
                ...item,
                _week: weekKey,
                _day: dayKey
              })
            }
          )
        }
      )
    }
  )

  return output
}

/* =========================================================
   WEEK SELECT
========================================================= */

function populateWeekSelect() {
  if (!elementExists(weekSelect)) {
    return
  }

  weekSelect.innerHTML = ''

  for (
    let week = 1;
    week <= 8;
    week++
  ) {
    const option =
      document.createElement(
        'option'
      )

    option.value =
      `week${week}`

    option.textContent =
      `Minggu ${week}`

    weekSelect.appendChild(
      option
    )
  }

  weekSelect.value =
    activeWeek
}

/* =========================================================
   DAY SELECT
========================================================= */

function populateDaySelect() {
  if (!elementExists(daySelect)) {
    return
  }

  daySelect.innerHTML = ''

  for (
    let day = 1;
    day <= 7;
    day++
  ) {
    const option =
      document.createElement(
        'option'
      )

    option.value =
      `day${day}`

    option.textContent =
      day === 7
        ? 'Hari 7 — Full Exam'
        : `Hari ${day}`

    daySelect.appendChild(
      option
    )
  }

  daySelect.value =
    activeDay
}

/* =========================================================
   FILTERED ITEMS
========================================================= */

function getFilteredItems() {
  let items

  if (currentSearch) {
    items =
      getAllGrammar().filter(
        item =>
          matchesSearch(
            item,
            currentSearch
          )
      )
  } else {
    const day =
      courseData[
        activeWeek
      ]?.days?.[activeDay]

    items = Array.isArray(
      day?.grammar
    )
      ? day.grammar.map(item => ({
          ...item,
          _week: activeWeek,
          _day: activeDay
        }))
      : []
  }

  if (
    currentStatus !==
    'all'
  ) {
    items =
      items.filter(
        item =>
          getStatus(item) ===
          currentStatus
      )
  }

  return items
}

/* =========================================================
   SEARCH
========================================================= */

function matchesSearch(
  item,
  query
) {
  if (!query) {
    return true
  }

  const text = [
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
    ...(Array.isArray(
      item.examples
    )
      ? item.examples
      : [])
  ]
    .map(value =>
      stripHTML(value || '')
    )
    .join(' ')
    .toLowerCase()

  return text.includes(
    String(query).toLowerCase()
  )
}

/* =========================================================
   LANGUAGE DETECTOR
========================================================= */

function detectLanguage(text) {
  const clean =
    stripHTML(text)

  if (!clean) {
    return 'id'
  }

  if (
    /[\u3040-\u309f\u30a0-\u30ff]/.test(
      clean
    )
  ) {
    return 'ja'
  }

  if (
    /[\u4e00-\u9fff]/.test(
      clean
    )
  ) {
    return 'zh-CN'
  }

  const idWords = [
    'yang',
    'dan',
    'atau',
    'dengan',
    'untuk',
    'dari',
    'ini',
    'itu',
    'akan',
    'adalah',
    'tidak',
    'sudah',
    'belum',
    'karena',
    'agar',
    'ketika',
    'jika',
    'bisa',
    'harus',
    'sangat',
    'dalam',
    'pada',
    'sebuah',
    'tersebut',
    'dapat',
    'menjadi',
    'lebih',
    'hanya'
  ]

  const lower =
    clean.toLowerCase()

  let score = 0

  for (
    const word of idWords
  ) {
    const pattern =
      new RegExp(
        `\\b${word}\\b`,
        'i'
      )

    if (
      pattern.test(lower)
    ) {
      score++
    }
  }

  if (
    /[a-z]/i.test(clean) &&
    /(yang|dan|untuk|dengan|tidak|ini|itu|akan)\b/i.test(
      lower
    )
  ) {
    score += 2
  }

  return score > 0
    ? 'id'
    : 'en'
}

/* =========================================================
   NORMALIZE API LANGUAGE
========================================================= */

function normalizeApiLanguage(
  lang
) {
  const value = String(
    lang || ''
  )
    .trim()
    .toLowerCase()

  if (
    value === 'zh' ||
    value === 'zh-cn' ||
    value === 'cn'
  ) {
    return 'zh-CN'
  }

  if (
    value === 'jp'
  ) {
    return 'ja'
  }

  return value
}

/* =========================================================
   GET TARGET LANGUAGE
========================================================= */

function getTargetLanguage(
  sourceLanguage
) {
  const source =
    normalizeApiLanguage(
      sourceLanguage
    )

  const selected =
    getApiLanguage(
      currentLanguage
    )

  if (
    source === selected
  ) {
    if (
      source === 'ja'
    ) {
      return 'id'
    }

    if (
      source === 'id'
    ) {
      return 'en'
    }

    if (
      source === 'en'
    ) {
      return 'id'
    }

    if (
      source === 'zh-CN'
    ) {
      return 'id'
    }
  }

  return selected
}

/* =========================================================
   FETCH WITH TIMEOUT
========================================================= */

async function fetchWithTimeout(
  url,
  options = {},
  timeout =
    TRANSLATION_CONFIG.timeout
) {
  const controller =
    new AbortController()

  const timeoutId =
    setTimeout(
      () =>
        controller.abort(),
      timeout
    )

  try {
    return await fetch(
      url,
      {
        ...options,
        signal:
          controller.signal,
        headers: {
          Accept:
            'application/json',
          ...(options.headers ||
            {})
        }
      }
    )
  } finally {
    clearTimeout(
      timeoutId
    )
  }
}

/* =========================================================
   MYMEMORY TRANSLATION
========================================================= */

async function translateWithMyMemory(
  text,
  from,
  to
) {
  const source =
    normalizeApiLanguage(
      from
    )

  const target =
    normalizeApiLanguage(
      to
    )

  const url =
    new URL(
      TRANSLATION_CONFIG
        .myMemory
    )

  url.searchParams.set(
    'q',
    text
  )

  url.searchParams.set(
    'langpair',
    `${source}|${target}`
  )

  const response =
    await fetchWithTimeout(
      url.toString(),
      {
        method: 'GET'
      }
    )

  if (!response.ok) {
    throw new Error(
      `MyMemory HTTP ${response.status}`
    )
  }

  const data =
    await response.json()

  if (
    data &&
    data.responseStatus &&
    Number(
      data.responseStatus
    ) !== 200
  ) {
    throw new Error(
      `MyMemory API status ${data.responseStatus}`
    )
  }

  if (
    data?.quotaFinished ===
    true
  ) {
    throw new Error(
      'MyMemory quota finished'
    )
  }

  const translated =
    data?.responseData
      ?.translatedText ||
    data?.matches?.[0]
      ?.translation ||
    ''

  const result =
    String(
      translated || ''
    ).trim()

  if (!result) {
    throw new Error(
      'MyMemory returned empty translation'
    )
  }

  return result
}

/* =========================================================
   GOOGLE FALLBACK TRANSLATION
========================================================= */

async function translateWithGoogleFallback(
  text,
  from,
  to
) {
  const source =
    normalizeApiLanguage(
      from
    )

  const target =
    normalizeApiLanguage(
      to
    )

  const url =
    new URL(
      TRANSLATION_CONFIG
        .google
    )

  url.searchParams.set(
    'client',
    'gtx'
  )

  url.searchParams.set(
    'sl',
    source
  )

  url.searchParams.set(
    'tl',
    target
  )

  url.searchParams.set(
    'dt',
    't'
  )

  url.searchParams.set(
    'q',
    text
  )

  const response =
    await fetchWithTimeout(
      url.toString(),
      {
        method: 'GET'
      }
    )

  if (!response.ok) {
    throw new Error(
      `Fallback translator HTTP ${response.status}`
    )
  }

  const data =
    await response.json()

  const translated =
    Array.isArray(data) &&
    Array.isArray(data[0])
      ? data[0]
          .map(part =>
            Array.isArray(part)
              ? part[0]
              : ''
          )
          .filter(Boolean)
          .join('')
      : ''

  const result =
    String(
      translated || ''
    ).trim()

  if (!result) {
    throw new Error(
      'Fallback translator returned empty result'
    )
  }

  return result
}

/* =========================================================
   TRANSLATE TEXT
========================================================= */

async function translateText(
  text,
  from = 'ja',
  to = 'id'
) {
  const clean =
    stripHTML(text)

  if (!clean) {
    return ''
  }

  const source =
    normalizeApiLanguage(
      from
    )

  const target =
    normalizeApiLanguage(
      to
    )

  if (
    source === target
  ) {
    return clean
  }

  const cache =
    getTranslationCache()

  const cacheKey =
    `${source}__${target}__${clean}`

  if (
    cache[cacheKey] &&
    typeof cache[
      cacheKey
    ] === 'string'
  ) {
    return cache[
      cacheKey
    ]
  }

  if (
    translationPending.has(
      cacheKey
    )
  ) {
    return translationPending.get(
      cacheKey
    )
  }

  const requestPromise =
    (async () => {
      let lastError =
        null

      for (
        let attempt = 0;
        attempt <
        TRANSLATION_CONFIG.retries;
        attempt++
      ) {
        try {
          const result =
            await translateWithMyMemory(
              clean,
              source,
              target
            )

          if (result) {
            cache[
              cacheKey
            ] = result

            saveTranslationCache(
              cache
            )

            return result
          }
        } catch (error) {
          lastError = error

          if (
            attempt <
            TRANSLATION_CONFIG
              .retries - 1
          ) {
            await new Promise(
              resolve =>
                setTimeout(
                  resolve,
                  500 *
                    (attempt +
                      1)
                )
            )
          }
        }
      }

      try {
        const fallbackResult =
          await translateWithGoogleFallback(
            clean,
            source,
            target
          )

        if (
          fallbackResult
        ) {
          cache[
            cacheKey
          ] = fallbackResult

          saveTranslationCache(
            cache
          )

          return fallbackResult
        }
      } catch (
        fallbackError
      ) {
        lastError =
          fallbackError
      }

      console.warn(
        'Translation unavailable:',
        {
          source,
          target,
          error:
            lastError?.message ||
            'Unknown translation error'
        }
      )

      return ''
    })()

  translationPending.set(
    cacheKey,
    requestPromise
  )

  try {
    return await requestPromise
  } finally {
    translationPending.delete(
      cacheKey
    )
  }
}

/* =========================================================
   EXPLANATION AUTO TRANSLATION
========================================================= */

async function getExplanationForLanguage(
  item
) {
  const source =
    stripHTML(
      item.explanation || ''
    )

  if (!source) {
    return ''
  }

  const lang =
    normalizeLanguage(
      currentLanguage
    )

  if (lang === 'id') {
    return source
  }

  const target =
    getApiLanguage(lang)

  const cache =
    getExplanationCache()

  const cacheKey =
    `${lang}::${source}`

  if (
    cache[cacheKey] &&
    typeof cache[
      cacheKey
    ] === 'string'
  ) {
    return cache[
      cacheKey
    ]
  }

  const translated =
    await translateText(
      source,
      'id',
      target
    )

  if (translated) {
    cache[
      cacheKey
    ] = translated

    saveExplanationCache(
      cache
    )

    return translated
  }

  return source
}

/* =========================================================
   TTS QUEUE
========================================================= */

async function buildSpeechQueue(
  item
) {
  const queue = []

  if (item.rule) {
    queue.push({
      text:
        `文法 ${stripHTML(
          item.rule
        )}`,
      type: 'jp'
    })
  }

  if (item.reading) {
    queue.push({
      text:
        stripHTML(
          item.reading
        ),
      type: 'jp'
    })
  }

  let explanationJP =
    ''

  if (
    item.explanationJP
  ) {
    explanationJP =
      stripHTML(
        item.explanationJP
      )
  } else if (
    item.explanation
  ) {
    explanationJP =
      await translateText(
        item.explanation,
        'id',
        'ja'
      )
  }

  if (explanationJP) {
    queue.push({
      text:
        `簡単な説明。${explanationJP}`,
      type: 'jp'
    })
  }

  if (
    Array.isArray(
      item.examples
    )
  ) {
    item.examples.forEach(
      (
        example,
        index
      ) => {
        const clean =
          stripHTML(
            example
          )

        if (!clean) {
          return
        }

        queue.push({
          text:
            `例文 ${index + 1}。${clean}`,
          type: 'jp'
        })
      }
    )
  }

  return queue
}

/* =========================================================
   START TTS
========================================================= */

async function startSpeech(
  item
) {
  if (
    !('speechSynthesis' in
      window)
  ) {
    alert(
      'Browser ini tidak mendukung Text to Speech.'
    )

    return
  }

  stopSpeech()

  currentSpeakingItem =
    item

  speakingCardId =
    String(item.id)

  updateSpeechButtons()

  speechQueue =
    await buildSpeechQueue(
      item
    )

  if (
    speakingCardId !==
    String(item.id)
  ) {
    return
  }

  speechIndex = 0
  speechPaused = false

  speakCurrentChunk()
}

/* =========================================================
   SPEAK CURRENT
========================================================= */

function speakCurrentChunk() {
  if (
    !speechQueue.length ||
    speechIndex >=
      speechQueue.length
  ) {
    stopSpeech()

    return
  }

  if (
    !('speechSynthesis' in
      window)
  ) {
    stopSpeech()

    return
  }

  const chunk =
    speechQueue[
      speechIndex
    ]

  const utterance =
    new SpeechSynthesisUtterance(
      chunk.text
    )

  utterance.lang =
    'ja-JP'

  utterance.rate =
    0.88

  utterance.pitch =
    1

  utterance.volume =
    1

  const voice =
    findJapaneseVoice()

  if (voice) {
    utterance.voice =
      voice
  }

  utterance.onstart = () => {
    updateSpeechButtons()
  }

  utterance.onend = () => {
    if (
      speakingCardId ===
      null
    ) {
      return
    }

    speechIndex++

    speakCurrentChunk()
  }

  utterance.onerror =
    event => {
      console.warn(
        'TTS error:',
        event?.error ||
          'unknown'
      )

      stopSpeech()
    }

  window.speechSynthesis.speak(
    utterance
  )
}

/* =========================================================
   PAUSE
========================================================= */

window.togglePauseSpeech =
  function () {
    if (
      !(
        'speechSynthesis' in
        window
      )
    ) {
      return
    }

    if (
      speakingCardId ===
      null
    ) {
      return
    }

    if (
      window.speechSynthesis
        .paused
    ) {
      window.speechSynthesis.resume()

      speechPaused = false
    } else {
      window.speechSynthesis.pause()

      speechPaused = true
    }

    updateSpeechButtons()
  }

/* =========================================================
   REPLAY
========================================================= */

window.replaySpeech =
  function () {
    if (
      !currentSpeakingItem
    ) {
      return
    }

    startSpeech(
      currentSpeakingItem
    )
  }

/* =========================================================
   STOP
========================================================= */

window.stopSpeech =
  function () {
    if (
      'speechSynthesis' in
      window
    ) {
      try {
        window.speechSynthesis.cancel()
      } catch (error) {
        console.warn(
          'Speech cancel failed:',
          error
        )
      }
    }

    speakingCardId =
      null

    speechQueue =
      []

    speechIndex = 0

    speechPaused =
      false

    currentSpeakingItem =
      null

    updateSpeechButtons()
  }

/* =========================================================
   SPEECH UI
========================================================= */

function updateSpeechButtons() {
  document
    .querySelectorAll(
      '.grammar-card'
    )
    .forEach(card => {
      const id =
        card.dataset.id

      const status =
        card.querySelector(
          '.tts-status'
        )

      const play =
        card.querySelector(
          '.tts-play'
        )

      const pause =
        card.querySelector(
          '.tts-pause'
        )

      if (!status) {
        return
      }

      const active =
        id ===
        speakingCardId

      card.classList.toggle(
        'speaking',
        active
      )

      if (active) {
        status.textContent =
          speechPaused
            ? 'Dijeda'
            : 'Sedang membaca bahasa Jepang...'

        if (play) {
          play.innerHTML = `
            <i class="bi bi-stop-fill"></i>
          `
        }

        if (pause) {
          pause.innerHTML =
            speechPaused
              ? `
                <i class="bi bi-play-fill"></i>
              `
              : `
                <i class="bi bi-pause-fill"></i>
              `
        }
      } else {
        status.textContent =
          '読み上げ機能'

        if (play) {
          play.innerHTML = `
            <i class="bi bi-play-fill"></i>
          `
        }

        if (pause) {
          pause.innerHTML = `
            <i class="bi bi-pause-fill"></i>
          `
        }
      }
    })
}

/* =========================================================
   MAIN SPEECH
========================================================= */

window.handleMainSpeech =
  function (id) {
    const item =
      findItemById(id)

    if (!item) {
      return
    }

    if (
      speakingCardId ===
      String(id)
    ) {
      stopSpeech()

      return
    }

    startSpeech(item)
  }

/* =========================================================
   FIND ITEM
========================================================= */

function findItemById(id) {
  return getAllGrammar().find(
    item =>
      String(item.id) ===
      String(id)
  )
}

/* =========================================================
   EXAMPLE STATE
========================================================= */

function createExampleState(
  item,
  example,
  index
) {
  return {
    exampleId:
      `${item.id}_${index}`,

    originalHTML:
      String(example ?? ''),

    originalText:
      stripHTML(example),

    furiganaHTML:
      '',

    furiganaReady:
      false,

    translated: false,

    translation: '',

    sourceLanguage:
      null,

    targetLanguage:
      null,

    key: null,

    busy: false
  }
}

/* =========================================================
   GET EXAMPLE ORIGINAL DISPLAY
========================================================= */

function getExampleOriginalHTML(
  state
) {
  if (
    state?.furiganaHTML
  ) {
    return state.furiganaHTML
  }

  return (
    state?.originalHTML ||
    escapeHTML(
      state?.originalText ||
        ''
    )
  )
}

/* =========================================================
   RESET EXAMPLE
========================================================= */

function resetExampleDisplay(
  exampleBox,
  state
) {
  if (
    !exampleBox ||
    !state
  ) {
    return
  }

  const timer =
    exampleTranslationTimers.get(
      state.key
    )

  if (timer) {
    clearTimeout(timer)
  }

  if (state.key) {
    exampleTranslationTimers.delete(
      state.key
    )
  }

  exampleBox.classList.remove(
    'translating',
    'translated',
    'copied'
  )

  exampleBox.innerHTML = `
    <i class="bi bi-caret-right-fill"></i>

    <span class="example-content">
      ${getExampleOriginalHTML(
        state
      )}
    </span>
  `

  state.translated =
    false

  state.translation =
    ''

  state.sourceLanguage =
    null

  state.targetLanguage =
    null

  state.key =
    null

  state.busy =
    false
}

/* =========================================================
   SHOW EXAMPLE TRANSLATION
========================================================= */

async function showExampleTranslation(
  exampleBox
) {
  const state =
    exampleBox?._translationState

  if (!state) {
    return
  }

  if (
    state.translated
  ) {
    resetExampleDisplay(
      exampleBox,
      state
    )

    return
  }

  if (
    state.busy
  ) {
    return
  }

  const originalText =
    state.originalText

  if (!originalText) {
    return
  }

  const sourceLanguage =
    detectLanguage(
      originalText
    )

  const targetLanguage =
    getTargetLanguage(
      sourceLanguage
    )

  state.sourceLanguage =
    sourceLanguage

  state.targetLanguage =
    targetLanguage

  const requestKey = [
    state.exampleId,
    sourceLanguage,
    targetLanguage,
    originalText
  ].join('::')

  state.key =
    requestKey

  state.busy =
    true

  exampleBox.classList.add(
    'translating'
  )

  exampleBox.classList.remove(
    'translated',
    'copied'
  )

  exampleBox.innerHTML = `
    <i class="bi bi-translate"></i>

    <span>
      ${escapeHTML(
        getLanguageText(
          'translating'
        )
      )}
    </span>
  `

  try {
    const translated =
      await translateText(
        originalText,
        sourceLanguage,
        targetLanguage
      )

    if (
      !document.body.contains(
        exampleBox
      )
    ) {
      return
    }

    const latestState =
      exampleBox?._translationState

    if (!latestState) {
      return
    }

    if (
      latestState.key !==
      requestKey
    ) {
      return
    }

    if (
      !translated
    ) {
      exampleBox.classList.remove(
        'translating'
      )

      exampleBox.innerHTML = `
        <i class="bi bi-info-circle"></i>

        <span>
          ${escapeHTML(
            getLanguageText(
              'translationFailed'
            )
          )}
        </span>
      `

      const errorTimer =
        setTimeout(() => {
          if (
            document.body.contains(
              exampleBox
            )
          ) {
            resetExampleDisplay(
              exampleBox,
              latestState
            )
          }
        }, 1800)

      exampleTranslationTimers.set(
        requestKey,
        errorTimer
      )

      return
    }

    latestState.translation =
      translated

    latestState.translated =
      true

    latestState.busy =
      false

    exampleBox.classList.remove(
      'translating'
    )

    exampleBox.classList.add(
      'translated'
    )

    exampleBox.innerHTML = `
      <i class="bi bi-translate"></i>

      <span>
        ${escapeHTML(
          translated
        )}
      </span>
    `

    const timer =
      setTimeout(() => {
        if (
          !document.body.contains(
            exampleBox
          )
        ) {
          return
        }

        const currentState =
          exampleBox?._translationState

        if (
          currentState?.translated
        ) {
          resetExampleDisplay(
            exampleBox,
            currentState
          )
        }
      }, 5000)

    exampleTranslationTimers.set(
      requestKey,
      timer
    )
  } catch (error) {
    console.warn(
      'Example translation failed:',
      error
    )

    if (
      document.body.contains(
        exampleBox
      )
    ) {
      resetExampleDisplay(
        exampleBox,
        state
      )
    }
  } finally {
    state.busy =
      false
  }
}

/* =========================================================
   COPY EXAMPLE
========================================================= */

async function copyExampleText(
  exampleBox
) {
  const state =
    exampleBox?._translationState

  if (!state) {
    return
  }

  const text =
    state.translated &&
    state.translation
      ? state.translation
      : state.originalText

  if (!text) {
    return
  }

  const message =
    state.translated
      ? getLanguageText(
          'copiedTranslation'
        )
      : getLanguageText(
          'copiedOriginal'
        )

  try {
    if (
      navigator.clipboard &&
      typeof navigator
        .clipboard
        .writeText ===
        'function'
    ) {
      await navigator.clipboard.writeText(
        text
      )
    } else {
      throw new Error(
        'Clipboard API unavailable'
      )
    }

    showCopyFeedback(
      exampleBox,
      message
    )
  } catch (error) {
    console.warn(
      'Clipboard API failed:',
      error
    )

    const textarea =
      document.createElement(
        'textarea'
      )

    textarea.value =
      text

    textarea.style.position =
      'fixed'

    textarea.style.left =
      '-9999px'

    textarea.style.top =
      '0'

    textarea.style.opacity =
      '0'

    document.body.appendChild(
      textarea
    )

    textarea.focus()
    textarea.select()

    let copied = false

    try {
      copied =
        document.execCommand(
          'copy'
        )
    } catch (
      fallbackError
    ) {
      console.warn(
        'Fallback copy failed:',
        fallbackError
      )
    }

    textarea.remove()

    if (copied) {
      showCopyFeedback(
        exampleBox,
        message
      )
    }
  }
}

/* =========================================================
   COPY FEEDBACK
========================================================= */

function showCopyFeedback(
  exampleBox,
  message
) {
  if (
    !document.body.contains(
      exampleBox
    )
  ) {
    return
  }

  const previousHTML =
    exampleBox.innerHTML

  exampleBox.classList.add(
    'copied'
  )

  exampleBox.innerHTML = `
    <i class="bi bi-check-circle-fill"></i>

    <span>
      ${escapeHTML(
        message
      )}
    </span>
  `

  setTimeout(() => {
    if (
      !document.body.contains(
        exampleBox
      )
    ) {
      return
    }

    const state =
      exampleBox?._translationState

    if (
      state?.translated
    ) {
      exampleBox.innerHTML = `
        <i class="bi bi-translate"></i>

        <span>
          ${escapeHTML(
            state.translation
          )}
        </span>
      `
    } else {
      exampleBox.innerHTML =
        previousHTML
    }

    exampleBox.classList.remove(
      'copied'
    )
  }, 900)
}

/* =========================================================
   SINGLE CLICK
========================================================= */

let exampleClickTimer =
  null

document.addEventListener(
  'click',
  event => {
    const exampleBox =
      event.target.closest(
        '.example-box'
      )

    if (!exampleBox) {
      return
    }

    const state =
      exampleBox?._translationState

    if (!state) {
      return
    }

    if (
      exampleClickTimer
    ) {
      clearTimeout(
        exampleClickTimer
      )
    }

    exampleClickTimer =
      setTimeout(() => {
        copyExampleText(
          exampleBox
        )

        exampleClickTimer =
          null
      }, 220)
  }
)

/* =========================================================
   DOUBLE CLICK
========================================================= */

document.addEventListener(
  'dblclick',
  event => {
    const exampleBox =
      event.target.closest(
        '.example-box'
      )

    if (!exampleBox) {
      return
    }

    if (
      !exampleBox?._translationState
    ) {
      return
    }

    event.preventDefault()

    if (
      exampleClickTimer
    ) {
      clearTimeout(
        exampleClickTimer
      )

      exampleClickTimer =
        null
    }

    showExampleTranslation(
      exampleBox
    )
  }
)

/* =========================================================
   KEYBOARD EXAMPLE SUPPORT
========================================================= */

document.addEventListener(
  'keydown',
  event => {
    const target =
      event.target.closest(
        '.example-box'
      )

    if (!target) {
      return
    }

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault()

      copyExampleText(target)
    }
  }
)

/* =========================================================
   CREATE CARD
========================================================= */

function createCardHTML(
  item,
  index
) {
  const savedStatus =
    getStatus(item)

  const examples =
    Array.isArray(
      item.examples
    )
      ? item.examples
      : []

  const lang =
    normalizeLanguage(
      currentLanguage
    )

  const meaning =
    lang === 'en'
      ? item.meaning?.en ||
        '-'
      : lang === 'cn'
      ? item.meaning?.cn ||
        item.meaning?.zh ||
        '-'
      : item.meaning?.id ||
        '-'

  const examplesHTML =
    examples
      .map(
        (
          example,
          exampleIndex
        ) => {
          const state =
            createExampleState(
              item,
              example,
              exampleIndex
            )

          return `
            <div
              class="example-box"
              role="button"
              tabindex="0"
              title="${escapeHTML(
                getLanguageText(
                  'translateTitle'
                )
              )}"
              data-example-id="${escapeHTML(
                state.exampleId
              )}"
            >
              <i class="bi bi-caret-right-fill"></i>

              <span class="example-content">
                ${example}
              </span>
            </div>
          `
        }
      )
      .join('')

  const reading =
    item.reading ||
    item.yomi ||
    item.furigana ||
    ''

  const moduleText =
    item.module ||
    item.lesson ||
    `M${String(
      item._week
    ).replace(
      'week',
      ''
    )} - H${String(
      item._day
    ).replace(
      'day',
      ''
    )}`

  return `
    <article
      class="grammar-card"
      data-id="${escapeHTML(
        item.id
      )}"
      style="animation-delay:${
        index * 0.045
      }s"
    >

      <div class="card-top">

        <span class="day-badge">
          <i class="bi bi-bookmark-star-fill"></i>
          ${escapeHTML(
            moduleText
          )}
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
          ${escapeHTML(
            reading
          )}
        </div>

        <div class="grammar-rule">
          ${
            item.rule ||
            '-'
          }
        </div>

        <div class="meaning-main">

          ${
            lang === 'id'
              ? `
                <span>
                  ${item.meaning?.id || ''}
                </span>
              `
              : ''
          }

          ${
            lang === 'en'
              ? `
                <span>
                  ${item.meaning?.en || ''}
                </span>
              `
              : ''
          }

          ${
            lang === 'cn'
              ? `
                <span>
                  ${
                    item.meaning?.cn ||
                    item.meaning?.zh ||
                    ''
                  }
                </span>
              `
              : ''
          }

        </div>

        <button
          class="speaker-main-btn"
          type="button"
          onclick="
            handleMainSpeech(
              '${escapeForJS(
                item.id
              )}'
            )
          "
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
            ${escapeHTML(
              getLanguageText(
                'meaning'
              )
            )}
          </div>

          <div class="info-text">

            ${
              lang === 'id'
                ? `
                  <span class="lang-id">
                    ${
                      item.meaning?.id ||
                      '-'
                    }
                  </span>
                `
                : ''
            }

            ${
              lang === 'en'
                ? `
                  <span class="lang-en">
                    ${
                      item.meaning?.en ||
                      '-'
                    }
                  </span>
                `
                : ''
            }

            ${
              lang === 'cn'
                ? `
                  <span class="lang-cn">
                    ${
                      item.meaning?.cn ||
                      item.meaning?.zh ||
                      '-'
                    }
                  </span>
                `
                : ''
            }

          </div>

        </div>

        <div class="info-block">

          <div
            class="translation-box"
            data-explanation-id="${escapeHTML(
              item.id
            )}"
          >

            <div class="translation-label">
              <i class="bi bi-globe2"></i>

              <span>
                ${escapeHTML(
                  getLanguageText(
                    'explanation'
                  )
                )}
              </span>
            </div>

            <span class="id-explanation">
              ${
                lang === 'id'
                  ? escapeHTML(
                      stripHTML(
                        item.explanation ||
                          ''
                      )
                    ) ||
                    '—'
                  : escapeHTML(
                      getLanguageText(
                        'translating'
                      )
                    )
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
                  : ''
              }

              ${
                lang === 'en'
                  ? 'Example Sentences'
                  : ''
              }

              ${
                lang === 'cn'
                  ? '例句'
                  : ''
              }

            </span>
          </div>

          ${
            examplesHTML ||
            `
              <div class="example-box">
                <i class="bi bi-dash-circle"></i>

                <span>
                  ${escapeHTML(
                    getLanguageText(
                      'noExample'
                    )
                  )}
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
          onclick="
            handleMainSpeech(
              '${escapeForJS(
                item.id
              )}'
            )
          "
          title="Play / Stop"
        >
          <i class="bi bi-play-fill"></i>
        </button>

        <button
          class="tts-btn tts-pause"
          type="button"
          onclick="togglePauseSpeech()"
          title="Pause / Resume"
        >
          <i class="bi bi-pause-fill"></i>
        </button>

        <button
          class="tts-btn"
          type="button"
          onclick="replaySpeech()"
          title="Ulangi"
        >
          <i class="bi bi-arrow-repeat"></i>
        </button>

        <button
          class="tts-btn stop"
          type="button"
          onclick="stopSpeech()"
          title="Stop"
        >
          <i class="bi bi-stop-fill"></i>
        </button>

      </div>

      <div class="card-footer">

        <button
          class="
            status-btn
            btn-0
            ${
              savedStatus === '0'
                ? 'active'
                : ''
            }
          "
          type="button"
          onclick="
            updateStatus(
              '${escapeForJS(
                item.id
              )}',
              '0',
              this
            )
          "
        >
          <i class="bi bi-x-circle"></i>

          <span>
            Belum
          </span>
        </button>

        <button
          class="
            status-btn
            btn-1
            ${
              savedStatus === '1'
                ? 'active'
                : ''
            }
          "
          type="button"
          onclick="
            updateStatus(
              '${escapeForJS(
                item.id
              )}',
              '1',
              this
            )
          "
        >
          <i class="bi bi-dash-circle"></i>

          <span>
            Agak
          </span>
        </button>

        <button
          class="
            status-btn
            btn-2
            ${
              savedStatus === '2'
                ? 'active'
                : ''
            }
          "
          type="button"
          onclick="
            updateStatus(
              '${escapeForJS(
                item.id
              )}',
              '2',
              this
            )
          "
        >
          <i class="bi bi-check-circle"></i>

          <span>
            Hafal
          </span>
        </button>

      </div>

    </article>
  `
}

/* =========================================================
   INITIALIZE EXAMPLE STATES
========================================================= */

function initializeExampleStates(
  items
) {
  items.forEach(item => {
    const examples =
      Array.isArray(
        item.examples
      )
        ? item.examples
        : []

    examples.forEach(
      (
        example,
        index
      ) => {
        const selector =
          `.grammar-card[data-id="${CSS.escape(
            String(item.id)
          )}"] .example-box[data-example-id="${CSS.escape(
            `${item.id}_${index}`
          )}"]`

        const exampleBox =
          document.querySelector(
            selector
          )

        if (!exampleBox) {
          return
        }

        exampleBox
          ._translationState =
          createExampleState(
            item,
            example,
            index
          )
      }
    )
  })
}

/* =========================================================
   LOAD EXPLANATIONS
========================================================= */

async function loadCardTranslations(
  items
) {
  const selectedLanguage =
    normalizeLanguage(
      currentLanguage
    )

  if (
    selectedLanguage ===
    'id'
  ) {
    items.forEach(item => {
      const box =
        document.querySelector(
          `.translation-box[data-explanation-id="${CSS.escape(
            String(item.id)
          )}"]`
        )

      if (!box) {
        return
      }

      const target =
        box.querySelector(
          '.id-explanation'
        )

      if (!target) {
        return
      }

      target.textContent =
        stripHTML(
          item.explanation ||
            ''
        ) || '—'
    })

    return
  }

  await Promise.allSettled(
    items.map(
      async item => {
        const box =
          document.querySelector(
            `.translation-box[data-explanation-id="${CSS.escape(
              String(item.id)
            )}"]`
          )

        if (!box) {
          return
        }

        const target =
          box.querySelector(
            '.id-explanation'
          )

        if (!target) {
          return
        }

        target.textContent =
          getLanguageText(
            'translating'
          )

        try {
          const translated =
            await getExplanationForLanguage(
              item
            )

          if (
            !document.body.contains(
              target
            )
          ) {
            return
          }

          target.textContent =
            translated ||
            '—'
        } catch (error) {
          console.warn(
            'Explanation translation failed:',
            error
          )

          if (
            document.body.contains(
              target
            )
          ) {
            target.textContent =
              stripHTML(
                item.explanation ||
                  ''
              ) || '—'
          }
        }
      }
    )
  )
}

/* =========================================================
   RENDER CARDS
========================================================= */

async function renderCards() {
  stopSpeech()

  if (
    activeDay ===
      'day7' &&
    !currentSearch
  ) {
    if (
      grammarCards
    ) {
      grammarCards.innerHTML =
        ''

      grammarCards.classList.add(
        'hidden'
      )
    }

    if (
      emptyState
    ) {
      emptyState.classList.add(
        'hidden'
      )
    }

    if (
      resultCounter
    ) {
      resultCounter.textContent =
        'Full Exam'
    }

    updateProgress([])

    return
  }

  if (
    grammarCards
  ) {
    grammarCards.classList.remove(
      'hidden'
    )
  }

  const items =
    getFilteredItems()

  if (
    grammarCards
  ) {
    grammarCards.innerHTML =
      ''
  }

  if (
    emptyState
  ) {
    emptyState.classList.toggle(
      'hidden',
      items.length !== 0
    )
  }

  if (
    resultCounter
  ) {
    resultCounter.textContent =
      `${items.length} materi`
  }

  if (!items.length) {
    updateProgress([])

    return
  }

  items.forEach(
    (
      item,
      index
    ) => {
      if (
        grammarCards
      ) {
        grammarCards.insertAdjacentHTML(
          'beforeend',
          createCardHTML(
            item,
            index
          )
        )
      }
    }
  )

  initializeExampleStates(
    items
  )

  updateProgress(
    items
  )

  /*
     Translation penjelasan
  */
  loadCardTranslations(
    items
  )

  /*
     Furigana otomatis.
     Tidak di-await agar render awal
     tetap cepat.
  */
  applyFuriganaToExamples()
}

/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(
  items
) {
  if (
    !elementExists(
      progressPercent
    )
  ) {
    return
  }

  if (!items.length) {
    progressPercent.textContent =
      '0%'

    if (
      progressBarFill
    ) {
      progressBarFill.style.width =
        '0%'
    }

    return
  }

  const mastered =
    items.filter(
      item =>
        getStatus(item) ===
        '2'
    ).length

  const percentage =
    Math.round(
      (mastered /
        items.length) *
        100
    )

  progressPercent.textContent =
    `${percentage}%`

  if (
    progressBarFill
  ) {
    progressBarFill.style.width =
      `${percentage}%`
  }
}

/* =========================================================
   HEADER
========================================================= */

function updateContentHeader() {
  if (
    !elementExists(
      weekTitle
    ) ||
    !elementExists(
      dayTitle
    )
  ) {
    return
  }

  if (
    currentSearch
  ) {
    weekTitle.textContent =
      'Hasil Pencarian'

    dayTitle.textContent =
      `Menemukan materi untuk "${currentSearch}"`

    return
  }

  const week =
    courseData[
      activeWeek
    ]

  const day =
    week?.days?.[
      activeDay
    ]

  weekTitle.textContent =
    activeDay ===
      'day7'
      ? `${week?.title || ''}`
      : week?.title ||
        'Materi JLPT N1'

  dayTitle.textContent =
    day?.title ||
    ''
}

/* =========================================================
   FILTER LABEL
========================================================= */

function updateFilterLabel() {
  if (
    !elementExists(
      activeFilterLabel
    )
  ) {
    return
  }

  if (
    currentSearch
  ) {
    activeFilterLabel.textContent =
      `Pencarian: "${currentSearch}"`

    return
  }

  const weekNumber =
    activeWeek.replace(
      'week',
      ''
    )

  const dayNumber =
    activeDay.replace(
      'day',
      ''
    )

  activeFilterLabel.textContent =
    activeDay ===
      'day7'
      ? `Minggu ${weekNumber} • Hari 7 • Full Exam`
      : `Minggu ${weekNumber} • Hari ${dayNumber}`
}

/* =========================================================
   EXAM
========================================================= */

function renderExam(
  examData
) {
  if (
    !elementExists(
      miniExam
    )
  ) {
    return
  }

  if (
    currentSearch
  ) {
    miniExam.classList.add(
      'hidden'
    )

    return
  }

  if (!examData) {
    miniExam.classList.add(
      'hidden'
    )

    return
  }

  miniExam.classList.remove(
    'hidden'
  )

  if (
    typeof examData ===
    'string'
  ) {
    examContent.innerHTML =
      examData

    initializeHTMLExam()

    return
  }

  if (
    examData.type ===
    'html'
  ) {
    examContent.innerHTML =
      examData.content ||
      ''

    initializeHTMLExam()

    return
  }

  if (
    Array.isArray(
      examData.questions
    )
  ) {
    renderObjectExam(
      examData
    )

    return
  }

  examContent.innerHTML = `
    <div class="exam-empty">
      <i class="bi bi-info-circle"></i>
      Exam belum tersedia.
    </div>
  `
}

/* =========================================================
   HTML EXAM
========================================================= */

function initializeHTMLExam() {
  if (!examContent) {
    return
  }

  const buttons =
    examContent.querySelectorAll(
      '.exam-btn'
    )

  buttons.forEach(
    (
      button,
      index
    ) => {
      button.dataset.examOption =
        String(
          index + 1
        )

      button.style.animationDelay =
        `${index * 0.015}s`
    }
  )

  const paragraphs =
    examContent.querySelectorAll(
      '.exam-q'
    )

  paragraphs.forEach(
    (
      question,
      index
    ) => {
      question.style.animationDelay =
        `${index * 0.035}s`
    }
  )

  window.currentObjectExam =
    null

  examAnswers = {}

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM
========================================================= */

let examAnswers = {}

function renderObjectExam(
  examData
) {
  examAnswers = {}

  let html =
    `<div class="exam-container">`

  examData.questions.forEach(
    (
      question,
      index
    ) => {
      html += `
        <div
          class="exam-q"
          data-question-index="${index}"
        >

          <h3>
            問題 ${index + 1}
          </h3>

          <p>
            ${question.question}
          </p>

          <div>
      `

      question.options.forEach(
        (
          option,
          optionIndex
        ) => {
          html += `
            <button
              class="exam-opt-btn"
              type="button"
              onclick="
                chooseExamAnswer(
                  ${index},
                  ${optionIndex},
                  this
                )
              "
            >
              ${optionIndex + 1}.
              ${option}
            </button>
          `
        }
      )

      html += `
          </div>

          <div
            class="exam-feedback"
            id="exam-feedback-${index}"
          ></div>

        </div>
      `
    }
  )

  html += `
    <button
      class="exam-submit"
      type="button"
      onclick="finishObjectExam()"
      style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        background:linear-gradient(
          135deg,
          #1677ff,
          #0958d9
        );
        color:#ffffff;
        border:none;
        border-radius:8px;
        padding:12px 24px;
        font-size:15px;
        font-weight:600;
        cursor:pointer;
        box-shadow:
          0 4px 12px
          rgba(22,119,255,0.3);
        transition:all 0.2s ease-in-out;
      "
      onmouseover="
        this.style.transform='translateY(-2px)';
        this.style.boxShadow=
          '0 6px 16px rgba(22,119,255,0.4)';
      "
      onmouseout="
        this.style.transform='translateY(0)';
        this.style.boxShadow=
          '0 4px 12px rgba(22,119,255,0.3)';
      "
    >

      <i
        class="bi bi-send-check"
        style="font-size:18px;"
      ></i>

      Selesai & Lihat Skor

    </button>

    <div
      id="objectExamResult"
      class="exam-result hidden"
    ></div>

    </div>
  `

  examContent.innerHTML =
    html

  window.currentObjectExam =
    examData

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM ANSWER
========================================================= */

window.chooseExamAnswer =
  function (
    questionIndex,
    optionIndex,
    button
  ) {
    if (
      examAnswers[
        questionIndex
      ] !== undefined
    ) {
      return
    }

    examAnswers[
      questionIndex
    ] =
      optionIndex

    const parent =
      button.parentElement

    const buttons =
      parent.querySelectorAll(
        'button'
      )

    buttons.forEach(
      btn =>
        (btn.disabled = true)
    )

    const question =
      window.currentObjectExam
        ?.questions?.[
        questionIndex
      ]

    if (!question) {
      return
    }

    const feedback =
      document.getElementById(
        `exam-feedback-${questionIndex}`
      )

    if (
      optionIndex ===
      question.correct
    ) {
      button.style.background =
        'var(--success)'

      button.style.color =
        'white'

      if (feedback) {
        feedback.innerHTML = `
          <span
            style="color:var(--success)"
          >
            <i
              class="bi bi-check-circle-fill"
            ></i>
            Benar!
          </span>
        `
      }
    } else {
      button.style.background =
        'var(--danger)'

      button.style.color =
        'white'

      if (
        buttons[
          question.correct
        ]
      ) {
        buttons[
          question.correct
        ].style.background =
          'var(--success)'

        buttons[
          question.correct
        ].style.color =
          'white'
      }

      if (feedback) {
        feedback.innerHTML = `
          <span
            style="color:var(--danger)"
          >
            <i
              class="bi bi-x-circle-fill"
            ></i>
            Kurang tepat.
          </span>
        `
      }
    }

    updateExamProgress()
  }

/* =========================================================
   FINISH OBJECT EXAM
========================================================= */

window.finishObjectExam =
  function () {
    const exam =
      window.currentObjectExam

    if (!exam) {
      return
    }

    if (
      Object.keys(
        examAnswers
      ).length <
      exam.questions.length
    ) {
      alert(
        'Jawab semua pertanyaan terlebih dahulu.'
      )

      return
    }

    let score = 0

    exam.questions.forEach(
      (
        question,
        index
      ) => {
        if (
          examAnswers[index] ===
          question.correct
        ) {
          score++
        }
      }
    )

    const percentage =
      exam.questions.length >
      0
        ? Math.round(
            (score /
              exam.questions.length) *
              100
          )
        : 0

    const result =
      document.getElementById(
        'objectExamResult'
      )

    if (!result) {
      return
    }

    result.classList.remove(
      'hidden'
    )

    result.innerHTML = `
      <i class="bi bi-trophy-fill"></i>

      Skor:
      ${score}/${exam.questions.length}
      (${percentage}%)

      <br>

      ${
        percentage >= 70
          ? 'よくできました！'
          : 'もう一度復習しましょう。'
      }
    `
  }

/* =========================================================
   EXAM PROGRESS
========================================================= */

function updateExamProgress() {
  if (
    !elementExists(
      examContent
    )
  ) {
    return
  }

  const questionBlocks =
    examContent.querySelectorAll(
      '.exam-q'
    )

  if (
    window.currentObjectExam &&
    questionBlocks.length
  ) {
    const total =
      questionBlocks.length

    const answered =
      Object.keys(
        examAnswers
      ).length

    const percentage =
      total > 0
        ? Math.round(
            (answered /
              total) *
              100
          )
        : 0

    if (examAnswered) {
      examAnswered.textContent =
        `${percentage}%`
    }

    if (
      examProgressFill
    ) {
      examProgressFill.style.width =
        `${percentage}%`
    }

    return
  }

  if (examAnswered) {
    examAnswered.textContent =
      '25 Soal'
  }

  if (
    examProgressFill
  ) {
    examProgressFill.style.width =
      '0%'
  }
}

/* =========================================================
   STATUS UPDATE
========================================================= */

window.updateStatus =
  function (
    id,
    status,
    button
  ) {
    localStorage.setItem(
      `status_${id}`,
      status
    )

    if (
      button?.parentElement
    ) {
      button.parentElement
        .querySelectorAll(
          '.status-btn'
        )
        .forEach(
          btn =>
            btn.classList.remove(
              'active'
            )
        )

      button.classList.add(
        'active'
      )
    }

    updateProgress(
      getFilteredItems()
    )
  }

/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {
  searchInput.addEventListener(
    'input',
    event => {
      currentSearch =
        event.target.value
          .trim()
          .toLowerCase()

      updateContentHeader()

      updateFilterLabel()

      renderCards()

      renderExam(
        courseData[
          activeWeek
        ]?.days?.[
          activeDay
        ]?.exam
      )
    }
  )
}

/* =========================================================
   WEEK CHANGE
========================================================= */

if (weekSelect) {
  weekSelect.addEventListener(
    'change',
    event => {
      activeWeek =
        event.target.value

      activeDay =
        'day1'

      currentSearch =
        ''

      if (searchInput) {
        searchInput.value =
          ''
      }

      if (daySelect) {
        daySelect.value =
          activeDay
      }

      updateContentHeader()

      updateFilterLabel()

      renderCards()

      renderExam(
        courseData[
          activeWeek
        ]?.days?.[
          activeDay
        ]?.exam
      )
    }
  )
}

/* =========================================================
   DAY CHANGE
========================================================= */

if (daySelect) {
  daySelect.addEventListener(
    'change',
    event => {
      activeDay =
        event.target.value

      currentSearch =
        ''

      if (searchInput) {
        searchInput.value =
          ''
      }

      updateContentHeader()

      updateFilterLabel()

      renderCards()

      renderExam(
        courseData[
          activeWeek
        ]?.days?.[
          activeDay
        ]?.exam
      )
    }
  )
}

/* =========================================================
   STATUS FILTER
========================================================= */

if (statusSelect) {
  statusSelect.addEventListener(
    'change',
    event => {
      currentStatus =
        event.target.value

      if (
        activeDay ===
          'day7' &&
        !currentSearch
      ) {
        return
      }

      renderCards()
    }
  )
}

/* =========================================================
   RESET
========================================================= */

function resetFilters() {
  currentSearch =
    ''

  currentStatus =
    'all'

  activeWeek =
    'week1'

  activeDay =
    'day1'

  if (searchInput) {
    searchInput.value =
      ''
  }

  if (statusSelect) {
    statusSelect.value =
      'all'
  }

  if (weekSelect) {
    weekSelect.value =
      'week1'
  }

  if (daySelect) {
    daySelect.value =
      'day1'
  }

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(
    courseData.week1?.days
      ?.day1?.exam
  )
}

if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener(
    'click',
    resetFilters
  )
}

if (emptyResetBtn) {
  emptyResetBtn.addEventListener(
    'click',
    resetFilters
  )
}

/* =========================================================
   CTRL + K
========================================================= */

document.addEventListener(
  'keydown',
  event => {
    if (
      (event.ctrlKey ||
        event.metaKey) &&
      event.key.toLowerCase() ===
        'k'
    ) {
      event.preventDefault()

      if (searchInput) {
        searchInput.focus()
      }
    }
  }
)

/* =========================================================
   SPACE = PAUSE
========================================================= */

document.addEventListener(
  'keydown',
  event => {
    if (
      event.code !== 'Space'
    ) {
      return
    }

    const target =
      event.target

    if (
      target?.tagName ===
        'INPUT' ||
      target?.tagName ===
        'TEXTAREA' ||
      target?.tagName ===
        'SELECT' ||
      target?.isContentEditable
    ) {
      return
    }

    if (
      speakingCardId !==
      null
    ) {
      event.preventDefault()

      togglePauseSpeech()
    }
  }
)

/* =========================================================
   MEMO MODE
========================================================= */

if (memoToggle) {
  memoToggle.addEventListener(
    'click',
    () => {
      memoMode =
        !memoMode

      document.body.classList.toggle(
        'memo-mode',
        memoMode
      )

      memoToggle.classList.toggle(
        'active',
        memoMode
      )

      memoToggle.innerHTML =
        memoMode
          ? `
            <i class="bi bi-eye-slash-fill"></i>
          `
          : `
            <i class="bi bi-eye"></i>
          `
    }
  )
}

/* =========================================================
   DARK MODE
========================================================= */

if (themeToggle) {
  themeToggle.addEventListener(
    'click',
    () => {
      const dark =
        document.body.classList.toggle(
          'dark-mode'
        )

      themeToggle.innerHTML =
        dark
          ? `
            <i class="bi bi-sun-fill"></i>
          `
          : `
            <i class="bi bi-moon-stars-fill"></i>
          `

      localStorage.setItem(
        'n1_dark_mode',
        dark
          ? '1'
          : '0'
      )
    }
  )
}

if (
  localStorage.getItem(
    'n1_dark_mode'
  ) === '1'
) {
  document.body.classList.add(
    'dark-mode'
  )

  if (themeToggle) {
    themeToggle.innerHTML = `
      <i class="bi bi-sun-fill"></i>
    `
  }
}

/* =========================================================
   APPLY LANGUAGE
========================================================= */

function applyLanguage(
  lang
) {
  currentLanguage =
    normalizeLanguage(lang)

  localStorage.setItem(
    'n1_language',
    currentLanguage
  )

  document.body.className =
    document.body.className.replace(
      /\blang-show-\w+(?:-\w+)?\b/g,
      ''
    )

  document.body.classList.add(
    `lang-show-${currentLanguage}`
  )

  renderCards()
}

/* =========================================================
   LANGUAGE UI
========================================================= */

function initializeLanguageUI() {
  currentLanguage =
    normalizeLanguage(
      currentLanguage
    )

  document.body.classList.add(
    `lang-show-${currentLanguage}`
  )

  document
    .querySelectorAll(
      '#languageMenu button'
    )
    .forEach(button => {
      const buttonLang =
        normalizeLanguage(
          button.dataset.lang
        )

      button.classList.toggle(
        'active',
        buttonLang ===
          currentLanguage
      )
    })
}

if (langToggleBtn) {
  langToggleBtn.addEventListener(
    'click',
    event => {
      event.stopPropagation()

      if (languageMenu) {
        languageMenu.classList.toggle(
          'hidden'
        )
      }
    }
  )
}

document
  .querySelectorAll(
    '#languageMenu button'
  )
  .forEach(button => {
    button.addEventListener(
      'click',
      event => {
        event.stopPropagation()

        applyLanguage(
          button.dataset.lang
        )

        document
          .querySelectorAll(
            '#languageMenu button'
          )
          .forEach(btn =>
            btn.classList.remove(
              'active'
            )
          )

        button.classList.add(
          'active'
        )

        if (
          languageMenu
        ) {
          languageMenu.classList.add(
            'hidden'
          )
        }
      }
    )
  })

document.addEventListener(
  'click',
  event => {
    if (
      languageMenu &&
      !languageMenu.contains(
        event.target
      ) &&
      event.target !==
        langToggleBtn
    ) {
      languageMenu.classList.add(
        'hidden'
      )
    }
  }
)

/* =========================================================
   TIME
========================================================= */

function getTimePeriod(
  hour
) {
  if (
    hour >= 0 &&
    hour < 3
  ) {
    return 'larut-malam'
  }

  if (
    hour >= 3 &&
    hour < 5
  ) {
    return 'subuh'
  }

  if (
    hour >= 5 &&
    hour < 10
  ) {
    return 'pagi'
  }

  if (
    hour >= 10 &&
    hour < 15
  ) {
    return 'siang'
  }

  if (
    hour >= 15 &&
    hour < 18
  ) {
    return 'sore'
  }

  if (
    hour >= 18 &&
    hour < 23
  ) {
    return 'malam'
  }

  return 'tengah-malam'
}

/* =========================================================
   GREETING
========================================================= */

function updateTimeAndGreeting() {
  const now =
    new Date()

  const hour =
    now.getHours()

  const minute =
    now.getMinutes()

  const second =
    now.getSeconds()

  const period =
    getTimePeriod(hour)

  document.body.classList.remove(
    'theme-subuh',
    'theme-pagi',
    'theme-siang',
    'theme-sore',
    'theme-malam',
    'theme-tengah-malam',
    'theme-larut-malam'
  )

  document.body.classList.add(
    `theme-${period}`
  )

  if (liveClock) {
    liveClock.textContent =
      [hour, minute, second]
        .map(value =>
          String(
            value
          ).padStart(
            2,
            '0'
          )
        )
        .join(':')
  }

  const data = {
    'larut-malam': {
      label:
        'LARUT MALAM',
      japanese:
        'こんばんは',
      message:
        'Kalau masih belajar, cukup lakukan review ringan. Besok masih ada waktu untuk melanjutkannya.',
      icon:
        'bi-stars',
      period:
        'Larut malam'
    },

    subuh: {
      label:
        'SELAMAT SUBUH',
      japanese:
        'おはようございます',
      message:
        'Waktu yang tenang untuk mengulang bunpou sebelum aktivitas dimulai.',
      icon:
        'bi-cloud-sun-fill',
      period:
        'Subuh'
    },

    pagi: {
      label:
        'SELAMAT PAGI',
      japanese:
        'おはようございます',
      message:
        'Mulai hari dengan sedikit latihan. Satu bunpou yang benar-benar dipahami lebih berharga daripada banyak yang hanya dibaca.',
      icon:
        'bi-sun-fill',
      period:
        'Pagi'
    },

    siang: {
      label:
        'SELAMAT SIANG',
      japanese:
        'こんにちは',
      message:
        'Tetap konsisten. Sedikit demi sedikit pola tata bahasa N1 akan menjadi semakin familiar.',
      icon:
        'bi-brightness-high-fill',
      period:
        'Siang'
    },

    sore: {
      label:
        'SELAMAT SORE',
      japanese:
        'こんにちは',
      message:
        'Matahari mulai turun. Waktunya review beberapa bunpou sebelum target harian terlewat.',
      icon:
        'bi-sun',
      period:
        'Sore'
    },

    malam: {
      label:
        'SELAMAT MALAM',
      japanese:
        'こんばんは',
      message:
        'Hari hampir selesai. Perkuat pola yang masih terasa samar sebelum menutup hari.',
      icon:
        'bi-moon-stars-fill',
      period:
        'Malam'
    },

    'tengah-malam': {
      label:
        'TENGAH MALAM',
      japanese:
        'こんばんは',
      message:
        'Sudah cukup malam. Review singkat tetap berarti, tetapi jangan memaksakan diri terlalu lama.',
      icon:
        'bi-moon-fill',
      period:
        'Tengah malam'
    }
  }

  const greeting =
    data[period]

  if (greetingLabel) {
    greetingLabel.textContent =
      greeting.label
  }

  if (
    greetingJapanese
  ) {
    greetingJapanese.textContent =
      greeting.japanese
  }

  if (
    greetingMessage
  ) {
    greetingMessage.textContent =
      greeting.message
  }

  if (
    greetingIcon
  ) {
    greetingIcon.className =
      `bi ${greeting.icon}`
  }

  if (
    timePeriodText
  ) {
    timePeriodText.textContent =
      greeting.period
  }

  const root =
    getComputedStyle(
      document.body
    )

  const primary =
    root.getPropertyValue(
      '--primary'
    )

  document
    .querySelector(
      'meta[name="theme-color"]'
    )
    ?.setAttribute(
      'content',
      primary.trim()
    )
}

/* =========================================================
   VISIBILITY
========================================================= */

document.addEventListener(
  'visibilitychange',
  () => {
    /*
       Jangan stop TTS otomatis.
    */
  }
)

/* =========================================================
   BEFORE UNLOAD
========================================================= */

window.addEventListener(
  'beforeunload',
  () => {
    stopSpeech()
  }
)

/* =========================================================
   INIT
========================================================= */

function init() {
  populateWeekSelect()

  populateDaySelect()

  if (weekSelect) {
    weekSelect.value =
      activeWeek
  }

  if (daySelect) {
    daySelect.value =
      activeDay
  }

  initializeLanguageUI()

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(
    courseData.week1?.days
      ?.day1?.exam
  )

  updateTimeAndGreeting()

  /*
     Mulai load analyzer di background.
     Ini membuat furigana siap lebih cepat
     saat kartu pertama kali ditampilkan.
  */
  initializeFurigana()

  setInterval(
    updateTimeAndGreeting,
    1000
  )
}

/* =========================================================
   START
========================================================= */

init()