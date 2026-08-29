window.W6H2 = {
  title: '2日目 冗談のつもりで',
  grammar: [
    {
      id: 'w6_d2_1',
      rule: '〜のつもりで',
      formal: false,
      explanation: '(= 冗談という気持ちで / 事実は違うというの意味)',
      meaning: {
        id: 'Dengan maksud / merasa seolah-olah...',
        en: 'With the intention of / feeling as if...',
        cn: '抱着...的心情 / 当作...样'
      },
      examples: [
        '冗談のつもりで言ったのに、本気にされてしまった。',
        'カラオケでは、いつも歌手になったつもりで歌っている。',
        '自分では若いつもりだが、年には勝てません。'
      ]
    },
    {
      id: 'w6_d2_2',
      rule: '〜されるままに / 〜するままに',
      formal: false,
      explanation: '(= 言われる通りに / 他人の意志のとおりという意味)',
      meaning: {
        id: 'Sebagaimana / menuruti apa adanya...',
        en: 'As one is told / leaving things as they are...',
        cn: '任凭... / 随...之便'
      },
      examples: [
        '契約のとき、言われるままにハンコを押している人が多い。',
        'ゆうべは同僚に誘われるままに飲みに行った。',
        'あなたが思うまま、話してください。'
      ]
    },
    {
      id: 'w6_d2_3',
      rule: '〜ずとも',
      formal: true,
      explanation: '(= しない・せず)',
      meaning: {
        id: 'Tanpa harus... pun...',
        en: 'Even without doing...',
        cn: '不...也... / 即使不...也...'
      },
      examples: [
        '彼があなたのことを好きだということは、言わずともわかる。'
      ]
    },
    {
      id: 'w6_d2_4',
      rule: '〜ずじまい',
      formal: false,
      explanation: '(= しないままだ / 残念な気持ち)',
      meaning: {
        id: 'Berakhir tanpa sempat (melakukan sesuatu)...',
        en: 'Ended up not doing...',
        cn: '终究没能... / 终于没有...'
      },
      examples: [
        '英語の本をたくさん買ったが、ほとんど読まずじまいだ。',
        '5着も試着したが、どれも気に入らず、買わずじまいで店を出た。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '忙しかったので、あとでお昼を食べようと思っていたが、結局、食べず（ａ．まま ｂ．じまい）で、夕食の時間になった。',
        options: ['まま', 'じまい'],
        correct: 1
      },
      {
        question: '感想を思う（ａ．ままに ｂ．つもりで）アンケートに書いてください。',
        options: ['ままに', 'つもりで'],
        correct: 0
      },
      {
        question: '彼は目が見えず（ａ．とも ｂ．じまいでお）すばらしい演奏をして、観客に感動を与えた。',
        options: ['とも', 'じまいで'],
        correct: 0
      },
      {
        question: '店員に勧められる（ａ．つもりで ｂ．ままに）、高いテレビを買ってしまった。',
        options: ['つもりで', 'ままに'],
        correct: 1
      },
      {
        question: '待ち合わせ場所を間違えたらしく、結局彼女とは（ａ．会えず ｂ．会えない）じまいだった。',
        options: ['会えず', '会えない'],
        correct: 0
      },
      {
        question: '検査の結果を医師にもう少し詳しく ___ ___ ___ ___ 診察室を後にした。',
        options: ['1 促されるまま', '2 と思いながらも', '3 看護師に', '4 聞こう'],
        correct: '3-1-2-4'
      },
      {
        question: '___ ___ ___ ___ 飲み来てしまった。',
        options: ['1 早く帰るつもりで', '2 いたのに', '3 誘われるまま', '4 今日こそは'],
        correct: '4-2-3-1'
      }
    ]
  }
};