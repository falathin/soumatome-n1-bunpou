
window.W2H2 = {
  title: '2日目 どんなに高かろうが',
  grammar: [
    {
      id: 'w2_d2_1',
      rule: '〜であれ〜であれ',
      formal: true,
      explanation: '(= 〜でも〜でもだれでも) N/naであれ【〜であれ〜であれ】 / だれであれ・どこであれ・何であれ',
      meaning: {
        id: 'Entah... entah... / Siapapun / Apapun...',
        en: 'Whether it be... or... / Whoever / Whatever',
        cn: '无论是...还是... / 无论是谁/什么...'
      },
      examples: [
        '先生であれ学生であれ、この規則には従わなければならない。',
        '彼がだれであれ、特別扱いするのはおかしい。'
      ]
    },
    {
      id: 'w2_d2_2',
      rule: '〜うと〜うと',
      formal: true,
      explanation: '(= 〜が〜っても〜が〜っても) 【〜うと〜うと / 〜うが〜うが】 Vよう / Aかろう / na/Nだろう / 〜だろうとなかろうと',
      meaning: {
        id: 'Walaupun... atau... / Terlepas dari apakah... atau...',
        en: 'Whether... or... / Come... or...',
        cn: '不管...还是... / 无论是...还是...'
      },
      examples: [
        '雨が降ろうと雪が降ろうと明日の集まりには必ず行くよ。',
        '私は肉だろうが魚だろうが、なんでも食べます。',
        '新品であろうと、中古であろうと、そんな型の古いパソコンは買うべきではないと思う。',
        '明日、時間があろうとなかろうと、連絡だけは入れてください。'
      ]
    },
    {
      id: 'w2_d2_3',
      rule: 'どんなに〜うが',
      formal: true,
      explanation: '(= どんなに〜ても) 疑問詞 ＋ Vよう/Aかろう/na/Nだろう ＋ が/とも',
      meaning: {
        id: 'Betapapun... / Bagaimanapun juga...',
        en: 'No matter how / what / who...',
        cn: '无论多么... / 不管怎么...'
      },
      examples: [
        '必要だから、どんなに高かろうがそれを買わなくてはいけない。',
        'あなたがどんなに謝ろうとも、今回は許さない。',
        'あなたが何歳であろうが関係ない。仕事ができればいい。',
        '私が何をしようが勝手だ。あなたに言う必要はない。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '彼は、（ ）かまわず電話をかけてくる。',
        options: ['朝だろうが夜中だろうが', '朝だろう夜中だろう'],
        correct: 0
      },
      {
        question: 'この部屋でどんなに（ ）、外からは何も聞こえません。',
        options: ['騒ごうとも', '騒ぐであれ'],
        correct: 0
      },
      {
        question: 'たとえ（ ）、明日の試合は予定どおり行います。',
        options: ['雨であろうと雪であろうと', '雨が降るが雪が降るが'],
        correct: 0
      },
      {
        question: 'どの大学（ ）、進学先が決まってほっとした。',
        options: ['であると', 'であれ'],
        correct: 1
      },
      {
        question: '（ ）君の自由だが、他人に迷惑をかけることは許されない。',
        options: ['何だろうが', '何をしようと'],
        correct: 1
      },
      {
        question: 'あの夫婦が ___ ___ ___ ___ 、子どもはかわいそうだと思う。',
        options: ['1 知った', '2 なろうが', '3 どう', '4 ことではないが'],
        correct: '3-2-1-4'
      },
      {
        question: '___ ___ ___ ___ には変わりはない。',
        options: ['1 なかろうと', '2 人を傷つけたこと', '3 故意', '4 であろうと'],
        correct: '3-4-1-2'
      }
    ]
  }
};
