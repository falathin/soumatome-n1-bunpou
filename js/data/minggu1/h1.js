window.W1H1 = {
  title: '1日目 感謝こそすれ',
  grammar: [
    {
      id: 'w1_d1_1',
      rule: '〜てこそ',
      formal: false,
      explanation: '(= Vて はじめて) 過去のことには使えない。',
      meaning: {
        id: 'Hanya setelah (melakukan sesuatu), barulah bisa...',
        en: 'Only after doing... can one...',
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
      explanation: '(= 〜はあるけれど) Nこそあれ / naでこそあれ',
      meaning: {
        id: 'Meskipun ada / walaupun...',
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
      explanation:
        '(= 〜はしているけれど、絶対に〜ない) 後文が「絶対〜ではない」という強調。',
      meaning: {
        id: 'Sama sekali tidak... yang ada justru...',
        en: 'May do..., but definitely not...',
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
      explanation: 'Nこそ [〜が… / 〜けれど…]',
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
        question: '君のやったことは、___ ___ ___ ___ ではない。',
        options: ['1 非難される', '2 すれ', '3 ほめられこそ', '4 もの'],
        correct: '3-2-1-4'
      },
      {
        question: 'その2つの ___ ___ ___ ___ 中身に大きな違いはない。',
        options: ['1 製品は', '2 名前', '3 違うが', '4 こそ'],
        correct: '1-2-4-3'
      }
    ]
  }
};