window.W3H2 = {
  title: '2日目 今日を限りに',
  grammar: [
    {
      id: 'w3_d2_1',
      rule: '〜限りだ',
      formal: false,
      explanation: '(= とても〜だ) 感情を表す形容詞につく。',
      meaning: {
        id: 'Sangat... (perasaan ekstrem)',
        en: 'I feel extremely...',
        cn: '非常... / 极度...'
      },
      examples: [
        'いとこの結婚式に出られないとは、残念な限りだ。',
        '年を取って、お金もなく、家族もいないのは、心細い限りです。'
      ]
    },
    {
      id: 'w3_d2_2',
      rule: '〜を限りに / 〜限りで',
      formal: false,
      explanation: '(= 〜を最後にして / 〜を限度として)',
      meaning: {
        id: 'Menjadikan... sebagai yang terakhir / Sepanjang (suara/tenaga)',
        en: 'Starting from... (as the last time) / To the limit of...',
        cn: '以...为最后 / 竭尽...'
      },
      examples: [
        '今日を限りに甘いものをやめることにした。',
        '３月限りでこのクラスはなくなります。',
        '彼は声を限りに助けを求めた。'
      ]
    },
    {
      id: 'w3_d2_3',
      rule: '〜に限る',
      formal: false,
      explanation: '(= 〜が一番だ)',
      meaning: {
        id: '... adalah yang terbaik',
        en: 'Nothing is better than... / ... is the best',
        cn: '最好是... / ...是最好的'
      },
      examples: [
        '風邪を引いたときは、暖かくして寝るに限る。',
        '日本語学校を選ぶなら、この学校に限る。'
      ]
    },
    {
      id: 'w3_d2_4',
      rule: '〜に限ったことではない',
      formal: true,
      explanation: '(= 〜だけではない)',
      meaning: {
        id: 'Tidak hanya terbatas pada... (juga terjadi pada yang lain)',
        en: 'It is not limited to...',
        cn: '不仅仅局限于...'
      },
      examples: [
        '若者の言葉遣いが悪いのは、我が国に限ったことではない。',
        '夏にインフルエンザがはやったのは、今年に限ったことではなく、去年も同様だった。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '応援していたチームが試合に負けてしまって残念（ ）。',
        options: ['な限りだ', 'に限る'],
        correct: 0
      },
      {
        question: '新築の家を買った。今月（ ）このマンションともお別れだ。',
        options: ['を限りに', 'に限り'],
        correct: 0
      },
      {
        question: '風邪をひいたときは、薬など飲むよりゆっくり寝る（ ）。',
        options: ['に限る', '限りだ'],
        correct: 0
      },
      {
        question: '朝の電車が混んでいるのは、今日に（ ）ことではない。',
        options: ['限る', '限った'],
        correct: 1
      },
      {
        question: '宝くじに当たったなんて、なんともうらやましい（ ）。',
        options: ['限ったことではない', '限りだ'],
        correct: 1
      },
      {
        question: 'そのドラマは、視聴率が ___ ___ ___ ___ 打ち切られることになった。',
        options: ['1 を限り', '2 に', '3 伸びず', '4 10回目'],
        correct: '3-4-1-2'
      },
      {
        question: '漢字が書けなくなったのは、___ ___ ___ ___ なってからずっとだ。',
        options: ['1 コンピューターを使うように', '2 最近', '3 ではなく', '4 に限ったこと'],
        correct: '2-4-3-1'
      }
    ]
  }
};
