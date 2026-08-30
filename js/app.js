/* =========================================================
   総まとめ — JLPT N1 GRAMMAR APP
   CLEAN VERSION — NO FURIGANA
========================================================= */

/* =========================================================
   COURSE DATA
========================================================= */

const courseTitles = {
  1: '第1週 努力してこそ合格できる',
  2: '第2週 私なりに努力している',
  3: '第3週 言うまでもなく、努力している',
  4: '第4週 努力なくして合格はない',
  5: '第5週 努力せずには進まない',
  6: '第6週 以前にも増して努力している',
  7: '第7週 努力に努力を重ねている',
  8: '第8週 結果はどうあれ、努力しよう'
}

const courseData = {}

for (let week = 1; week <= 8; week++) {
  const weekKey = `week${week}`
  const days = {}

  for (let day = 1; day <= 7; day++) {
    const variableName = `W${week}H${day}`
    const data = window[variableName]

    days[`day${day}`] = data
      ? normalizeDayData(data)
      : createEmptyDay(week, day)
  }

  courseData[weekKey] = {
    title: courseTitles[week] || `第${week}週 JLPT N1`,
    days
  }
}

/* =========================================================
   NORMALIZE DAY DATA
========================================================= */

function normalizeDayData (data) {
  if (!data || typeof data !== 'object') {
    return {
      title: 'Materi belum tersedia',
      grammar: [],
      exam: null
    }
  }

  return {
    ...data,
    title: data.title || 'Materi belum tersedia',
    grammar: Array.isArray(data.grammar) ? data.grammar : [],
    exam: data.exam || null
  }
}

/* =========================================================
   EMPTY DAY
========================================================= */

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
let explanationLoadVersion = 0
let searchDebounceTimer = null

let allGrammarCache = null

/* =========================================================
   LANGUAGE
========================================================= */

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

let currentLanguage = normalizeLanguage(
  localStorage.getItem('n1_language') || 'id'
)

