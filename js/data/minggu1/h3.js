window.W1H3 = {
  title: '３日目 彼のことだから',
  grammar: [
    {
      id: 'w1_d3_1',
      rule: '〜ことのないように',
      formal: false,
      conjunction: 'V-辞書形 + ことのないよう（に）',
      explanation:
        '【ID】Ibarat memasang jaring pengaman—melakukan antisipasi atau tindakan pencegahan Y agar potensi masalah X tidak terjadi.\n【EN】Used when warning or taking preventive measures so that an undesirable situation X does not occur.\n【JP】問題や失敗といった悪い事態が起きないように、注意・予防策をとる。',
      meaning: {
        id: 'Agar tidak (terjadi)...',
        en: 'So as not to...',
        cn: '为了不...'
      },
      examples: [
        '災害が来ても慌てることのないよう、日頃から準備しておこう。',
        '今後、このような犯罪と関わることのないように注意してください。',
        '後で後悔することのないように、今を全力で生きよう。'
      ]
    },
    {
      id: 'w1_d3_2',
      rule: '〜ことなしに',
      formal: true,
      conjunction: 'V-辞書形 + ことなしに（は）',
      explanation:
        '【ID】Ibarat berjalan tanpa memakai alas kaki—melakukan suatu tindakan tanpa disertai/melalui kondisi dasar X sama sekali.\n【EN】A formal literary expression meaning "without doing X" or "unless X is done first".\n【JP】〜をしないで／〜という前提がない状態のままで（「〜しないで」の硬い表現）。',
      meaning: {
        id: 'Tanpa...',
        en: 'Without doing...',
        cn: '在不...的情况下'
      },
      examples: [
        '今の状況を知ることなしに、未来を予測することはできない。',
        '過去の事例を見ることなしに、解決方法は見えてこないだろう。',
        '努力することなしに、大きな成功を得ることはできない。'
      ]
    },
    {
      id: 'w1_d3_3',
      rule: '〜のことだから',
      formal: false,
      conjunction: 'N + のことだから',
      explanation:
        '【ID】Ibarat meramal teman dekat—karena sudah sangat memahami sifat/kebiasaan karakter X, kita bisa yakin menebak perilakunya.\n【EN】Used when making a confident deduction based on known typical character traits or habits of a person.\n【JP】〜の性格や日頃の行動パターンをよく知っているから、きっと〜だろうと推量する。',
      meaning: {
        id: 'Karena (sifat/karakter) dia..., pasti...',
        en: 'Knowing him/her, surely...',
        cn: '因为是...（他肯定...）'
      },
      examples: [
        'よくできる彼のことだから、合格は間違いないでしょう。',
        '優しい彼女のことだから、きっと許してくれるよ。',
        'いつも遅刻する彼のことだから、今日も遅れるだろう。'
      ]
    },
    {
      id: 'w1_d3_4',
      rule: '〜ことにする／なる',
      formal: false,
      conjunction: 'V-た / A-かった / Na(だ) / N(だ) + ことにする／になる (Na/N bisa pakai である)',
      explanation:
        '【ID】Ibarat memakai topeng—memperlakukan atau memanipulasi kenyataan seolah-olah terjadi fakta X, padahal kenyataannya tidak.\n【EN】Used when intentionally treating something contrary to reality, or pretending a state exists.\n【JP】実際はそうではないのに、事実とは反対の状態として扱ったり偽ったりする。',
      meaning: {
        id: 'Menganggap seolah-olah... / Berpura-pura bahwa...',
        en: 'Pretend/Treat as if...',
        cn: '就当是...'
      },
      examples: [
        'この話は聞かなかったことにしてください。',
        '彼は、大学を卒業したことになっているけれど、実際は中退らしい。',
        '昨日は仮病で、病気で休んだことにしておいた。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'お互いが助け合うこと（ ）人間は生きていけない。',
        options: ['なしに', 'だから'],
        correct: 0
      },
      {
        question: '明るい彼女のこと（ ）、どこへ行ってもすぐ友達ができるだろう。',
        options: ['にして', 'だから'],
        correct: 1
      },
      {
        question: '兄が書いたレポートを、自分が（ ）提出した。',
        options: ['書いたことにして', '書くことなしに'],
        correct: 0
      },
      {
        question: '道に（ ）、前もって地図で場所を確かめておいた。',
        options: ['迷うことのないように', '迷うことなしに'],
        correct: 0
      },
      {
        question: '彼女は今まで苦労（ ）ことなしに生きてきた。',
        options: ['する', 'した'],
        correct: 0
      },
      {
        question: 'ケチで有名な彼 ___ ___ ★ ___ 貸してくれないだろう。',
        options: ['1 だって', '2 だから', '3 のこと', '4 百円'],
        correct: 3,
        fullSentence: 'ケチで有名な彼【 3 のこと 】【 2 だから 】【 4★ 百円 】【 1 だって 】貸してくれないだろう。'
      },
      {
        question: 'その2つの関連性を ___ ___ ★ ___ のは困難だ。',
        options: ['1 こと', '2 証明する', '3 なしに', '4 解決する'],
        correct: 2,
        fullSentence: 'その2つの関連性を【 2 証明する 】【 1 こと 】【 3★ なしに 】【 4 解決する 】のは困難だ。'
      }
    ]
  }
};

