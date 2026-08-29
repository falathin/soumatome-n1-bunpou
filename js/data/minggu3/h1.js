window.W3H1 = {
  title: '1日目 毎日はしないまでも',
  grammar: [
    {
      id: 'w3_d1_1',
      rule: '〜までだ / 〜までのことだ',
      formal: false,
      explanation: '(= 〜てみただけだ。ほかの意味はない / 〜するしかない)',
      meaning: {
        id: 'Hanya sekadar... / Apa boleh buat, hanya bisa...',
        en: 'Just did it to... / Have no choice but to...',
        cn: '只是...而已 / 只能...'
      },
      examples: [
        'ちょっと聞いてみたまでです。',
        '妻が反対だと言えば、あきらめるまでだ。',
        'いくら高いコンピューターを買っても、使わなければそれまでだ。'
      ]
    },
    {
      id: 'w3_d1_2',
      rule: '〜ないまでも',
      formal: false,
      explanation: '(= 〜なくても、少なくとも)',
      meaning: {
        id: 'Meskipun tidak sampai... setidaknya...',
        en: 'Even if not..., at least...',
        cn: '即使不...也至少...'
      },
      examples: [
        '毎日はしないまでも、週に１回くらいは部屋の掃除をしよう。',
        '手紙を書かないまでも電話ぐらいしろ。'
      ]
    },
    {
      id: 'w3_d1_3',
      rule: '〜てでも',
      formal: false,
      explanation: '(= 〜という状態になっても / 無理をしてでも)',
      meaning: {
        id: 'Bahkan jika harus (melakukan sesuatu yang ekstrem)...',
        en: 'Even if it means doing...',
        cn: '即使...也要...'
      },
      examples: [
        '母は体を壊してまでも、朝から晩まで働き続けた。',
        'そのジャーナリストは危険を冒してまでも戦場に行こうとしている。'
      ]
    },
    {
      id: 'w3_d1_4',
      rule: '〜までもない',
      formal: false,
      explanation: '(= 言わなくてもみんな知っている / 〜する必要はない)',
      meaning: {
        id: 'Tidak perlu (sampai harus)... / Sudah jelas...',
        en: 'There is no need to... / It goes without saying...',
        cn: '没必要... / 不用说...'
      },
      examples: [
        '日本が狭いということは、言うまでもない。',
        'この件については、社長に許可を取るまでもない。',
        'アルコール検査をするまでもなく、彼が酔っ払っていることは明白だ。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '来たくなければ来なくてもいい。ただ君が損を（ ）までだ。',
        options: ['する', 'しない'],
        correct: 0
      },
      {
        question: '親が出る（ ）、子どもたちだけでその問題を解決した。',
        options: ['までもなく', 'までも'],
        correct: 0
      },
      {
        question: 'あの人とは話はしない（ ）、挨拶ぐらいはしますよ。',
        options: ['までもなく', 'までも'],
        correct: 1
      },
      {
        question: 'いくらお金を稼いでも死んでしまえば（ ）。',
        options: ['それまでだ', 'それまでもない'],
        correct: 0
      },
      {
        question: 'これくらいの故障、修理を頼む（ ）。僕が直してあげるよ。',
        options: ['までのことだ', 'までもない'],
        correct: 1
      },
      {
        question: '上手になりたければ、___ ___ ___ ___ のことだ。',
        options: ['1 練習', '2 ひたすら', '3 まで', '4 する'],
        correct: '2-1-4-3'
      },
      {
        question: '彼の行為は、___ ___ ___ ___ と言えるだろう。',
        options: ['1 犯罪', '2 すでに', '3 法律を持ち出す', '4 もなく'],
        correct: '3-4-2-1'
      }
    ]
  }
};
