window.W1H5 = {
  title: '５日目 難しいとみると…',
  grammar: [
    {
      id: 'w1_d5_1',
      rule: '〜とみえて',
      formal: false,
      conjunction: 'V/A/na/N(普通形) + とみえて / とみえる',
      explanation:
        '【接続】普通形 ＋ とみえて／とみえる\n【意味・解説】目で見える直接的な様子や相手の行動を観察して、「どうやら〜のようだ／〜らしく見える」と判断・推量するときに使う。',
      meaning: {
        id: 'Tampaknya / kelihatannya...',
        en: 'It seems that...',
        cn: '看来/似乎...'
      },
      examples: [
        '田中さんは忙しいとみえて、このごろ電話もしてこない。',
        '彼はしばらく声を出さなかった。かなり驚いたとみえる。',
        '夜中に雨が降ったとみえて、道が濡れている。'
      ]
    },
    {
      id: 'w1_d5_2',
      rule: '〜とみられる',
      formal: false,
      conjunction: 'V/A/na/N(普通形) + とみられる',
      explanation:
        '【接続】普通形 ＋ とみられる\n【意味・解説】客観的な状況・データ・専門家の見解などに基づいて、「〜と予想・判断される」とニュースや報道で論理的に述べるときに使う。',
      meaning: {
        id: 'Diperkirakan / diduga bahwa... (berdasarkan data/bukti)',
        en: 'It is expected/believed that...',
        cn: '据估计/预计...'
      },
      examples: [
        'この地域では、今後も大きい地震が来るとみられている。',
        'その会社の再建は難しいとみられる。',
        '犯人は20代の男だとみられている。'
      ]
    },
    {
      id: 'w1_d5_3',
      rule: '〜とみると',
      formal: false,
      conjunction: 'V/A/na/N(普通形) + とみると',
      explanation:
        '【接続】普通形 ＋ とみると\n【意味・解説】「〜という状況だと素早く判断するやいなや、直ちに自分の行動や態度を変化させる」という場面を表す。',
      meaning: {
        id: 'Begitu menyadari/melihat kondisi..., langsung...',
        en: 'As soon as one realizes that..., one...',
        cn: '一旦发现/看到...就（立刻）...'
      },
      examples: [
        '彼は問題がちょっと難しいとみると、自分で考えないで人に聞く。',
        '彼は、店員が韓国人だとみると、必ず韓国語で話しかける。',
        '彼女は、男の人にお金がないとみると、急に興味がなくなるようだ。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'もし車を買い換える（ ）、次はドイツの車がほしい。',
        options: ['とすれば', 'とみると'],
        correct: 0
      },
      {
        question: '彼女は苦労した（ ）、実際の年齢より老けて見える。',
        options: ['として', 'とみえて'],
        correct: 1
      },
      {
        question: '彼女の普段の成績から、合格は間違いないと（ ）。',
        options: ['みられている', 'みえている'],
        correct: 0
      },
      {
        question: '彼は、女性が地方出身だ（ ）すぐに声をかける。',
        options: ['とみると', 'とすれば'],
        correct: 0
      },
      {
        question: '彼が犯人（ ）、犯罪を犯した動機は何だろう。',
        options: ['だとすると', 'だとみえて'],
        correct: 0
      },
      {
        question: '景気は回復しつつ ___ ___ ★ ___ 人は少ないと思う。',
        options: ['1 が', '2 実感している', '3 ある', '4 とみられている'],
        correct: 0,
        fullSentence: '景気は回復しつつ【 3 ある 】【 4 とみられている 】【 1★ が 】【 2 実感している 】人は少ないと思う。'
      },
      {
        question: 'インフルエンザが ___ ___ ★ ___ 場合があるので、しばらくは薬を続けてください。',
        options: ['1 ウイルスは', '2 治った', '3 まだ残っている', '4 とみえても'],
        correct: 0,
        fullSentence: 'インフルエンザが【 2 治った 】【 4 とみえても 】【 1★ ウイルスは 】【 3 まだ残っている 】場合があるので、しばらくは薬を続けてください。'
      }
    ]
  }
};