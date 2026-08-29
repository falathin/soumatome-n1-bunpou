window.W4H2 = {
  title: '2日目 大学教授ですら',
  grammar: [
    {
      id: 'w4_d2_1',
      rule: '〜すら',
      formal: false,
      explanation: '(= さえ) 極端な例を挙げて、他のことも推して知るべしというニュアンス。',
      meaning: {
        id: 'Bahkan...',
        en: 'Even...',
        cn: '连...甚至...'
      },
      examples: [
        '彼は、大学教授（で）すら気が付かなかった問題点を指摘した。',
        'この悩みは親友にすら言えない。'
      ]
    },
    {
      id: 'w4_d2_2',
      rule: '〜にして',
      formal: true,
      explanation: '(= 〜であっても / 〜だからこそ) ①〜でさえ（極端な例） ②〜という高い立場・条件だからこそ。',
      meaning: {
        id: 'Bahkan pada / Karena merupakan...',
        en: 'Even at / Being such a...',
        cn: '连...也 / 正因为是...'
      },
      examples: [
        '先生にして間違うのだから、できないのは当然である。',
        '竜巻が一瞬にして家を吹き飛ばした。',
        '彼は、医者にして、画家でもある。'
      ]
    },
    {
      id: 'w4_d2_3',
      rule: '〜ともあろう者（が） / 〜たる者',
      formal: true,
      explanation: '「〜という立派な身分・立場にある人が、ふさわしくないことをする」という非難の気持ちを表す。',
      meaning: {
        id: 'Orang sekelas... tapi / Sebagai seorang...',
        en: 'Being someone as important as... / A person in the position of...',
        cn: '堂堂...竟然 / 身为...理应...'
      },
      examples: [
        '大学生ともあろう者が、その漢字を読めないのは恥ずかしい。',
        '一国の首相たる者が、このような発言をしてはいけない。'
      ]
    },
    {
      id: 'w4_d2_4',
      rule: '〜ともなると / 〜となれば / 〜となったら',
      formal: false,
      explanation: '(= 〜の立場や状況になったら) そのような状況や段階になると、当然こうなるという意味。',
      meaning: {
        id: 'Ketika sudah menjadi / Jika sudah sampai pada situasi...',
        en: 'When it comes to... / Once in the position of...',
        cn: '一旦到了...时候 / 如果成为...'
      },
      examples: [
        '大臣ともなると、自由に行動できない。',
        'いざ出発となると、不安になってきた。',
        '銀行でお金を借りるとなると、手続きが大変だ。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '彼はとてもいい人だ。でも結婚（ ）とまったく頼りない気がする。',
        options: ['ともなく', 'となると'],
        correct: 1
      },
      {
        question: '親（ ）者は、子どもが悪いことをしたときに、きちんとしかるべきだ。',
        options: ['たる', 'たにる'],
        correct: 0
      },
      {
        question: 'あのような一流レストラン（ ）と、男性はネクタイが必要だ。',
        options: ['ともなる', 'ともあろう'],
        correct: 0
      },
      {
        question: '結婚なんてとんでもない。私は男の人と話したこと（ ）ないのです。',
        options: ['すら', 'にする'],
        correct: 0
      },
      {
        question: '痛みが悪いことであるのは、小さい子ども（ ）知っている。',
        options: ['でこそ', 'ですら'],
        correct: 1
      },
      {
        question: '___ ___ ___ ___ にはこの暑さは厳しいだろう。',
        options: ['1 老人', '2 ですら', '3 つらいのだから', '4 若い私たち'],
        correct: '1-2-3-4' // Note: option order based on textbook logic or mapping exact match
      },
      {
        question: '内科の ___ ___ ___ ___ が、栄養のことを気にかけないのは理解できない。',
        options: ['1 医者', '2 医者ではなくて... (simplified to match items)', '3 あろう', '4 と'],
        correct: '2-1-3-4'
      }
    ]
  }
};