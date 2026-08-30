window.W1H6 = {
  title: '６日目 何回読んだところで…',
  grammar: [
    {
      id: 'w1_d6_1',
      rule: '〜ところを',
      formal: false,
      conjunction: 'V/A(普通形) / naな / Nの + ところを',
      explanation:
        '【接続】動詞・い形普通形 ＋ ところを ／ な形＋な ＋ ところを ／ 名詞＋の ＋ ところを\n【意味・解説】相手が忙しかったり大変だったりする状況に対して、お詫びや感謝の気持ちを丁寧に伝える際の前置きとして使う。',
      meaning: {
        id: 'Padahal dalam keadaan (sibuk/susah)..., terima kasih/maaf...',
        en: 'At the time when / Although you are in the middle of...',
        cn: '百忙之中/在...之际（表示感谢或歉意）'
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
        '【接続】名詞 ／ 数量詞 ＋ というところだ／といったところだ\n【意味・解説】「最高でもせいぜい〜の程度だ／だいたい〜くらいだ」と、大体の限界や目安の範囲を示すときに使う。',
      meaning: {
        id: 'Paling-paling cuma sebatas / sekitar...',
        en: 'At most / At best around...',
        cn: '最多也就是.../充其量是...'
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
        '【接続】動詞た形 ＋ ところで\n【意味・解説】「たとえどんなに頑張って〜しても、決して良い結果は得られない／意味がない」という無駄であることを主張するときに使う。',
      meaning: {
        id: 'Sekalipun / meskipun (melakukan)..., tetap saja tidak ada gunanya',
        en: 'Even if..., it won\'t matter / it\'s useless',
        cn: '即使...也（无济于事）'
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
        '【接続】普通形 ＋ としたところで／としたって\n【意味・解説】「仮に〜と想定・仮定したとしても、結局状況や結果は変わらない」と立場や条件の無意味さを述べる。',
      meaning: {
        id: 'Bahkan jika diandaikan..., hasilnya tetap...',
        en: 'Even assuming that..., still...',
        cn: '即使假设...也（改变不了什么）'
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