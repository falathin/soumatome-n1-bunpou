window.W2H5 = {
  title: '5日目 行きつ戻りつ',
  grammar: [
    {
      id: 'w2_d5_1',
      rule: '〜ては',
      formal: false,
      conjunction: 'V-て / A-くて / Na-で / N-で + は',
      explanation:
        '【接続】動詞て形 ＋ は ／ い形容詞くて ＋ は ／ な形容詞・名詞で ＋ は\n【意味・解説】①「〜という条件では、望ましくない結果になる」という仮定。②「〜するたびに、いつも…になる」という反復・習慣を表す。',
      meaning: {
        id: 'Kalau terus-terusan... (akan berakibat buruk) / Setiap kali...',
        en: 'If (it continues like this)... (bad result) / Every time...',
        cn: '要是...（就会产生不好的结果）/ 每次...'
      },
      examples: [
        'こんなに雪が降っては、どこにも出かけられない。',
        '今日は弟の誕生日だが、肝心の本人が病気ではパーティーは延期するしかない。',
        '彼女はニキビに悩んでいて、鏡を見てはため息をついている。',
        '子どものころ、弟とけんかしては、母にしかられたものだ。'
      ]
    },
    {
      id: 'w2_d5_2',
      rule: '〜ては〜ては',
      formal: false,
      conjunction: 'V1-ては + V2-て / V1-ては + V2-る',
      explanation:
        '【接続】動詞1て形 ＋ は ＋ 動詞2て形（／辞書形）\n【意味・解説】二つの対照的な動作や状態を何度も繰り返す様子を表す。',
      meaning: {
        id: '...kemudian... (dilakukan berulang kali)',
        en: '...and then... (repeatedly)',
        cn: '...又...（反复进行）'
      },
      examples: [
        '食べては寝て、食べては寝てという生活を続けていたら、この半年で10キロも太ってしまった。',
        '久しぶりに山登りをした。歩いては休み、していたので、頂上までたどりつくのにずいぶん長い時間がかかった。'
      ]
    },
    {
      id: 'w2_d5_3',
      rule: '〜つ〜つ',
      formal: true,
      conjunction: 'V1-ます(語幹) + つ + V2-ます(語幹) + つ',
      explanation:
        '【接続】動詞ます形（語幹） ＋ つ ＋ 対義語の動詞ます形（語幹） ＋ つ\n【意味・解説】「〜したり〜したりして」と、対になる二つの動作が交互に行われる様子を表す書き言葉的表現。',
      meaning: {
        id: 'Saling... / Berbalasan... (melakukan aksi yang berlawanan secara bergantian)',
        en: '...and... (doing two opposite things alternately)',
        cn: '时而...时而... / 互相...'
      },
      examples: [
        '彼は花束を持って、彼女の家の前を行きつ戻りつした。',
        '昨日のマラソンでは、2人の選手が最後まで抜きつ抜かれつトップ争いをしていた。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '今朝から雪が（ ）を繰り返している。',
        options: ['1 降るならやみ、降るならやみ', '2 降ってはやみ、降ってはやみ'],
        correct: 1
      },
      {
        question: '彼と私は、学生時代、（ ）成績を争ったものだ。',
        options: ['1 抜こうが抜かれまいが', '2 抜きつ抜かれつ'],
        correct: 1
      },
      {
        question: '若いころは、お酒を（ ）語ったものだ。',
        options: ['1 飲んでは', '2 飲もうとして'],
        correct: 0
      },
      {
        question: '学んだことを（ ）を繰り返している。',
        options: ['1 覚えるし忘れ、覚えるし忘れ', '2 覚えては忘れ、覚えては忘れ'],
        correct: 1
      },
      {
        question: '遅刻したと言っても、電車の事故（ ）仕方がない。',
        options: ['1 では', '2 ならで'],
        correct: 0
      },
      {
        question: 'この作文、ひどいね。間違いが ___ ___ ★ ___ 直してもよくならないよ。',
        options: ['1 多く', '2 少しぐらい', '3 ては', '4 こんなに'],
        correct: '4-1-3-2',
        fullSentence: 'この作文、ひどいね。間違いが【 4 こんなに 】【 1 多く 】【 3★ ては 】【 2 少しぐらい 】直してもよくならないよ。'
      },
      {
        question: 'バーゲン会場は、___ ___ ★ ___ 息苦しくなるほどだった。',
        options: ['1 押しつ押されつ', '2 で', '3 の', '4 大混雑'],
        correct: '1-3-4-2',
        fullSentence: 'バーゲン会場は、【 1 押しつ押されつ 】【 3 の 】【 4★ 大混雑 】【 2 で 】息苦しくなるほどだった。'
      }
    ]
  }
};