function normalizeLanguage (lang) {
  const value = String(lang || '')
    .trim()
    .toLowerCase()

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
  switch (normalizeLanguage(lang)) {
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
   SAFE HELPERS
========================================================= */

function elementExists (element) {
  return !!element && typeof element === 'object'
}

/* =========================================================
   HTML HELPERS
========================================================= */

function stripHTML (html) {
  const temp = document.createElement('div')

  temp.innerHTML = html || ''

  return (temp.textContent || temp.innerText || '').replace(/\s+/g, ' ').trim()
}

function escapeHTML (value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function escapeForJS (value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
}

/* =========================================================
   STATUS
========================================================= */

function getStatus (item) {
  if (!item?.id) {
    return '0'
  }

  return localStorage.getItem(`status_${item.id}`) || '0'
}

/* =========================================================
   ALL GRAMMAR CACHE
========================================================= */

function invalidateGrammarCache () {
  allGrammarCache = null
}

function getAllGrammar () {
  if (Array.isArray(allGrammarCache)) {
    return allGrammarCache
  }

  const output = []

  Object.entries(courseData).forEach(([weekKey, weekData]) => {
    Object.entries(weekData?.days || {}).forEach(([dayKey, dayData]) => {
      if (!Array.isArray(dayData?.grammar)) {
        return
      }

      dayData.grammar.forEach(item => {
        output.push({
          ...item,
          _week: weekKey,
          _day: dayKey
        })
      })
    })
  })

  allGrammarCache = output

  return output
}

function findItemById (id) {
  return getAllGrammar().find(item => String(item.id) === String(id))
}

/* =========================================================
   SELECTS
========================================================= */

function populateWeekSelect () {
  if (!weekSelect) {
    return
  }

  weekSelect.replaceChildren()

  for (let week = 1; week <= 8; week++) {
    const option = document.createElement('option')

    option.value = `week${week}`
    option.textContent = `Minggu ${week}`

    weekSelect.appendChild(option)
  }

  weekSelect.value = activeWeek
}

function populateDaySelect () {
  if (!daySelect) {
    return
  }

  daySelect.replaceChildren()

  for (let day = 1; day <= 7; day++) {
    const option = document.createElement('option')

    option.value = `day${day}`

    option.textContent = day === 7 ? 'Hari 7 — Full Exam' : `Hari ${day}`

    daySelect.appendChild(option)
  }

  daySelect.value = activeDay
}

/* =========================================================
   SEARCH
========================================================= */

function matchesSearch (item, query) {
  if (!query) {
    return true
  }

  const searchText = [
    item?.rule,
    item?.reading,
    item?.yomi,

    item?.meaning?.id,
    item?.meaning?.en,
    item?.meaning?.cn,
    item?.meaning?.zh,

    item?.explanation,
    item?.explanationJP,

    ...(Array.isArray(item?.examples) ? item.examples : [])
  ]
    .map(value => stripHTML(value || ''))
    .join(' ')
    .toLowerCase()

  return searchText.includes(String(query).toLowerCase())
}

function getFilteredItems () {
  let items = []

  if (currentSearch) {
    items = getAllGrammar().filter(item => matchesSearch(item, currentSearch))
  } else {
    const day = courseData[activeWeek]?.days?.[activeDay]

    if (Array.isArray(day?.grammar)) {
      items = day.grammar.map(item => ({
        ...item,
        _week: activeWeek,
        _day: activeDay
      }))
    }
  }

  if (currentStatus !== 'all') {
    items = items.filter(item => getStatus(item) === currentStatus)
  }

  return items
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

  const lower = clean.toLowerCase()

  let score = 0

  idWords.forEach(word => {
    const pattern = new RegExp(`\\b${word}\\b`, 'i')

    if (pattern.test(lower)) {
      score++
    }
  })

  if (
    /[a-z]/i.test(clean) &&
    /(yang|dan|untuk|dengan|tidak|ini|itu|akan)\b/i.test(lower)
  ) {
    score += 2
  }

  return score > 0 ? 'id' : 'en'
}

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
   TRANSLATION CACHE
========================================================= */

const translationCacheKey = 'n1_translation_cache'

const explanationCacheKey = 'n1_explanation_translation_cache'

const exampleTranslationTimers = new Map()

const translationPending = new Map()

let translationMemoryCache = null
let explanationMemoryCache = null

const TRANSLATION_CONFIG = {
  timeout: 12000,
  retries: 2,

  myMemory: 'https://api.mymemory.translated.net/get',

  google: 'https://translate.googleapis.com/translate_a/single',

  explanationConcurrency: 2
}

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
   FETCH TIMEOUT
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
  const url = new URL(TRANSLATION_CONFIG.myMemory)

  url.searchParams.set('q', text)

  url.searchParams.set(
    'langpair',
    `${normalizeApiLanguage(from)}|${normalizeApiLanguage(to)}`
  )

  const response = await fetchWithTimeout(url.toString())

  if (!response.ok) {
    throw new Error(`MyMemory HTTP ${response.status}`)
  }

  const data = await response.json()

  if (data?.responseStatus && Number(data.responseStatus) !== 200) {
    throw new Error(`MyMemory API status ${data.responseStatus}`)
  }

  if (data?.quotaFinished === true) {
    throw new Error('MyMemory quota finished')
  }

  const translated = String(
    data?.responseData?.translatedText || data?.matches?.[0]?.translation || ''
  ).trim()

  if (!translated) {
    throw new Error('MyMemory returned empty translation')
  }

  return translated
}

/* =========================================================
   GOOGLE FALLBACK
========================================================= */

async function translateWithGoogleFallback (text, from, to) {
  const url = new URL(TRANSLATION_CONFIG.google)

  url.searchParams.set('client', 'gtx')
  url.searchParams.set('sl', normalizeApiLanguage(from))
  url.searchParams.set('tl', normalizeApiLanguage(to))
  url.searchParams.set('dt', 't')
  url.searchParams.set('q', text)

  const response = await fetchWithTimeout(url.toString())

  if (!response.ok) {
    throw new Error(`Google fallback HTTP ${response.status}`)
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
    throw new Error('Google fallback returned empty result')
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

  if (typeof cache[cacheKey] === 'string' && cache[cacheKey]) {
    return cache[cacheKey]
  }

  if (translationPending.has(cacheKey)) {
    return translationPending.get(cacheKey)
  }

  const requestPromise = (async () => {
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
          await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1)))
        }
      }
    }

    try {
      const fallbackResult = await translateWithGoogleFallback(
        clean,
        source,
        target
      )

      if (fallbackResult) {
        cache[cacheKey] = fallbackResult

        saveTranslationCache(cache)

        return fallbackResult
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

  translationPending.set(cacheKey, requestPromise)

  try {
    return await requestPromise
  } finally {
    translationPending.delete(cacheKey)
  }
}

/* =========================================================
   EXPLANATION TRANSLATION
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

  if (typeof cache[cacheKey] === 'string' && cache[cacheKey]) {
    return cache[cacheKey]
  }

  const translated = await translateText(source, 'id', target)

  if (!translated) {
    return source
  }

  cache[cacheKey] = translated

  saveExplanationCache(cache)

  return translated
}

/* =========================================================
   TTS
========================================================= */

let availableVoices = []
let speakingCardId = null
let speechQueue = []
let speechIndex = 0
let speechPaused = false
let currentSpeakingItem = null
let speechRequestId = 0

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

function buildSpeechQueue (item) {
  const queue = []

  if (item?.rule) {
    queue.push({
      text: `文法 ${stripHTML(item.rule)}`
    })
  }

  if (item?.reading || item?.yomi) {
    queue.push({
      text: stripHTML(item.reading || item.yomi)
    })
  }

  if (item?.explanationJP) {
    const explanationJP = stripHTML(item.explanationJP)

    if (explanationJP) {
      queue.push({
        text: `簡単な説明。${explanationJP}`
      })
    }
  }

  if (Array.isArray(item?.examples)) {
    item.examples.forEach((example, index) => {
      const clean = stripHTML(example)

      if (!clean) {
        return
      }

      queue.push({
        text: `例文 ${index + 1}。${clean}`
      })
    })
  }

  return queue
}

function stopSpeech () {
  speechRequestId++

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

window.stopSpeech = stopSpeech

async function startSpeech (item) {
  if (!('speechSynthesis' in window)) {
    alert('Browser ini tidak mendukung Text to Speech.')

    return
  }

  stopSpeech()

  const requestId = speechRequestId

  currentSpeakingItem = item
  speakingCardId = String(item.id)

  updateSpeechButtons()

  speechQueue = buildSpeechQueue(item)

  if (requestId !== speechRequestId || speakingCardId !== String(item.id)) {
    return
  }

  speechIndex = 0
  speechPaused = false

  speakCurrentChunk(requestId)
}

function speakCurrentChunk (requestId) {
  if (requestId !== speechRequestId || !speakingCardId) {
    return
  }

  if (!speechQueue.length || speechIndex >= speechQueue.length) {
    stopSpeech()
    return
  }

  const chunk = speechQueue[speechIndex]

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
    if (requestId === speechRequestId) {
      updateSpeechButtons()
    }
  }

  utterance.onend = () => {
    if (requestId !== speechRequestId || speakingCardId === null) {
      return
    }

    speechIndex++

    speakCurrentChunk(requestId)
  }

  utterance.onerror = event => {
    if (requestId !== speechRequestId) {
      return
    }

    console.warn('TTS error:', event?.error || 'unknown')

    stopSpeech()
  }

  try {
    window.speechSynthesis.speak(utterance)
  } catch (error) {
    console.warn('TTS start failed:', error)

    stopSpeech()
  }
}

window.togglePauseSpeech = function () {
  if (!('speechSynthesis' in window) || speakingCardId === null) {
    return
  }

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume()

    speechPaused = false
  } else {
    window.speechSynthesis.pause()

    speechPaused = true
  }

  updateSpeechButtons()
}

