window.W1H4 = {
  title: "４日目 私に言わせれば",
  grammar: [
    {
      id: "w1_d4_1", rule: "〜とされる", formal: false,
      explanation: "V/A/na/N(普通形) + とされる",
      meaning: { id: "Dianggap/dikatakan bahwa...", en: "It is considered that...", cn: "被认为是..." },
      examples: [
        "この国には、よい指導者がいないのが一番の問題だとされている。",
        "この物質は植物の成長を促進するとされる。",
        "この地域は昔、海だったとされている。"
      ]
    },
    {
      id: "w1_d4_2", rule: "〜が思いだされる", formal: true,
      explanation: "(〜が) Vられる (自発の受身形: 意志と関係なく自然にそうなる)",
      meaning: { id: "Spontan teringat/terpikirkan...", en: "Spontaneously comes to mind...", cn: "不禁让人想起..." },
      examples: [
        "この曲を聴くと、学生時代のことが思いだされる。",
        "彼にひどいことを言ってしまったことが悔やまれる。",
        "故郷の風景が懐かしく思われる。"
      ]
    },
    {
      id: "w1_d4_3", rule: "〜させられる", formal: false,
      explanation: "Vさせられる (自発の使役受身形)",
      meaning: { id: "Dibuat merasa/tergerak...", en: "Made to feel...", cn: "使人.../让人感到..." },
      examples: [
        "彼の仕事ぶりには感心させられる。",
        "隣の家の騒音に悩まされている。",
        "彼の予想外の行動にはいつも驚かされる。"
      ]
    },
    {
      id: "w1_d4_4", rule: "〜に言わせれば", formal: false,
      explanation: "Nに言わせれば / Nから言わせれば (N=人)",
      meaning: { id: "Menurut pendapat (seseorang)...", en: "If you ask..., according to...", cn: "依...来看" },
      examples: [
        "彼は天才と言われているが、私に言わせれば、単なる努力家だ。",
        "うちの親に言わせれば、まだまだ若いそうです。",
        "専門家に言わせれば、その計画は失敗する可能性が高いそうだ。"
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
        question: '若者の海外移住が ___ ___ ___ ___ そうだ。',
        options: ['1 ことで', '2 その国の将来が', '3 増加している', '4 案じられている'],
        correct: '3-1-2-4'
      },
      {
        question: '彼の ___ ___ ___ ___ そんなのはただの甘えだ。',
        options: ['1 私に言わせれば', '2 やる気がないように', '3 言葉からは', '4 感じられたが'],
        correct: '3-2-4-1'
      }
    ]
  }
};