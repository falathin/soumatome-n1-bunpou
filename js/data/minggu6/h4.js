
window.W6H4 = {
  title: '4日目 貧しさゆえに',
  grammar: [
    {
      id: 'w6_d4_1',
      rule: '〜ゆえに / 〜ゆえのN',
      formal: true,
      explanation: '(= 貧しいという理由で / 知らなかっただけの理由で / 有名人であるための)',
      meaning: {
        id: 'Oleh karena / karena...',
        en: 'Because of / due to...',
        cn: '因为... / 由于...'
      },
      examples: [
        '貧しさゆえに、彼は盗みを働いた。',
        '日本語を知らなかったゆえに、誤解された。',
        '有名人ゆえの悩みがある。'
      ]
    },
    {
      id: 'w6_d4_2',
      rule: '〜んがために / 〜んがためのN',
      formal: true,
      explanation: '(= もうけるために / 救うために - 強い意志を表す)',
      meaning: {
        id: 'Demi untuk (tujuan tertentu)...',
        en: 'In order to...',
        cn: '为了...'
      },
      examples: [
        '彼は金をもうけんがために、ずいぶんひどいことをやってきた。',
        '一人の青年がおぼれている子どもを救わんがために、川に飛び込んだ。'
      ]
    },
    {
      id: 'w6_d4_3',
      rule: '〜んばかりだ / 〜んばかりのN',
      formal: true,
      explanation: '(= 今にもあふれそうな状態に / 今にも泣き出しそうな顔)',
      meaning: {
        id: 'Hampir seolah-olah / seakan-akan mau...',
        en: 'As if to / on the verge of...',
        cn: '几乎要... / 简直要...'
      },
      examples: [
        '川の水があふれんばかりになっている。',
        '彼女は泣き出しんばかりの顔をして、私に助けを求めてきた。'
      ]
    },
    {
      id: 'w6_d4_4',
      rule: '〜とばかりに',
      formal: true,
      explanation: '(= 言葉では言わないがそのような様子で / N = 表情、様子、調子、態度、口調、目つきなど)',
      meaning: {
        id: 'Seolah-olah berkata / bersikap seakan...',
        en: 'As if to say...',
        cn: '好象在说...似地'
      },
      examples: [
        'その子はうれしいとばかりに、飛び上がった。',
        '彼は試験中、あきらめたとばかりに鉛筆を投げ出した。',
        '彼女は「いやだ」と言わんばかりに、首を振った。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '心を込めて作った料理なのに、子どもたちはまずい（ａ．とばかりに ｂ．ばかりか）顔をゆがめた。',
        options: ['とばかりに', 'ばかりか'],
        correct: 0
      },
      {
        question: 'うちの犬は僕を見ると（ａ．飛びついたと ｂ．飛びつかん）ばかりの勢いで走ってきた。',
        options: ['飛びついたと', '飛びつかん'],
        correct: 1
      },
      {
        question: '彼女は疲れた（ａ．とばかりに ｂ．ゆえに）、部屋に入るなりベッドに倒れ込んだ。',
        options: ['とばかりに', 'ゆえに'],
        correct: 1
      },
      {
        question: '彼は技術を極めん（ａ．がために ｂ．ばかりに）夜も眠らずに努力している。',
        options: ['がために', 'ばかりに'],
        correct: 0
      },
      {
        question: 'その病気に関する人々の知識のなさ（ａ．ゆえに ｂ．とばかりに）、彼らは迫害された。',
        options: ['ゆえに', 'とばかりに'],
        correct: 0
      },
      {
        question: 'その国の ___ ___ ___ ___ 接し、私の人生観は変わった。',
        options: ['1 笑顔に', '2 子どもたちに', '3 満ちた', '4 あふれんばかりの'],
        correct: '4-3-2-1'
      },
      {
        question: '彼は重い罪を犯したが、事件当時、判断力が ___ ___ ___ ___ 社会に復帰することができた。',
        options: ['1 乏しかった', '2 ことから', '3 未熟だった', '4 という理由で'],
        correct: '3-2-1-4' // Note: using closest mapping from provided options pattern in source image/data
      }
    ]
  }
};