window.replaySpeech = function () {
  if (currentSpeakingItem) {
    startSpeech(currentSpeakingItem)
  }
}

function updateSpeechButtons () {
  document.querySelectorAll('.grammar-card').forEach(card => {
    const id = card.dataset.id

    const status = card.querySelector('.tts-status')

    const play = card.querySelector('.tts-play')

    const pause = card.querySelector('.tts-pause')

    if (!status) {
      return
    }

    const active = id === speakingCardId

    card.classList.toggle('speaking', active)

    status.textContent = active
      ? speechPaused
        ? 'Dijeda'
        : 'Sedang membaca bahasa Jepang...'
      : '読み上げ機能'

    if (play) {
      play.innerHTML = active
        ? '<i class="bi bi-stop-fill"></i>'
        : '<i class="bi bi-play-fill"></i>'
    }

    if (pause) {
      pause.innerHTML =
        active && !speechPaused
          ? '<i class="bi bi-pause-fill"></i>'
          : '<i class="bi bi-play-fill"></i>'
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
   EXAMPLE TRANSLATION STATE
========================================================= */

function createExampleState (item, example, index) {
  return {
    exampleId: `${item.id}_${index}`,

    originalHTML: String(example ?? ''),

    originalText: stripHTML(example),

    translated: false,

    translation: '',

    sourceLanguage: null,

    targetLanguage: null,

    key: null,

    busy: false
  }
}

function getExampleOriginalHTML (state) {
  if (!state) {
    return ''
  }

  return state.originalHTML || escapeHTML(state.originalText || '')
}

/* =========================================================
   EXAMPLE RESET
========================================================= */

function resetExampleDisplay (exampleBox, state) {
  if (!exampleBox || !state) {
    return
  }

  if (state.key) {
    const timer = exampleTranslationTimers.get(state.key)

    if (timer) {
      clearTimeout(timer)
    }

    exampleTranslationTimers.delete(state.key)
  }

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

  if (state.busy || !state.originalText) {
    return
  }

  const sourceLanguage = detectLanguage(state.originalText)

  const targetLanguage = getTargetLanguage(sourceLanguage)

  const requestKey = [
    state.exampleId,
    sourceLanguage,
    targetLanguage,
    state.originalText
  ].join('::')

  state.sourceLanguage = sourceLanguage

  state.targetLanguage = targetLanguage

  state.key = requestKey

  state.busy = true

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
      state.originalText,
      sourceLanguage,
      targetLanguage
    )

    if (!document.body.contains(exampleBox)) {
      return
    }

    const latestState = exampleBox._translationState

    if (!latestState || latestState.key !== requestKey) {
      return
    }

    if (!translated) {
      exampleBox.classList.remove('translating')

      exampleBox.innerHTML = `
        <i class="bi bi-info-circle"></i>
        <span>
          ${escapeHTML(getLanguageText('translationFailed'))}
        </span>
      `

      const errorTimer = setTimeout(() => {
        if (
          document.body.contains(exampleBox) &&
          exampleBox._translationState === latestState
        ) {
          resetExampleDisplay(exampleBox, latestState)
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
      if (
        document.body.contains(exampleBox) &&
        exampleBox._translationState?.translated
      ) {
        resetExampleDisplay(exampleBox, exampleBox._translationState)
      }
    }, 5000)

    exampleTranslationTimers.set(requestKey, timer)
  } catch (error) {
    console.warn('Example translation failed:', error)

    if (document.body.contains(exampleBox)) {
      resetExampleDisplay(exampleBox, state)
    }
  } finally {
    state.busy = false
  }
}

/* =========================================================
   COPY
========================================================= */

async function copyText (text) {
  if (!text) {
    return false
  }

  try {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text)

      return true
    }
  } catch (error) {
    console.warn('Clipboard API failed:', error)
  }

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
  } catch (error) {
    console.warn('Fallback copy failed:', error)
  }

  textarea.remove()

  return copied
}

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

  const success = await copyText(text)

  if (success) {
    showCopyFeedback(
      exampleBox,
      state.translated
        ? getLanguageText('copiedTranslation')
        : getLanguageText('copiedOriginal')
    )
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
    <span>${escapeHTML(message)}</span>
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
   EXAMPLE INTERACTION
========================================================= */

let exampleClickTimer = null

document.addEventListener('click', event => {
  const exampleBox = event.target.closest('.example-box')

  if (!exampleBox?._translationState) {
    return
  }

  if (exampleClickTimer) {
    clearTimeout(exampleClickTimer)
  }

  exampleClickTimer = setTimeout(() => {
    exampleClickTimer = null

    copyExampleText(exampleBox)
  }, 220)
})

document.addEventListener('dblclick', event => {
  const exampleBox = event.target.closest('.example-box')

  if (!exampleBox?._translationState) {
    return
  }

  event.preventDefault()

  if (exampleClickTimer) {
    clearTimeout(exampleClickTimer)

    exampleClickTimer = null
  }

  showExampleTranslation(exampleBox)
})

document.addEventListener('keydown', event => {
  const target = event.target?.closest?.('.example-box')

  if (!target?._translationState) {
    return
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()

    copyExampleText(target)
  }
})

/* =========================================================
   CARD HTML
========================================================= */

function createCardHTML (item, index) {
  const savedStatus = getStatus(item)

  const examples = Array.isArray(item?.examples) ? item.examples : []

  const lang = normalizeLanguage(currentLanguage)

  const reading = item?.reading || item?.yomi || ''

  const moduleText =
    item?.module ||
    item?.lesson ||
    `M${String(item?._week || '').replace('week', '')} - H${String(
      item?._day || ''
    ).replace('day', '')}`

  const examplesHTML = examples
    .map((example, exampleIndex) => {
      const state = createExampleState(item, example, exampleIndex)

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
                ${example}
              </span>
            </div>
          `
    })
    .join('')

  const meaning =
    lang === 'en'
      ? item?.meaning?.en || '-'
      : lang === 'cn'
      ? item?.meaning?.cn || item?.meaning?.zh || '-'
      : item?.meaning?.id || '-'

  const explanation = stripHTML(item?.explanation || '') || '—'

  const exampleLabel =
    lang === 'id'
      ? 'Contoh Kalimat'
      : lang === 'en'
      ? 'Example Sentences'
      : '例句'

  return `
    <article
      class="grammar-card"
      data-id="${escapeHTML(item?.id)}"
      style="animation-delay:${index * 0.02}s"
    >

      <div class="card-top">

        <span class="day-badge">
          <i class="bi bi-bookmark-star-fill"></i>
          ${escapeHTML(moduleText)}
        </span>

        <span class="module-badge">
          <i class="bi ${item?.formal ? 'bi-building' : 'bi-stars'}"></i>

          ${item?.formal ? 'Formal' : 'N1'}
        </span>

      </div>

      <div class="rule-area">

        <div class="rule-reading">
          ${escapeHTML(reading)}
        </div>

        <div class="grammar-rule">
          ${item?.rule || '-'}
        </div>

        <div class="meaning-main">
          <span>
            ${meaning}
          </span>
        </div>

        <button
          class="speaker-main-btn"
          type="button"
          onclick="handleMainSpeech('${escapeForJS(item?.id)}')"
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
              ${meaning}
            </span>
          </div>

        </div>

        <div class="info-block">

          <div
            class="translation-box"
            data-explanation-id="${escapeHTML(item?.id)}"
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
                  ? escapeHTML(explanation)
                  : escapeHTML(getLanguageText('translating'))
              }
            </span>

          </div>

        </div>

        <div class="info-block examples">

          <div class="info-label">

            <i class="bi bi-chat-square-text-fill"></i>

            <span class="example-label">
              ${exampleLabel}
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
          onclick="handleMainSpeech('${escapeForJS(item?.id)}')"
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
          class="status-btn btn-0 ${savedStatus === '0' ? 'active' : ''}"
          type="button"
          onclick="updateStatus(
            '${escapeForJS(item?.id)}',
            '0',
            this
          )"
        >
          <i class="bi bi-x-circle"></i>
          <span>Belum</span>
        </button>

        <button
          class="status-btn btn-1 ${savedStatus === '1' ? 'active' : ''}"
          type="button"
          onclick="updateStatus(
            '${escapeForJS(item?.id)}',
            '1',
            this
          )"
        >
          <i class="bi bi-dash-circle"></i>
          <span>Agak</span>
        </button>

        <button
          class="status-btn btn-2 ${savedStatus === '2' ? 'active' : ''}"
          type="button"
          onclick="updateStatus(
            '${escapeForJS(item?.id)}',
            '2',
            this
          )"
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

  const cards = new Map()

  grammarCards.querySelectorAll('.grammar-card[data-id]').forEach(card => {
    cards.set(String(card.dataset.id), card)
  })

  items.forEach(item => {
    const card = cards.get(String(item.id))

    if (!card) {
      return
    }

    const examples = Array.isArray(item.examples) ? item.examples : []

    const boxes = card.querySelectorAll('.example-box[data-example-id]')

    boxes.forEach((box, index) => {
      if (examples[index] !== undefined) {
        box._translationState = createExampleState(item, examples[index], index)
      }
    })
  })
}

