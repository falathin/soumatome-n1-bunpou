window.W1H6 = {
  title: '６日目 何回読んだところで…',
  grammar: [
    {
      id: 'w1_d6_1',
      rule: '〜ところを',
      formal: false,
      conjunction: 'V/A(普通形) / naな / Nの + ところを',
      explanation:
        '【ID】Ibarat menyela momen sensitif—digunakan saat menyampaikan permohonan maaf atau terima kasih di tengah situasi sibuk/sulit orang lain.\n【EN】Used in polite/formal greetings to apologize or thank someone when interrupting their situation.\n【JP】相手が〜という恐縮な状況であるのにもかかわらず（感謝やお詫びの挨拶で多用）。',
      meaning: {
        id: 'Saat/Padahal situasi...',
        en: 'When / Despite the situation...',
        cn: '在...正当之际'
      },
      examples: [
        '交通事故で命が危ないところを、その医者に助けてもらった。',
        'すぐにお礼の電話をしなければいけないところを今になってしまい、申し訳ありません。',
        'お休みのところを申し訳ありません。'
      ]
    },
    {
      id: 'w1_d6_2',
      rule: '〜というところだ',
      formal: false,
      conjunction: 'N / [文] + というところだ / といったところだ',
      explanation:
        '【ID】Ibarat memperkirakan estimasi batas maksimal—paling tinggi atau kira-kira berada di kisaran jumlah/tingkat X.\n【EN】Used to estimate an approximate limit or range, meaning "at most" or "roughly around".\n【JP】最高でも〜ぐらいだ／だいたい〜という程度だ。',
      meaning: {
        id: 'Kira-kira / Sekitar (paling tinggi)...',
        en: 'At most / About...',
        cn: '大致/最多...'
      },
      examples: [
        '勉強時間は２、３時間というところだ。',
        '「もう一度見直せばいいといったところです。」',
        '参加者は多くても20人といったところだ。'
      ]
    },
    {
      id: 'w1_d6_3',
      rule: '〜たところで',
      formal: false,
      conjunction: 'V-た + ところで ... ない',
      explanation:
        '【ID】Ibarat membuang garam ke laut—meskipun sudah bersusah payah melakukan X, hasilnya tetap sia-sia atau bernilai negatif.\n【EN】Expresses that even if action X is taken, it will yield no positive result or useless outcome.\n【JP】いくら〜という行動をしてみても、決して良い結果にはならない／無駄だ。',
      meaning: {
        id: 'Meskipun (sudah)..., tetap saja tidak...',
        en: 'Even if... it won\'t...',
        cn: '即使...也（无法...）'
      },
      examples: [
        '何回読んだところで、意味は全くわからない。',
        'そんな多額の借金は、家を売ったところで、到底返せない。',
        '今から謝ったところで、もう遅い。'
      ]
    },
    {
      id: 'w1_d6_4',
      rule: '〜としたところで',
      formal: false,
      conjunction: 'V/A/na/N(普通形) + としたところで / としたって',
      explanation:
        '【ID】Ibarat pengandaian ekstrem—bahkan sekiranya dikondisikan/diandaikan keadaan X sekalipun, hasilnya tidak akan berubah.\n【EN】Even assuming or supposing condition X to be true, the conclusion remain unchanged.\n【JP】仮に〜と仮定・想定したとしても、結果や状況は同じだ。',
      meaning: {
        id: 'Bahkan sekiranya / Walaupun...',
        en: 'Even assuming that...',
        cn: '即使假设...'
      },
      examples: [
        'これは忘れようとしたところで、忘れられない出来事だ。',
        '今から急いだとしたって間に合わないだろう。',
        '彼が社長になったとしたって、会社は変わらないだろう。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'どんなに（ ）、絶対に間に合わないだろう。',
        options: ['走るところを', '走ったところで'],
        correct: 1
      },
      {
        question: 'お忙しい（ ）お集まりいただき、ありがとうございます。',
        options: ['ところを', 'ところで'],
        correct: 0
      },
      {
        question: '「CDは月にどのくらい買うの。」「だいたい5枚（ ）ね。」',
        options: ['というところだ', 'ところだ'],
        correct: 0
      },
      {
        question: '彼の借金は、休みなく毎日働いた（ ）、返せるような額ではない。',
        options: ['ところを', 'ところで'],
        correct: 1
      },
      {
        question: 'あの頑固な父にタバコをやめさせよう（ ）、無駄だよ。',
        options: ['にしたって', 'としたって'],
        correct: 1
      },
      {
        question: 'どんなにやった ___ ___ ★ ___ 変えることはできない。',
        options: ['1 ところで', '2 後悔した', '3 ことを', '4 過去を'],
        correct: 0,
        fullSentence: 'どんなに【 2 後悔した 】【 3 ことを 】【 1★ ところで 】【 4 過去を 】変えることはできない。'
      },
      {
        question: 'トイレはもちろんキッチンもついていて、この車は ___ ___ ★ ___ です。',
        options: ['1 といった', '2 まさに', '3 走る家', '4 ところ'],
        correct: 0,
        fullSentence: 'トイレはもちろんキッチンもついていて、この車は【 2 まさに 】【 3 走る家 】【 1★ といった 】【 4 ところ 】です。'
      }
    ]
  }
};