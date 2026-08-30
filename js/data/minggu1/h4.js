window.W1H4 = {
  title: '４日目 私に言わせれば',
  grammar: [
    {
      id: 'w1_d4_1',
      rule: '〜とされる',
      formal: false,
      conjunction: 'V/A/na/N(普通形) + とされる',
      explanation:
        '【接続】普通形 ＋ とされる\n【意味・解説】一般的に〜と考えられている、または社会的に〜と認められている・決まっているという客観的事実や通説を述べる文章（ニュースや解説文）で使う。',
      meaning: {
        id: 'Dianggap / diyakini bahwa...',
        en: 'It is considered that...',
        cn: '被认为是...'
      },
      examples: [
        'この国には、よい指導者がいないのが一番の問題だとされている。',
        'この物質は植物の成長を促進するとされる。',
        'この地域は昔、海だったとされている。'
      ]
    },
    {
      id: 'w1_d4_2',
      rule: '〜が思いだされる',
      formal: true,
      conjunction: '(〜が) Vられる (自発動詞)',
      explanation:
        '【接続】動詞の受身形（自発）\n【意味・解説】自分の意志で意識するのではなく、外部のきっかけによって「自然と気持ちや過去の記憶が湧き上がってくる」状態を表す。',
      meaning: {
        id: 'Secara tak sadar/spontan teringat/terpikirkan...',
        en: 'Spontaneously rembered / naturally felt...',
        cn: '不禁想起/不禁感到...'
      },
      examples: [
        'この曲を聴くと、学生時代のことが思いだされる。',
        '彼にひどいことを言ってしまったことが悔やまれる。',
        '故郷の風景が懐かしく思われる。'
      ]
    },
    {
      id: 'w1_d4_3',
      rule: '〜させられる',
      formal: false,
      conjunction: 'Vさせられる (自発の使役受身表現)',
      explanation:
        '【接続】動詞の使役受身形\n【意味・解説】他人の素晴らしい行動や予期せぬ出来事によって、自分の心が強く動かされ「強制的に〜という感情にさせられる」ときに使う。',
      meaning: {
        id: 'Dibuat merasa/tergugah oleh...',
        en: 'To be made to feel...',
        cn: '让人感到...'
      },
      examples: [
        '彼の仕事ぶりには感心させられる。',
        '隣の家の騒音に悩まされている。',
        '彼の予想外の行動にはいつも驚かされる。'
      ]
    },
    {
      id: 'w1_d4_4',
      rule: '〜に言わせれば',
      formal: false,
      conjunction: 'Nに言わせれば / Nから言わせれば (N=人)',
      explanation:
        '【接続】名詞（※人・立場の表出）＋ に言わせれば／から言わせれば\n【意味・解説】「〜の立場や独自の見解から主張させてもらうと」と、自分の意見や評価を述べるときに使う。',
      meaning: {
        id: 'Menurut pandangan / jika (seseorang) boleh berkata...',
        en: 'If you ask... / In the opinion of...',
        cn: '依...之见 / 在...看来'
      },
      examples: [
        '彼は天才と言われているが、私に言わせれば、単なる努力家だ。',
        'うちの親に言わせれば、まだまだ若いそうです。',
        '専門家に言わせれば、その計画は失敗する可能性が高いそうだ。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '新しいロケットの完成が（ ）。',
        options: ['待たされます', '待たれます'],
        correct: 1
      },
      {
        question: '彼は社会人として必要（ ）知識に欠ける。',
        options: ['とされている', 'にしている'],
        correct: 0
      },
      {
        question: '我々の世代の人間に（ ）、彼の行動は普通ではない。',
        options: ['言わせれば', '言われれば'],
        correct: 0
      },
      {
        question: 'それは、死について真剣に（ ）映画だった。',
        options: ['考えされる', '考えさせられる'],
        correct: 1
      },
      {
        question: 'この新薬は、効果はあるが、副作用が強い（ ）。',
        options: ['ことにされている', 'とされている'],
        correct: 1
      },
      {
        question: '若者の海外移住が ___ ___ ★ ___ そうだ。',
        options: ['1 ことで', '2 その国の将来が', '3 増加している', '4 案じられている'],
        correct: 1,
        fullSentence: '若者の海外移住が【 3 増加している 】【 1 ことで 】【 2★ その国の将来が 】【 4 案じられている 】そうだ。'
      },
      {
        question: '彼の ___ ___ ★ ___ そんなのはただの甘えだ。',
        options: ['1 私に言わせれば', '2 やる気がないように', '3 言葉からは', '4 感じられたが'],
        correct: 3,
        fullSentence: '彼の【 3 言葉からは 】【 2 やる気がないように 】【 4★ 感じられたが 】【 1 私に言わせれば 】そんなのはただの甘えだ。'
      }
    ]
  }
};