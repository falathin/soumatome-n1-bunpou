window.W1H2 = {
  title: '２日目 できるものとして',
  grammar: [
    {
      id: 'w1_d2_1',
      rule: '〜くらいなら',
      formal: false,
      conjunction: 'V-辞書形 + くらいなら / ぐらいなら',
      explanation:
        '【ID】Ibarat memilih antara racun dan obat pahit—daripada memilih skenario terburuk A, lebih baik memilih alternatif B yang masih bisa ditoleransi.\n【EN】Expresses strong aversion to option A, stating that option B (even if unfavorable) is much preferable.\n【JP】〜という最悪な状態・感情になるよりは、まだ後者のほうがマシだ。',
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
      conjunction: 'N + くらい / ぐらい + のものだ',
      explanation:
        '【ID】Ibarat satu-satunya pahlawan di kota—hanya subjek X yang mampu/memungkinkan melakukan hal tersebut, tidak ada pilihan lain.\n【EN】Used to emphasize that subjek X is the sole exception or only entity capable of a specific action.\n【JP】〜できるのは、この人／この物くらいで他には絶対にいない。',
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
      conjunction: 'V/A/na/N(普通形) + ものとして (na/Nだ→である)',
      explanation:
        '【ID】Ibarat membuat skenario simulasi—menganggap suatu kondisi X sudah menjadi kenyataan sebagai fondasi untuk mengambil langkah Y.\n【EN】Used when acting or planning under the assumption/premise that X is established as true.\n【JP】〜と前提・仮定して、あるいは事実とみなして次の行動を進める。',
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
      conjunction: 'V-辞書形 + ものとする',
      explanation:
        '【ID】Ibarat pasal dalam Kitab Undang-Undang atau kontrak formal—digunakan untuk menetapkan aturan resminya hukum/perjanjian.\n【EN】Formal legal/contractual phrasing used to declare mandates, stipulations, or regulations.\n【JP】契約書や公的な規則・文書で「〜と決定する／義務付ける」ことを表す。',
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