/* =========================================================
   CARD EXPLANATION LOAD
========================================================= */

async function loadCardTranslations (items, version) {
  const selectedLanguage = normalizeLanguage(currentLanguage)

  if (selectedLanguage === 'id') {
    items.forEach(item => {
      const selector = `.translation-box[data-explanation-id="${CSS.escape(
        String(item.id)
      )}"]`

      const box = document.querySelector(selector)

      const target = box?.querySelector('.id-explanation')

      if (target) {
        target.textContent = stripHTML(item?.explanation || '') || '—'
      }
    })

    return
  }

  let cursor = 0

  const worker = async () => {
    while (cursor < items.length) {
      if (version !== explanationLoadVersion) {
        return
      }

      const index = cursor++

      const item = items[index]

      const selector = `.translation-box[data-explanation-id="${CSS.escape(
        String(item.id)
      )}"]`

      const box = document.querySelector(selector)

      const target = box?.querySelector('.id-explanation')

      if (!target) {
        continue
      }

      target.textContent = getLanguageText('translating')

      try {
        const translated = await getExplanationForLanguage(item)

        if (
          version !== explanationLoadVersion ||
          !document.body.contains(target)
        ) {
          return
        }

        target.textContent = translated || '—'
      } catch (error) {
        console.warn('Explanation translation failed:', error)

        if (
          version === explanationLoadVersion &&
          document.body.contains(target)
        ) {
          target.textContent = stripHTML(item?.explanation || '') || '—'
        }
      }
    }
  }

  const workers = Array.from(
    {
      length: Math.min(TRANSLATION_CONFIG.explanationConcurrency, items.length)
    },
    () => worker()
  )

  await Promise.allSettled(workers)
}

