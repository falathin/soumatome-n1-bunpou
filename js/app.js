/* =========================================================
   総まとめ — JLPT N1 GRAMMAR APP
========================================================= */

/* =========================================================
   COURSE DATA
========================================================= */

/*
    Week 1–8.
    Kalau file Week 2–8 sudah memiliki W2H1 dst.,
    data otomatis digunakan.

    Kalau belum ada:
    aplikasi tetap jalan dan menampilkan placeholder.
*/

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

function normalizeDayData (data) {
  if (!data) {
    return {
      title: 'Materi belum tersedia',

      grammar: [],

      exam: null
    }
  }

  return {
    ...data,

    grammar: Array.isArray(data.grammar) ? data.grammar : [],

    /*
           Day 7 kamu saat ini memiliki exam
           dalam bentuk HTML string.
           Kita pertahankan.
        */

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

                        <h3>
                            Exam belum tersedia
                        </h3>

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
   TTS STATE
========================================================= */

let availableVoices = []

let speakingCardId = null

let speechQueue = []

let speechIndex = 0

let speechPaused = false

let currentSpeakingItem = null

/* =========================================================
   LOAD VOICES
========================================================= */

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

/* =========================================================
   BEST JAPANESE VOICE
========================================================= */

function findJapaneseVoice () {
  loadVoices()

  const voices = availableVoices

  if (!voices.length) {
    return null
  }

  /*
        Prefer:
        Microsoft
        Japanese
        Online / Natural
    */

  const priority = [
    voice =>
      /microsoft/i.test(voice.name) &&
      /online|natural/i.test(voice.name) &&
      /^ja/i.test(voice.lang),

    voice => /microsoft/i.test(voice.name) && /^ja/i.test(voice.lang),

    voice => /^ja-JP/i.test(voice.lang),

    voice => /^ja/i.test(voice.lang)
  ]

  for (const test of priority) {
    const found = voices.find(test)

    if (found) {
      return found
    }
  }

  return null
}

/* =========================================================
   CLEAN TEXT
========================================================= */

function stripHTML (html) {
  const temp = document.createElement('div')

  temp.innerHTML = html || ''

  return (temp.textContent || temp.innerText || '').replace(/\s+/g, ' ').trim()
}

/* =========================================================
   ID ESCAPE
========================================================= */

function escapeHTML (value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/* =========================================================
   JS ESCAPE
========================================================= */

function escapeForJS (value) {
  return String(value)
    .replace(/\\/g, '\\\\')

    .replace(/'/g, "\\'")

    .replace(/"/g, '\\"')

    .replace(/\n/g, '\\n')

    .replace(/\r/g, '\\r')
}

/* =========================================================
   CATEGORY REMOVED
========================================================= */

function getStatus (item) {
  return localStorage.getItem(`status_${item.id}`) || '0'
}

/* =========================================================
   GET ALL GRAMMAR
========================================================= */

function getAllGrammar () {
  const output = []

  Object.entries(courseData).forEach(([weekKey, weekData]) => {
    Object.entries(weekData.days).forEach(([dayKey, dayData]) => {
      if (!Array.isArray(dayData.grammar)) {
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

  return output
}

/* =========================================================
   WEEK SELECT
========================================================= */

function populateWeekSelect () {
  weekSelect.innerHTML = ''

  for (let week = 1; week <= 8; week++) {
    const option = document.createElement('option')

    option.value = `week${week}`

    option.textContent = `Minggu ${week}`

    weekSelect.appendChild(option)
  }

  weekSelect.value = activeWeek
}

/* =========================================================
   DAY SELECT
========================================================= */

function populateDaySelect () {
  daySelect.innerHTML = ''

  for (let day = 1; day <= 7; day++) {
    const option = document.createElement('option')

    option.value = `day${day}`

    option.textContent = day === 7 ? 'Hari 7 — Full Exam' : `Hari ${day}`

    daySelect.appendChild(option)
  }

  daySelect.value = activeDay
}

/* =========================================================
   GET FILTERED
========================================================= */

function getFilteredItems () {
  let items

  /*
        Search = GLOBAL
    */

  if (currentSearch) {
    items = getAllGrammar().filter(item => matchesSearch(item, currentSearch))
  } else {
    const day = courseData[activeWeek]?.days[activeDay]

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
   SEARCH
========================================================= */

function matchesSearch (item, query) {
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

    item.explanation,

    item.explanationJP,

    ...(item.examples || [])
  ]
    .map(value => stripHTML(value || ''))
    .join(' ')
    .toLowerCase()

  return text.includes(query)
}

/* =========================================================
   TRANSLATION
========================================================= */

/*
    Translation cache.

    Menggunakan MyMemory sebagai fallback
    untuk terjemahan otomatis Jepang -> Indonesia
    / Indonesia -> Jepang.

    Cache disimpan supaya tidak request terus.
*/

const translationCacheKey = 'n1_translation_cache'

function getTranslationCache () {
  try {
    return JSON.parse(localStorage.getItem(translationCacheKey) || '{}')
  } catch {
    return {}
  }
}

function saveTranslationCache (cache) {
  try {
    localStorage.setItem(translationCacheKey, JSON.stringify(cache))
  } catch {
    /*
            Ignore localStorage quota
        */
  }
}

async function translateText (text, from = 'ja', to = 'id') {
  const clean = stripHTML(text)

  if (!clean) {
    return ''
  }

  const cache = getTranslationCache()

  const cacheKey = `${from}_${to}_${clean}`

  if (cache[cacheKey]) {
    return cache[cacheKey]
  }

  try {
    const url =
      'https://api.mymemory.translated.net/get' +
      `?q=${encodeURIComponent(clean)}` +
      `&langpair=${encodeURIComponent(from)}` +
      `|${encodeURIComponent(to)}`

    const response = await fetch(url, {
      method: 'GET'
    })

    if (!response.ok) {
      throw new Error('Translation request failed')
    }

    const data = await response.json()

    const result = data?.responseData?.translatedText

    if (!result) {
      throw new Error('No translation returned')
    }

    cache[cacheKey] = result

    saveTranslationCache(cache)

    return result
  } catch (error) {
    console.warn('Translation error:', error)

    return ''
  }
}

/* =========================================================
   EASY JAPANESE EXPLANATION
========================================================= */

/*
    Prioritas:
    1. explanationJP jika data sudah menyediakannya.
    2. Terjemahkan explanation Indonesia -> Jepang.
    3. Jika gagal, tampilkan explanation Indonesia
       sebagai fallback.

    Jadi data lama tetap kompatibel.
*/

async function getEasyJapaneseExplanation (item) {
  if (item.explanationJP) {
    return stripHTML(item.explanationJP)
  }

  if (item.explanation) {
    const translated = await translateText(item.explanation, 'id', 'ja')

    if (translated) {
      return translated
    }
  }

  return ''
}

/* =========================================================
   TTS QUEUE
========================================================= */

async function buildSpeechQueue (item) {
  const queue = []

  /*
        JAPANESE ONLY.

        Meaning Indonesian tidak dibacakan.
        Explanation juga dibacakan dalam Jepang.
    */

  if (item.rule) {
    queue.push({
      text: `文法 ${stripHTML(item.rule)}`,
      type: 'jp'
    })
  }

  if (item.reading) {
    queue.push({
      text: stripHTML(item.reading),
      type: 'jp'
    })
  }

  const explanationJP = await getEasyJapaneseExplanation(item)

  if (explanationJP) {
    queue.push({
      text: `簡単な説明。${explanationJP}`,

      type: 'jp'
    })
  }

  /*
        Examples
    */

  if (Array.isArray(item.examples)) {
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

/* =========================================================
   START TTS
========================================================= */

async function startSpeech (item) {
  if (!('speechSynthesis' in window)) {
    alert('Browser ini tidak mendukung Text to Speech.')

    return
  }

  stopSpeech()

  currentSpeakingItem = item

  speakingCardId = String(item.id)

  updateSpeechButtons()

  speechQueue = await buildSpeechQueue(item)

  speechIndex = 0

  speechPaused = false

  /*
        Translation may take a moment,
        then start Japanese speech.
    */

  speakCurrentChunk()
}

/* =========================================================
   SPEAK CURRENT
========================================================= */

function speakCurrentChunk () {
  if (!speechQueue.length) {
    stopSpeech()

    return
  }

  if (speechIndex >= speechQueue.length) {
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
    updateSpeechButtons()
  }

  utterance.onend = () => {
    speechIndex++

    if (speakingCardId !== null) {
      speakCurrentChunk()
    }
  }

  utterance.onerror = event => {
    console.warn('TTS error:', event.error)

    stopSpeech()
  }

  window.speechSynthesis.speak(utterance)
}

/* =========================================================
   PAUSE / RESUME
========================================================= */

window.togglePauseSpeech = function () {
  if (!('speechSynthesis' in window)) {
    return
  }

  if (speakingCardId === null) {
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

/* =========================================================
   REPLAY
========================================================= */

window.replaySpeech = function () {
  if (!currentSpeakingItem) {
    return
  }

  startSpeech(currentSpeakingItem)
}

/* =========================================================
   STOP
========================================================= */

window.stopSpeech = function () {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }

  speakingCardId = null

  speechQueue = []

  speechIndex = 0

  speechPaused = false

  currentSpeakingItem = null

  updateSpeechButtons()
}

/* =========================================================
   SPEECH UI
========================================================= */

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

    if (active) {
      status.textContent = speechPaused
        ? 'Dijeda'
        : 'Sedang membaca bahasa Jepang...'

      if (play) {
        play.innerHTML = `<i class="bi bi-stop-fill"></i>`
      }

      if (pause) {
        pause.innerHTML = speechPaused
          ? `<i class="bi bi-play-fill"></i>`
          : `<i class="bi bi-pause-fill"></i>`
      }
    } else {
      status.textContent = 'TTS Jepang siap'

      if (play) {
        play.innerHTML = `<i class="bi bi-play-fill"></i>`
      }

      if (pause) {
        pause.innerHTML = `<i class="bi bi-pause-fill"></i>`
      }
    }
  })
}

/* =========================================================
   MAIN SPEECH
========================================================= */

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
  return getAllGrammar().find(item => String(item.id) === String(id))
}

/* =========================================================
   CARD HTML
========================================================= */

function createCardHTML (item, index) {
  const savedStatus = getStatus(item)

  const examples = Array.isArray(item.examples) ? item.examples : []

  const examplesHTML = examples
    .map(
      example => `
                    <div class="example-box">

                        <i class="bi bi-caret-right-fill"></i>

                        <span>
                            ${example}
                        </span>

                    </div>
                `
    )
    .join('')

  const reading = item.reading || item.yomi || item.furigana || ''

  const moduleText =
    item.module ||
    item.lesson ||
    `M${String(item._week).replace('week', '')} - H${String(item._day).replace(
      'day',
      ''
    )}`

  /*
        Initial explanation:
        original data.
        Japanese translation loads async.
    */

  const originalExplanation = item.explanation || ''

  return `

        <article
            class="grammar-card"
            data-id="${escapeHTML(item.id)}"
            style="animation-delay:${index * 0.045}s"
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

                    <span class="lang-id">
                        ${item.meaning?.id || ''}
                    </span>

                    <span class="lang-en">
                        ${item.meaning?.en || ''}
                    </span>

                    <span class="lang-cn">
                        ${item.meaning?.cn || ''}
                    </span>

                </div>


                <button
                    class="speaker-main-btn"
                    type="button"
                    onclick="
                        handleMainSpeech(
                            '${escapeForJS(item.id)}'
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

                        Arti Indonesia

                    </div>


                    <div class="info-text">

                        <span class="lang-id">
                            ${item.meaning?.id || '-'}
                        </span>

                        <span class="lang-en">
                            ${item.meaning?.en || '-'}
                        </span>

                        <span class="lang-cn">
                            ${item.meaning?.cn || '-'}
                        </span>

                    </div>

                </div>



                <div class="info-block">

                    <div class="info-label">

                        <i class="bi bi-translate"></i>

                        Penjelasan

                    </div>


                    <div
                        class="easy-japanese"
                        data-translation-id="${escapeHTML(item.id)}"
                    >

                        <span class="jp-label">

                            やさしい日本語

                        </span>


                        <span
                            class="jp-explanation"
                        >

                            Menerjemahkan...

                        </span>

                    </div>


                    <div
                        class="translation-box"
                        data-translation-id="${escapeHTML(item.id)}"
                    >

                        <div class="translation-label">

                            <i class="bi bi-globe2"></i>

                            Bahasa Indonesia

                        </div>


                        <span class="id-explanation">

                            ${originalExplanation || '—'}

                        </span>

                    </div>

                </div>



                <div class="info-block examples">

                    <div class="info-label">

                        <i class="bi bi-chat-square-text-fill"></i>

                        Contoh Kalimat

                    </div>


                    ${
                      examplesHTML ||
                      `
                        <div class="example-box">

                            <i class="bi bi-dash-circle"></i>

                            <span>
                                Belum ada contoh.
                            </span>

                        </div>
                        `
                    }

                </div>


            </div>



            <!-- TTS -->

            <div class="tts-toolbar">


                <div class="tts-status">
                    TTS Jepang siap
                </div>


                <button
                    class="tts-btn tts-play"
                    type="button"
                    onclick="
                        handleMainSpeech(
                            '${escapeForJS(item.id)}'
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



            <!-- Status -->

            <div class="card-footer">


                <button
                    class="
                        status-btn
                        btn-0
                        ${savedStatus === '0' ? 'active' : ''}
                    "
                    type="button"
                    onclick="
                        updateStatus(
                            '${escapeForJS(item.id)}',
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
                        ${savedStatus === '1' ? 'active' : ''}
                    "
                    type="button"
                    onclick="
                        updateStatus(
                            '${escapeForJS(item.id)}',
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
                        ${savedStatus === '2' ? 'active' : ''}
                    "
                    type="button"
                    onclick="
                        updateStatus(
                            '${escapeForJS(item.id)}',
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
   LOAD JAPANESE EXPLANATIONS
========================================================= */

async function loadCardTranslations (items) {
  await Promise.all(
    items.map(async item => {
      const easyJapanese = document.querySelector(
        `.easy-japanese[data-translation-id="${CSS.escape(String(item.id))}"]`
      )

      if (!easyJapanese) {
        return
      }

      const target = easyJapanese.querySelector('.jp-explanation')

      if (!target) {
        return
      }

      /*
                    Existing manually supplied Japanese
                */

      if (item.explanationJP) {
        target.textContent = stripHTML(item.explanationJP)

        return
      }

      /*
                    Translate current explanation.
                */

      if (!item.explanation) {
        target.textContent = '説明はありません。'

        return
      }

      target.textContent = '翻訳中...'

      const translated = await getEasyJapaneseExplanation(item)

      target.textContent = translated || '説明を読み込めませんでした。'
    })
  )
}

/* =========================================================
   RENDER CARDS
========================================================= */

async function renderCards () {
  stopSpeech()

  /*
       Day 7 = no grammar cards.
    */

  if (activeDay === 'day7' && !currentSearch) {
    grammarCards.innerHTML = ''

    grammarCards.classList.add('hidden')

    emptyState.classList.add('hidden')

    resultCounter.textContent = 'Full Exam'

    updateProgress([])

    return
  }

  grammarCards.classList.remove('hidden')

  const items = getFilteredItems()

  grammarCards.innerHTML = ''

  emptyState.classList.toggle('hidden', items.length !== 0)

  resultCounter.textContent = `${items.length} materi`

  if (!items.length) {
    updateProgress([])

    return
  }

  items.forEach((item, index) => {
    grammarCards.insertAdjacentHTML('beforeend', createCardHTML(item, index))
  })

  updateProgress(items)

  /*
        Automatic easy Japanese translation.
    */

  loadCardTranslations(items)
}

/* =========================================================
   PROGRESS
========================================================= */

function updateProgress (items) {
  if (!items.length) {
    progressPercent.textContent = '0%'

    progressBarFill.style.width = '0%'

    return
  }

  const mastered = items.filter(item => getStatus(item) === '2').length

  const percentage = Math.round((mastered / items.length) * 100)

  progressPercent.textContent = `${percentage}%`

  progressBarFill.style.width = `${percentage}%`
}

/* =========================================================
   HEADER
========================================================= */

function updateContentHeader () {
  if (currentSearch) {
    weekTitle.textContent = 'Hasil Pencarian'

    dayTitle.textContent = `Menemukan materi untuk "${currentSearch}"`

    return
  }

  const week = courseData[activeWeek]

  const day = week?.days[activeDay]

  weekTitle.textContent =
    activeDay === 'day7'
      ? `${week?.title || ''}`
      : week?.title || 'Materi JLPT N1'

  dayTitle.textContent = day?.title || ''
}

/* =========================================================
   FILTER LABEL
========================================================= */

function updateFilterLabel () {
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
   EXAM
========================================================= */

function renderExam (examData) {
  /*
       Search mode = hide exam.
    */

  if (currentSearch) {
    miniExam.classList.add('hidden')

    return
  }

  /*
       No exam.
    */

  if (!examData) {
    miniExam.classList.add('hidden')

    return
  }

  miniExam.classList.remove('hidden')

  /*
       Existing W1H7 data:
       exam = HTML string
    */

  if (typeof examData === 'string') {
    examContent.innerHTML = examData

    initializeHTMLExam()

    return
  }

  /*
       Object exam support.
    */

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
}

/* =========================================================
   HTML EXAM
========================================================= */

function initializeHTMLExam () {
  const buttons = examContent.querySelectorAll('.exam-btn')

  buttons.forEach((button, index) => {
    button.dataset.examOption = String(index + 1)

    /*
                Better animation delay.
            */

    button.style.animationDelay = `${index * 0.015}s`
  })

  const paragraphs = examContent.querySelectorAll('.exam-q')

  paragraphs.forEach((question, index) => {
    question.style.animationDelay = `${index * 0.035}s`
  })

  updateExamProgress()
}

/* =========================================================
   OBJECT EXAM
========================================================= */

let examAnswers = {}

function renderObjectExam (examData) {
  examAnswers = {}

  let html = `<div class="exam-container">`

  examData.questions.forEach((question, index) => {
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

    question.options.forEach((option, optionIndex) => {
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
    })

    html += `

                    </div>


                    <div
                        class="exam-feedback"
                        id="exam-feedback-${index}"
                    ></div>

                </div>

            `
  })

  html += `

<button
    class="exam-submit"
    type="button"
    onclick="finishObjectExam()"
    style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #1677ff, #0958d9); color: #ffffff; border: none; border-radius: 8px; padding: 12px 24px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3); transition: all 0.2s ease-in-out;"
    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(22, 119, 255, 0.4)';"
    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(22, 119, 255, 0.3)';"
>
    <i class="bi bi-send-check" style="font-size: 18px;"></i>
    Selesai & Lihat Skor
</button>


        <div
            id="objectExamResult"
            class="exam-result hidden"
        ></div>


        </div>

    `

  examContent.innerHTML = html

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

  examAnswers[questionIndex] = optionIndex

  const parent = button.parentElement

  const buttons = parent.querySelectorAll('button')

  buttons.forEach(btn => (btn.disabled = true))

  const question = window.currentObjectExam?.questions[questionIndex]

  if (!question) {
    return
  }

  if (optionIndex === question.correct) {
    button.style.background = 'var(--success)'

    button.style.color = 'white'

    document.getElementById(`exam-feedback-${questionIndex}`).innerHTML = `
                <span
                    style="color:var(--success)"
                >
                    <i class="bi bi-check-circle-fill"></i>
                    Benar!
                </span>
                `
  } else {
    button.style.background = 'var(--danger)'

    button.style.color = 'white'

    if (buttons[question.correct]) {
      buttons[question.correct].style.background = 'var(--success)'

      buttons[question.correct].style.color = 'white'
    }

    document.getElementById(`exam-feedback-${questionIndex}`).innerHTML = `
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
   FINISH OBJECT EXAM
========================================================= */

window.finishObjectExam = function () {
  const exam = window.currentObjectExam

  if (!exam) {
    return
  }

  if (Object.keys(examAnswers).length < exam.questions.length) {
    alert('Jawab semua pertanyaan terlebih dahulu.')

    return
  }

  let score = 0

  exam.questions.forEach((question, index) => {
    if (examAnswers[index] === question.correct) {
      score++
    }
  })

  const percentage = Math.round((score / exam.questions.length) * 100)

  const result = document.getElementById('objectExamResult')

  result.classList.remove('hidden')

  result.innerHTML = `
            <i class="bi bi-trophy-fill"></i>
            Skor:
            ${score}/${exam.questions.length}
            (${percentage}%)
            <br>
            ${
              percentage >= 70 ? 'よくできました！' : 'もう一度復習しましょう。'
            }
            `
}

/* =========================================================
   EXAM PROGRESS
========================================================= */

function updateExamProgress () {
  const questionBlocks = examContent.querySelectorAll('.exam-q')

  /*
       Existing HTML exam has buttons,
       but answer state is inside onclick alerts.
       We cannot reliably know user choice from raw HTML.
    */

  if (window.currentObjectExam && questionBlocks.length) {
    const total = questionBlocks.length

    const answered = Object.keys(examAnswers).length

    const percentage = Math.round((answered / total) * 100)

    examAnswered.textContent = `${percentage}%`

    examProgressFill.style.width = `${percentage}%`

    return
  }

  examAnswered.textContent = '25 Soal'

  examProgressFill.style.width = '0%'
}

/* =========================================================
   STATUS UPDATE
========================================================= */

window.updateStatus = function (id, status, button) {
  localStorage.setItem(`status_${id}`, status)

  button.parentElement
    .querySelectorAll('.status-btn')
    .forEach(btn => btn.classList.remove('active'))

  button.classList.add('active')

  updateProgress(getFilteredItems())
}

/* =========================================================
   SEARCH INPUT
========================================================= */

searchInput.addEventListener('input', event => {
  currentSearch = event.target.value.trim().toLowerCase()

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(courseData[activeWeek]?.days[activeDay]?.exam)
})

/* =========================================================
   WEEK CHANGE
========================================================= */

weekSelect.addEventListener('change', event => {
  activeWeek = event.target.value

  activeDay = 'day1'

  currentSearch = ''

  searchInput.value = ''

  daySelect.value = activeDay

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(courseData[activeWeek]?.days[activeDay]?.exam)
})

/* =========================================================
   DAY CHANGE
========================================================= */

daySelect.addEventListener('change', event => {
  activeDay = event.target.value

  currentSearch = ''

  searchInput.value = ''

  /*
            Hari 7:
            hide grammar and show exam.
        */

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(courseData[activeWeek]?.days[activeDay]?.exam)
})

/* =========================================================
   STATUS
========================================================= */

statusSelect.addEventListener('change', event => {
  currentStatus = event.target.value

  /*
            Day 7 doesn't use grammar status.
        */

  if (activeDay === 'day7' && !currentSearch) {
    return
  }

  renderCards()
})

/* =========================================================
   RESET
========================================================= */

function resetFilters () {
  currentSearch = ''

  currentStatus = 'all'

  activeWeek = 'week1'

  activeDay = 'day1'

  searchInput.value = ''

  statusSelect.value = 'all'

  weekSelect.value = 'week1'

  daySelect.value = 'day1'

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(courseData.week1?.days.day1?.exam)
}

resetFiltersBtn.addEventListener('click', resetFilters)

emptyResetBtn.addEventListener('click', resetFilters)

/* =========================================================
   CTRL + K
========================================================= */

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()

    searchInput.focus()
  }
})

/* =========================================================
   SPACE = PAUSE
========================================================= */

document.addEventListener('keydown', event => {
  if (event.code !== 'Space') {
    return
  }

  if (
    event.target.tagName === 'INPUT' ||
    event.target.tagName === 'TEXTAREA' ||
    event.target.tagName === 'SELECT'
  ) {
    return
  }

  if (speakingCardId !== null) {
    event.preventDefault()

    togglePauseSpeech()
  }
})

/* =========================================================
   MEMO MODE
========================================================= */

memoToggle.addEventListener('click', () => {
  memoMode = !memoMode

  document.body.classList.toggle('memo-mode', memoMode)

  memoToggle.classList.toggle('active', memoMode)

  memoToggle.innerHTML = memoMode
    ? `<i class="bi bi-eye-slash-fill"></i>`
    : `<i class="bi bi-eye"></i>`
})

/* =========================================================
   DARK MODE
========================================================= */

themeToggle.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark-mode')

  themeToggle.innerHTML = dark
    ? `<i class="bi bi-sun-fill"></i>`
    : `<i class="bi bi-moon-stars-fill"></i>`

  localStorage.setItem('n1_dark_mode', dark ? '1' : '0')
})

/* saved dark mode */

if (localStorage.getItem('n1_dark_mode') === '1') {
  document.body.classList.add('dark-mode')

  themeToggle.innerHTML = `<i class="bi bi-sun-fill"></i>`
}

/* =========================================================
   LANGUAGE
========================================================= */

langToggleBtn.addEventListener('click', event => {
  event.stopPropagation()

  languageMenu.classList.toggle('hidden')
})

document.querySelectorAll('#languageMenu button').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang

    document.body.className = document.body.className.replace(
      /lang-show-\w+/g,
      ''
    )

    document.body.classList.add(`lang-show-${lang}`)

    languageMenu.classList.add('hidden')
  })
})

document.addEventListener('click', event => {
  if (!languageMenu.contains(event.target) && event.target !== langToggleBtn) {
    languageMenu.classList.add('hidden')
  }
})

/* =========================================================
   TIME
========================================================= */

function getTimePeriod (hour) {
  /*
        00:00 - 02:59
        Larut malam

        03:00 - 04:59
        Shubuh

        05:00 - 09:59
        Pagi

        10:00 - 14:59
        Siang

        15:00 - 17:59
        Sore

        18:00 - 22:59
        Malam

        23:00 - 23:59
        Tengah malam
    */

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
   GREETING
========================================================= */

function updateTimeAndGreeting () {
  const now = new Date()

  const hour = now.getHours()

  const minute = now.getMinutes()

  const second = now.getSeconds()

  const period = getTimePeriod(hour)

  /*
        Theme
    */

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

  /*
        Clock
    */

  liveClock.textContent = [hour, minute, second]
    .map(value => String(value).padStart(2, '0'))
    .join(':')

  /*
        Greeting
    */

  const data = {
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

  const greeting = data[period]

  greetingLabel.textContent = greeting.label

  greetingJapanese.textContent = greeting.japanese

  greetingMessage.textContent = greeting.message

  greetingIcon.className = `bi ${greeting.icon}`

  timePeriodText.textContent = greeting.period

  /*
        Update browser theme color
    */

  const root = getComputedStyle(document.body)

  const primary = root.getPropertyValue('--primary')

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', primary.trim())
}

/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener('visibilitychange', () => {
  if (document.hidden && speakingCardId !== null) {
    /*
                Jangan stop otomatis.
                Browser dapat mempertahankan
                TTS saat tab tidak aktif.
            */
  }
})

/* =========================================================
   BEFORE UNLOAD
========================================================= */

window.addEventListener('beforeunload', () => {
  stopSpeech()
})

/* =========================================================
   INIT
========================================================= */

function init () {
  populateWeekSelect()

  populateDaySelect()

  weekSelect.value = activeWeek

  daySelect.value = activeDay

  updateContentHeader()

  updateFilterLabel()

  renderCards()

  renderExam(courseData.week1?.days.day1?.exam)

  updateTimeAndGreeting()

  setInterval(updateTimeAndGreeting, 1000)
}

/* Start */

init()
