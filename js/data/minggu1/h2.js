window.W1H2 = {
  title: '２日目 できるものとして',
  grammar: [
    {
      id: 'w1_d2_1',
      rule: '〜くらいなら',
      formal: false,
      conjunction: 'V-辞書形 + くらいなら / ぐらいなら',
      explanation:
        '【接続】動詞辞書形 ＋ くらいなら／ぐらいなら\n【意味・解説】「〜という最悪な状況・行動になるよりは、まだ後者のほうがマシだ」という強く嫌がる気持ちや強い選択を表す。',
      meaning: {
        id: 'Daripada harus (hal buruk)..., lebih baik...',
        en: 'Rather than..., I would rather...',
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
      conjunction: 'N + くらい / ぐらい + のものだ',
      explanation:
        '【接続】名詞 ＋ くらい／ぐらい ＋ のものだ\n【意味・解説】「〜できるのは、これ（この人）だけで他には全くいない」と、唯一の存在であることを強調するときに使う。',
      meaning: {
        id: 'Hanya (orang/hal) ini saja yang bisa...',
        en: 'It is only... that can...',
        cn: '也就只有...才会/能...'
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
      conjunction: 'V/A/na/N(普通形) + ものとして (na/Nだ→である)',
      explanation:
        '【接続】普通形 ＋ ものとして （※な形-である／名詞-である）\n【意味・解説】現実には決まっていなくても、「〜と仮定・前提して次の行動や計画を進める」という状況で使う。',
      meaning: {
        id: 'Dengan anggapan/asumsi bahwa...',
        en: 'On the assumption that...',
        cn: '假设.../作为...（来进行）'
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
      conjunction: 'V-辞書形 + ものとする',
      explanation:
        '【接続】動詞辞書形 ＋ ものとする\n【意味・解説】契約書・法律・利用規約などの公式文書で、「〜と決定する／〜することを義務として定める」際に使う非常に硬い表現。',
      meaning: {
        id: 'Dianggap/ditetapkan bahwa... (aturan resmi)',
        en: 'It shall be assumed that... / It is decided that...',
        cn: '规定.../定为...'
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
        question: '昨日授業で教えた ___ ___ ★ ___ 次に進みます。',
        options: ['1 もの', '2 ことは', '3 として', '4 わかった'],
        correct: 0,
        fullSentence: '昨日授業で教えた【 2 ことは 】【 4 わかった 】【 1★ もの 】【 3 として 】次に進みます。'
      },
      {
        question: 'そんなことを ___ ___ ★ ___ ほうがましだ。',
        options: ['1 させられる', '2 参加しない', '3 なら', '4 くらい'],
        correct: 2,
        fullSentence: 'そんなことを【 1 させられる 】【 4 くらい 】【 3★ なら 】【 2 参加しない 】ほうがましだ。'
      }
    ]
  }
};