/* =========================================================
   RENDER CARDS
========================================================= */

function renderCards () {
  const version = ++renderVersion

  explanationLoadVersion++

  stopSpeech()

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
    const html = items
      .map((item, index) => createCardHTML(item, index))
      .join('')

    grammarCards.innerHTML = html
  }

  if (emptyState) {
    emptyState.classList.toggle('hidden', items.length !== 0)
  }

  if (resultCounter) {
    resultCounter.textContent = `${items.length} materi`
  }

  initializeExampleStates(items)

  updateProgress(items)

  if (!items.length) {
    return
  }

  setTimeout(() => {
    if (version !== renderVersion) {
      return
    }

    loadCardTranslations(items, explanationLoadVersion).catch(error => {
      console.warn('Card translation load failed:', error)
    })
  }, 0)
}

/* =========================================================
   PROGRESS
========================================================= */

function updateProgress (items) {
  if (!progressPercent) {
    return
  }

  if (!items.length) {
    progressPercent.textContent = '0%'

    if (progressBarFill) {
      progressBarFill.style.width = '0%'
    }

    return
  }

  const mastered = items.filter(item => getStatus(item) === '2').length

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
  if (!weekTitle || !dayTitle) {
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
  if (!activeFilterLabel) {
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
   EXAM STATE
========================================================= */

let examAnswers = {}

window.currentObjectExam = null

/* =========================================================
   RENDER EXAM
========================================================= */

function renderExam (examData) {
  if (!miniExam) {
    return
  }

  if (currentSearch || !examData) {
    miniExam.classList.add('hidden')

    if (examContent) {
      examContent.innerHTML = ''
    }

    window.currentObjectExam = null

    examAnswers = {}

    updateExamProgress()

    return
  }

  miniExam.classList.remove('hidden')

  if (!examContent) {
    return
  }

  if (typeof examData === 'string') {
    examContent.innerHTML = examData

    initializeHTMLExam()

    return
  }

  if (examData.type === 'html') {
    examContent.innerHTML = examData.content || ''

    initializeHTMLExam()

    return
  }

  if (Array.isArray(examData.questions)) {
    renderObjectExam(examData)

    return
  }

  examContent.innerHTML = `
    <div class="exam-empty">
      <i class="bi bi-info-circle"></i>
      Exam belum tersedia.
    </div>
  `

  window.currentObjectExam = null

  examAnswers = {}

  updateExamProgress()
}

/* =========================================================
   HTML EXAM
========================================================= */

function initializeHTMLExam () {
  if (!examContent) {
    return
  }

  examContent.querySelectorAll('.exam-btn').forEach((button, index) => {
    button.dataset.examOption = String(index + 1)

    button.style.animationDelay = `${index * 0.015}s`
  })

  examContent.querySelectorAll('.exam-q').forEach((question, index) => {
    question.style.animationDelay = `${index * 0.035}s`
  })

  window.currentObjectExam = null

  examAnswers = {}

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM
========================================================= */

function renderObjectExam (examData) {
  examAnswers = {}

  window.currentObjectExam = examData

  const questions = Array.isArray(examData.questions) ? examData.questions : []

  const questionsHTML = questions
    .map((question, index) => {
      const options = Array.isArray(question?.options) ? question.options : []

      const optionsHTML = options
        .map(
          (option, optionIndex) => `
                  <button
                    class="exam-opt-btn"
                    type="button"
                    onclick="chooseExamAnswer(
                      ${index},
                      ${optionIndex},
                      this
                    )"
                  >
                    ${optionIndex + 1}.
                    ${option}
                  </button>
                `
        )
        .join('')

      return `
            <div
              class="exam-q"
              data-question-index="${index}"
            >

              <h3>
                問題 ${index + 1}
              </h3>

              <p>
                ${question?.question || ''}
              </p>

              <div>
                ${optionsHTML}
              </div>

              <div
                class="exam-feedback"
                id="exam-feedback-${index}"
              ></div>

            </div>
          `
    })
    .join('')

  examContent.innerHTML = `
    <div class="exam-container">

      ${questionsHTML}

<button
  type="button"
  onclick="finishObjectExam()"
  style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:9px;
    padding:11px 20px;
    border:none;
    border-radius:10px;
    background:#BC002D;
    color:#fff;
    font-size:14px;
    font-weight:600;
    letter-spacing:.2px;
    cursor:pointer;
    box-shadow:0 4px 12px rgba(188,0,45,.25);
    transition:all .2s ease;
  "
  onmouseover="this.style.background='#A80028';this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 16px rgba(188,0,45,.32)'"
  onmouseout="this.style.background='#BC002D';this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(188,0,45,.25)'"
>
  <i
    class="bi bi-send-check"
    style="font-size:17px;"
  ></i>
  Selesai & Lihat Skor
</button>

      <div
        id="objectExamResult"
        class="exam-result hidden"
      ></div>

    </div>
  `

  updateExamProgress()
}

/* =========================================================
   EXAM ANSWER
========================================================= */

window.chooseExamAnswer = function (questionIndex, optionIndex, button) {
  if (examAnswers[questionIndex] !== undefined) {
    return
  }

  const exam = window.currentObjectExam

  const question = exam?.questions?.[questionIndex]

  if (!question || !button) {
    return
  }

  examAnswers[questionIndex] = optionIndex

  const parent = button.parentElement

  const buttons = parent?.querySelectorAll('button') || []

  buttons.forEach(btn => {
    btn.disabled = true
  })

  const isCorrect = optionIndex === question.correct

  if (isCorrect) {
    button.style.background = 'var(--success)'

    button.style.color = 'white'
  } else {
    button.style.background = 'var(--danger)'

    button.style.color = 'white'

    if (buttons[question.correct]) {
      buttons[question.correct].style.background = 'var(--success)'

      buttons[question.correct].style.color = 'white'
    }
  }

  const feedback = document.getElementById(`exam-feedback-${questionIndex}`)

  if (feedback) {
    feedback.innerHTML = isCorrect
      ? `
            <span
              style="color:var(--success)"
            >
              <i class="bi bi-check-circle-fill"></i>
              Benar!
            </span>
          `
      : `
            <span
              style="color:var(--danger)"
            >
              <i class="bi bi-x-circle-fill"></i>
              Kurang tepat.
            </span>
          `
  }

  updateExamProgress()
}

/* =========================================================
   FINISH EXAM
========================================================= */

window.finishObjectExam = function () {
  const exam = window.currentObjectExam

  if (!exam) {
    return
  }

  const questions = Array.isArray(exam.questions) ? exam.questions : []

  if (Object.keys(examAnswers).length < questions.length) {
    alert('Jawab semua pertanyaan terlebih dahulu.')

    return
  }

  let score = 0

  questions.forEach((question, index) => {
    if (examAnswers[index] === question.correct) {
      score++
    }
  })

  const total = questions.length

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
  if (!examContent) {
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
    examAnswered.textContent = '25 Soal'
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
   SEARCH EVENT
========================================================= */

if (searchInput) {
  searchInput.addEventListener('input', event => {
    const value = event.target.value.trim().toLowerCase()

    clearTimeout(searchDebounceTimer)

    searchDebounceTimer = setTimeout(() => {
      currentSearch = value

      updateContentHeader()
      updateFilterLabel()
      renderCards()

      renderExam(courseData[activeWeek]?.days?.[activeDay]?.exam)
    }, 220)
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

    clearTimeout(searchDebounceTimer)

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

    clearTimeout(searchDebounceTimer)

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
   RESET FILTER
========================================================= */

function resetFilters () {
  clearTimeout(searchDebounceTimer)

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
    weekSelect.value = 'week1'
  }

  if (daySelect) {
    daySelect.value = 'day1'
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
   CTRL + K
========================================================= */

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()

    if (searchInput) {
      searchInput.focus()
    }
  }
})

/* =========================================================
   SPACE = PAUSE TTS
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
      ? '<i class="bi bi-eye-slash-fill"></i>'
      : '<i class="bi bi-eye"></i>'
  })
}

/* =========================================================
   DARK MODE
========================================================= */

function applyDarkModeButton (dark) {
  if (!themeToggle) {
    return
  }

  themeToggle.innerHTML = dark
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-stars-fill"></i>'
}

const savedDarkMode = localStorage.getItem('n1_dark_mode') === '1'

if (savedDarkMode) {
  document.body.classList.add('dark-mode')
}

applyDarkModeButton(savedDarkMode)

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode')

    applyDarkModeButton(dark)

    localStorage.setItem('n1_dark_mode', dark ? '1' : '0')
  })
}

/* =========================================================
   LANGUAGE APPLY
========================================================= */

function applyLanguage (lang) {
  currentLanguage = normalizeLanguage(lang)

  localStorage.setItem('n1_language', currentLanguage)

  document.body.classList.remove('lang-show-id', 'lang-show-en', 'lang-show-cn')

  document.body.classList.add(`lang-show-${currentLanguage}`)

  renderCards()
}

/* =========================================================
   LANGUAGE UI
========================================================= */

function initializeLanguageUI () {
  currentLanguage = normalizeLanguage(currentLanguage)

  document.body.classList.remove('lang-show-id', 'lang-show-en', 'lang-show-cn')

  document.body.classList.add(`lang-show-${currentLanguage}`)

  document.querySelectorAll('#languageMenu button').forEach(button => {
    button.classList.toggle(
      'active',
      normalizeLanguage(button.dataset.lang) === currentLanguage
    )
  })
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', event => {
    event.stopPropagation()

    languageMenu?.classList.toggle('hidden')
  })
}

document.querySelectorAll('#languageMenu button').forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation()

    applyLanguage(button.dataset.lang)

    document
      .querySelectorAll('#languageMenu button')
      .forEach(btn => btn.classList.remove('active'))

    button.classList.add('active')

    languageMenu?.classList.add('hidden')

    updateContentHeader()
    updateFilterLabel()
  })
})

