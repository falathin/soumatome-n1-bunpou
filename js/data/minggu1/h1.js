window.W1H1 = {
  title: '1日目 感謝こそすれ',
  grammar: [
    {
      id: 'w1_d1_1',
      rule: '〜てこそ',
      formal: false,
      conjunction: 'V-て + こそ',
      explanation:
        '【日本語】「〜して初めて、本当の価値や効果がわかる／実現する」という意味。実際の過去の出来事には使えず、一般的な truths（真理）や条件・決意を表すときに使う。\n【ID】Digunakan untuk menekankan bahwa hanya setelah melakukan kondisi/tindakan X, maka hasil atau pemahaman Y yang sebenarnya baru bisa terwujud. Tidak bisa digunakan untuk peristiwa masa lalu yang sudah terjadi (kejadian spesifik yang lampau).\n【EN】Used to emphasize that "only after" or "only by" doing X does Y become possible or understood. Cannot be used for factual individual events in the past.',
      meaning: {
        id: 'Hanya setelah (melakukan sesuatu), barulah bisa... / Barulah sempurna jika...',
        en: 'Only after doing... / Only by doing... can one...',
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
        '【日本語】「〜はあるけれど、後ろの主文（本質・評価）に影響はない」という意味。前文でマイナスや例外的な事実を認めつつ、後文で「それでも〜だ」とポジティブな評価や本質を強調する硬い表現。\n【ID】Digunakan untuk mengakui bahwa "memang ada sedikit unsur/kekurangan X, tapi tidak merubah penilaian atau kenyataan utama Y". Merupakan bentuk formal/kaku dari 〜はあるけれど.\n【EN】A formal expression meaning "although there is X, it does not change the main reality/evaluation Y". Recognizes a minor negative or condition before stating a primary positive point.',
      meaning: {
        id: 'Meskipun ada (kekurangan/hal kecil) X, tetapi (hal utamanya tetap Y)...',
        en: 'Although there is... / While there may be...',
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
        '【日本語】「〜することはあっても、絶対に逆のこと（後文）はあり得ない」という強力な否定・強調を表す。「前文の動作はするが、後文の動作は絶対にしない」という対比。\n【ID】Menegaskan bahwa pembicara "mungkin/pasti melakukan tindakan A, tetapi SAMA SEKALI TIDAK MUNGKIN melakukan tindakan B (yang berlawanan)". Bagian belakang selalu diikuti bentuk negatif mutlak.\n【EN】Strongly emphasizes that while X might happen, the opposite Y will "definitely never happen". The second clause always expresses absolute negation.',
      meaning: {
        id: 'Bisa jadi / Yang ada justru melakukan X, dan SAMA SEKALI TIDAK MUNGKIN Y...',
        en: 'May do / Will certainly do X, but definitely not Y...',
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
        '【日本語】「〜という特定の側面は悪い／劣っているが、他の重要な側面（味、品質、環境など）は素晴らしい」と対比して評価する表現。\n【ID】Mengakui secara jujur bahwa suatu aspek/fitur spesifik memang buruk (seperti penampilan, lokasi, atau nama), tetapi aspek utama lainnya sangat bagus/berkualitas.\n【EN】Used to admit that a specific aspect X is bad or lacking, while highlighting that other crucial aspects are actually very good.',
      meaning: {
        id: 'Memang buruk/kurang di aspek X, tetapi (aspek lainnya bagus)...',
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