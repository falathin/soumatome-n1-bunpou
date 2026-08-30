window.W1H1 = {
  title: '1日目 感謝こそすれ',
  grammar: [
    {
      id: 'w1_d1_1',
      rule: '〜てこそ',
      formal: false,
      conjunction: 'V-て + こそ',
      explanation:
        '【ID】Hanya setelah melakukan X, barulah Y terwujud/dipahami. Tidak untuk masa lalu.\n【EN】Only after doing X does Y become possible.\n【JP】〜して初めて、本当の価値や効果がわかる。',
      meaning: {
        id: 'Hanya setelah (melakukan sesuatu), barulah bisa...',
        en: 'Only after doing...',
        cn: '只有...才能...'
      },
      examples: [
        '親になってこそ、親の苦労や気持ちがわかるものだ。',
        '生活費を自分で稼いでこそ、自立していると言える。',
        '大きな失敗をしてこそ、人は成長できるのだ。'
      ]
    },
    {
      id: 'w1_d1_2',
      rule: '〜こそあれ',
      formal: true,
      conjunction: 'N + こそあれ / Na-で + こそあれ',
      explanation:
        '【ID】Meskipun ada kekurangan X, tidak mengubah kenyataan/penilaian utama Y.\n【EN】Although there is X, main point Y remains unchanged.\n【JP】〜はあるけれど、本質や評価には影響がない。',
      meaning: {
        id: 'Meskipun ada X, tetapi (hal utamanya tetap Y)...',
        en: 'Although there is...',
        cn: '虽然有...但是...'
      },
      examples: [
        '苦労こそあれ、介護の仕事はやりがいがある。',
        '彼の日本語は小さい間違いこそあれ、ほとんど完璧だ。',
        '古さこそあれ、この家はとても頑丈で住みやすい。'
      ]
    },
    {
      id: 'w1_d1_3',
      rule: '〜こそすれ',
      formal: true,
      conjunction: 'V-ます(buang masu) + こそすれ / N + こそすれ',
      explanation:
        '【ID】Mungkin/pasti melakukan X, tetapi SAMA SEKALI TIDAK MUNGKIN Y (lawan katanya).\n【EN】May do X, but definitely not Y.\n【JP】〜することはあっても、絶対に逆のことはない。',
      meaning: {
        id: 'Yang ada justru X, dan sama sekali tidak Y...',
        en: 'May do X, but definitely not Y...',
        cn: '只有...绝不...'
      },
      examples: [
        'あなたには感謝こそすれ、恨んでなどいません。',
        '白髪はふつう増えこそすれ、減ることはない。',
        '彼女は笑いこそすれ、他人を怒ることは絶対にない。'
      ]
    },
    {
      id: 'w1_d1_4',
      rule: '〜こそ悪いが…',
      formal: false,
      conjunction: 'N + こそ + [ 悪いが… / 〜が… / 〜けれど… ]',
      explanation:
        '【ID】Memang buruk di aspek X, tetapi aspek utama lainnya sangat bagus.\n【EN】May be bad in terms of X, but other aspects are good.\n【JP】〜という側面は悪いが、他の重要な側面は素晴らしい。',
      meaning: {
        id: 'Memang buruk di aspek X, tetapi...',
        en: 'It may be bad in terms of X, but...',
        cn: '虽然...不好，但是...'
      },
      examples: [
        '父の料理は見ためこそ悪いが、とてもいい味をしている。',
        'このキノコは色と形こそきれいだが、毒があって食べることはできない。',
        '交通の便こそ悪いが、とても静かで環境のいい場所だ。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'その国で生活（ ）文化がわかるというものだ。',
        options: ['してこそ', 'したこそ'],
        correct: 0
      },
      {
        question: '程度の違いこそ（ ）、悪いことをしたのは皆同じだ。',
        options: ['あれ', 'すれ'],
        correct: 0
      },
      {
        question: '彼は字（ ）汚いが、いい文章を書く。',
        options: ['こそ', 'こそすれ'],
        correct: 0
      },
      {
        question: 'ここは、（ ）こそあれ、緑が多くていいところだ。',
        options: ['不便な', '不便で'],
        correct: 1
      },
      {
        question: '文章は理解（ ）意味がある。',
        options: ['こそされて', 'されてこそ'],
        correct: 1
      },
      {
        question: '君のやったことは、___ ___ ★ ___ ではない。',
        options: ['1 非難される', '2 すれ', '3 ほめられこそ', '4 もの'],
        correct: 0,
        fullSentence: '君のやったことは、【 3 ほめられこそ 】【 2 すれ 】【 1★ 非難される 】【 4 もの 】 ではない。'
      },
      {
        question: 'その2つの ___ ___ ★ ___ 中身に大きな違いはない。',
        options: ['1 製品は', '2 名前', '3 違うが', '4 こそ'],
        correct: 3,
        fullSentence: 'その2つの 【 1 製品は 】【 2 名前 】【 4★ こそ 】【 3 違うが 】 中身に大きな違いはない。'
      }
    ]
  }
};