document.addEventListener('click', event => {
  if (
    languageMenu &&
    !languageMenu.contains(event.target) &&
    event.target !== langToggleBtn
  ) {
    languageMenu.classList.add('hidden')
  }
})

/* =========================================================
   TIME
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

const greetingData = {
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
   TIME + GREETING UPDATE
========================================================= */

function updateTimeAndGreeting () {
  const now = new Date()

  const hour = now.getHours()

  const minute = now.getMinutes()

  const second = now.getSeconds()

  const period = getTimePeriod(hour)

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

  if (liveClock) {
    liveClock.textContent = [hour, minute, second]
      .map(value => String(value).padStart(2, '0'))
      .join(':')
  }

  const greeting = greetingData[period]

  if (!greeting) {
    return
  }

  if (greetingLabel) {
    greetingLabel.textContent = greeting.label
  }

  if (greetingJapanese) {
    greetingJapanese.textContent = greeting.japanese
  }

  if (greetingMessage) {
    greetingMessage.textContent = greeting.message
  }

  if (greetingIcon) {
    greetingIcon.className = `bi ${greeting.icon}`
  }

  if (timePeriodText) {
    timePeriodText.textContent = greeting.period
  }

  const primary = getComputedStyle(document.body)
    .getPropertyValue('--primary')
    .trim()

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', primary)
}

/* =========================================================
   PAGE LIFECYCLE
========================================================= */

window.addEventListener('beforeunload', stopSpeech)

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') {
    return
  }

  loadVoices()
})

/* =========================================================
   INIT
========================================================= */

function init () {
  invalidateGrammarCache()

  populateWeekSelect()

  populateDaySelect()

  initializeLanguageUI()

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

  updateTimeAndGreeting()

  setInterval(updateTimeAndGreeting, 1000)
}

/* =========================================================
   START APP
========================================================= */

init()
