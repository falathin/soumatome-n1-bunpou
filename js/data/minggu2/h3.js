
window.W2H3 = {
  title: '3日目 行こうか行くまいか迷っている',
  grammar: [
    {
      id: 'w2_d3_1',
      rule: '〜というか〜というか',
      formal: false,
      explanation: '(= 〜とも言えるし、また〜とも言える。とにかく) Aい/na/N ＋ というか',
      meaning: {
        id: 'Bisa dibilang... bisa juga dibilang...',
        en: 'I mean... or rather... / You could say... or...',
        cn: '可以说是...也可以说是...'
      },
      examples: [
        '私は合格したが、親友は不合格だった。うれしいというか、残念というか、複雑な気持ちだ。',
        'そんなことをするとは、無茶というか、無知というか、彼のすることは理解できない。'
      ]
    },
    {
      id: 'w2_d3_2',
      rule: '〜うと〜まいと',
      formal: true,
      explanation: '(= 〜しても〜しなくても、どの場合でも) VようとVるまいと / VようがVるまいが (くる→こまい/くるまい、する→しまい/すまい/するまい)',
      meaning: {
        id: 'Mau... ataupun tidak... / Terlepas dari apakah... atau tidak...',
        en: 'Whether... or not...',
        cn: '不管...还是不...'
      },
      examples: [
        '雨が降ろうと降るまいと試合は行われます。',
        '私がしようがいまいが関係なく、彼らはけんかを始めた。'
      ]
    },
    {
      id: 'w2_d3_3',
      rule: '〜うか〜まいか',
      formal: false,
      explanation: '(= 〜するか、しないか、どちらにしようか) VようかVるまいか',
      meaning: {
        id: 'Apakah mau... atau tidak (sedang ragu-ragu)...',
        en: 'Whether to... or not (indecision)',
        cn: '是...还是不...（犹豫不决）'
      },
      examples: [
        '台風のような雨だ。予定通り美術館に行こうか、行くまいか。',
        '彼と結婚しようかするまいか悩むくらいなら、やめたほうがいい。'
      ]
    },
    {
      id: 'w2_d3_4',
      rule: '〜にせよ〜にせよ',
      formal: true,
      explanation: '(= 〜する場合も〜しない場合も / どういう場合でも) 【〜にせよ(〜にせよ) / 〜にしろ(〜にしろ)】 V/A/na/N(普) ＋ にせよ / 何にせよ/だれにせよ/いつにせよ',
      meaning: {
        id: 'Baik... maupun... / Apapun situasinya...',
        en: 'Regardless of whether... or... / In any case...',
        cn: '无论...还是... / 不管怎样...'
      },
      examples: [
        '来るにせよ来ないにせよ、必ず連絡を入れてください。',
        '熱が下がったにせよ、しばらく安静が必要です。',
        '事故で車は前のほうがめちゃくちゃになったが、何にしろ、誰もけがをしなくてよかった。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'あなたが反対（ ）私は一人で行くつもりです。',
        options: ['しようとしまいと', 'しようがするまいか'],
        correct: 0
      },
      {
        question: '大学院へ（ ）悩んだ末、いい仕事が見つかったので就職することにした。',
        options: ['行こうと行くまいと', '行こうか行くまいか'],
        correct: 1
      },
      {
        question: '来週の会合に（ ）、必ず資料に目を通してください。',
        options: ['来るにしろ来ないにしろ', '来るというか来ないというか'],
        correct: 0
      },
      {
        question: '欠席（ ）連絡はしてください。',
        options: ['するにせよ', 'しようしろ'],
        correct: 0
      },
      {
        question: 'それは、（ ）、とにかく変わったものだ。',
        options: ['面白かろうと、珍しかろうと', '面白いというか、珍しいというか'],
        correct: 1
      },
      {
        question: 'その新聞記者は、記事を掲載 ___ ___ ___ ___ 、掲載をやめた。',
        options: ['1 しようか', '2 悩んだ', '3 あげく', '4 すまいか'],
        correct: '1-4-2-3'
      },
      {
        question: 'もう社会人 ___ ___ ___ ___ に責任を持たなければいけない。',
        options: ['1 だから', '2 にせよ', '3 自分の行動', '4 何をする'],
        correct: '1-4-2-3'
      }
    ]
  }
};
