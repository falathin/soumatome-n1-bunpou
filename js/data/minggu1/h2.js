window.W1H2 = {
  title: '２日目 できるものとして',
  grammar: [
    {
      id: 'w1_d2_1',
      rule: '〜くらいなら',
      formal: false,
      explanation: 'Vるくらいなら / Vるぐらいなら (とてもいやだという気持ち)',
      meaning: {
        id: 'Daripada (harus) melakukan..., lebih baik...',
        en: 'Rather than doing..., better to...',
        cn: '与其...不如...'
      },
      examples: [
        'そんなことをするくらいなら、死んだほうがましだ。',
        '友達を傷つけるくらいなら、自分が我慢したほうがいい。',
        '途中で投げ出すくらいなら、最初からやらないほうがいい。'
      ]
    },
    {
      id: 'w1_d2_2',
      rule: '〜ぐらいのものだ',
      formal: false,
      explanation: '(〜のは) Nくらい/ぐらい のものだ',
      meaning: {
        id: 'Hanya... (tidak ada yang lain)',
        en: 'Only... (is capable/enough)',
        cn: '也就只有...'
      },
      examples: [
        '彼が仕事を辞めないように説得できるのは、君ぐらいのものだ。',
        '君が受かるのは、このランクの大学ぐらいのものだ。',
        '私の下手な冗談で笑ってくれるのは、彼女ぐらいのものだ。'
      ]
    },
    {
      id: 'w1_d2_3',
      rule: '〜ものとして',
      formal: false,
      explanation: 'V/A/na/N(普通形) + ものとして (naな→である / Nだ→である)',
      meaning: {
        id: 'Dengan anggapan bahwa... / Berasumsi bahwa...',
        en: 'Assuming that...',
        cn: '当作...'
      },
      examples: [
        '中級漢字はできるものとして、上級漢字のクラスを取った。',
        '田中さんはもう来ないものとして、始めましょう。',
        '彼はもう事情を知っているものとして、話を進めよう。'
      ]
    },
    {
      id: 'w1_d2_4',
      rule: '〜ものとする',
      formal: true,
      explanation: 'Vるものとする (契約書などに多く出てくる表現)',
      meaning: {
        id: 'Ditetapkan bahwa... / Memutuskan untuk...',
        en: 'Shall be / It is decided that...',
        cn: '规定/约定...'
      },
      examples: [
        '採用試験は、毎年10月に行うものとする。',
        '契約の延長は、双方の同意によるものとする。',
        'レポートの提出期限は今月末までとするものとする。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'たぶん行けないと思うので、私はいない（ ）話を進めてください。',
        options: ['ものとして', '人として'],
        correct: 0
      },
      {
        question: '愛する人が病気で苦しむのを見るくらいなら、（ ）。',
        options: ['見ないほうがましだ', '自分が病気になったほうがいい'],
        correct: 1
      },
      {
        question: '転勤でそんな田舎に行かされる（ ）、会社を辞めたほうがいい。',
        options: ['くらいなら', 'ものだから'],
        correct: 0
      },
      {
        question: 'ぼくが買える家は、これ（ ）。',
        options: ['ぐらいにしたものだ', 'ぐらいのものだ'],
        correct: 1
      },
      {
        question: '契約の期限が来た場合には、新たに契約書を交わす（ ）。',
        options: ['ものになる', 'ものとする'],
        correct: 1
      },
      {
        question: '昨日授業で教えた ___ ___ ___ ___ 次に進みます。',
        options: ['1 もの', '2 ことは', '3 として', '4 わかった'],
        correct: '2-4-1-3'
      },
      {
        question: 'そんなことを ___ ___ ___ ___ ほうがましだ。',
        options: ['1 させられる', '2 参加しない', '3 なら', '4 くらい'],
        correct: '1-4-3-2'
      }
    ]
  }
};