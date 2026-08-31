window.W2H6 = {
  title: '6日目 いつまで続くのやら',
  grammar: [
    {
      id: 'w2_d6_1',
      rule: '〜とも〜とも',
      formal: false,
      conjunction: 'N / 普通形 + とも',
      explanation:
        '【接続】名詞 ＋ とも ／ 動詞・形容詞の普通形 ＋ とも（＋ 言えない／つかない 等）\n【意味・解説】「AともBとも判断がつかない／言えない」と、どちらか一方に決められない曖昧・判断不能な状態を表す。',
      meaning: {
        id: 'Tidak bisa dibilang... atau... (sulit dipastikan)',
        en: 'Cannot be said to be... or...',
        cn: '既不能说是...也不能说是...'
      },
      examples: [
        '最近のゲームは、子どもにいいとも悪いとも言えない。あるものは脳の発達に効果があるらしい。',
        'これは本物とも偽物とも判断ができない。'
      ]
    },
    {
      id: 'w2_d6_2',
      rule: '〜たら〜たで',
      formal: false,
      conjunction: 'V-たらV-たで / A-かったらA-かったで / Na-ならNa-で / N-ならN-で',
      explanation:
        '【接続】動詞たら形 ＋ 動詞た形 ＋ で ／ い形容詞かったら ＋ い形容詞かった（／いで） ＋ で ／ な形容詞・名詞なら ＋ な形容詞・名詞 ＋ で\n【意味・解説】「仮に〜の状況になればなったで、それ相応の苦労・問題・対応が必要になる」という意味を表す。',
      meaning: {
        id: 'Kalau ada/terjadi, maka ada masalahnya sendiri / Bahkan jika...',
        en: 'If (it happens), then (it has its own issues)',
        cn: '就算...也... / 有了...就有...的烦恼'
      },
      examples: [
        '庭があったらあったで、草むしりが大変だ。',
        '便せんがなかったらないで、コピー用紙でもかまいません。'
      ]
    },
    {
      id: 'w2_d6_3',
      rule: '〜のやら〜のやら',
      formal: false,
      conjunction: '普通形（Na/N-な） + のやら',
      explanation:
        '【接続】動詞・い形容詞の普通形 ＋ のやら ／ な形容詞・名詞＋な ＋ のやら\n【意味・解説】「〜なのか〜なのか分からず迷う／どうなるのか疑問・不安に思う」という話し手の割り切れない気持ちや推測を表す。',
      meaning: {
        id: 'Entah... entah... / Entah apa/bagaimana (menunjukkan ketidakpastian/keraguan)',
        en: 'I wonder if... or... / I wonder what/how...',
        cn: '不知道是...还是... / 不知...'
      },
      examples: [
        '喜んでいいのやら悲しんでいいのやら、最近仕事の依頼が多く、趣味の時間がまったく取れない。',
        'この不景気はいつまで続くのやら。',
        '言葉も話せないのに、来年1年間オーストラリアに行くことになった。どうなることやら。',
        '奥さんを病気で亡くした彼に、どう声をかけたらいいものやら。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '仕事がないので毎日友達と遊んでいる。（ ）。',
        options: ['1 暇なのやら忙しいのやら', '2 暇とも忙しいとも'],
        correct: 0
      },
      {
        question: 'ペットは（ ）大変だけれど、ペットのいない生活は考えられない。',
        options: ['1 いるともいないとも言えなくて', '2 ったらいたで'],
        correct: 1
      },
      {
        question: '会社が倒産しそうだ。（ ）ことやら……。',
        options: ['1 何をする', '2 どうなる'],
        correct: 1
      },
      {
        question: '彼は（ ）言えるが、とにかく口数が少ない。',
        options: ['1 おとなしいとも従順だとも', '2 おとなしいのやら消極的なのやらと'],
        correct: 0
      },
      {
        question: '（ ）、はっきり言ってください。',
        options: ['1 いやならいやで', '2 いやともいやじゃないとも'],
        correct: 0
      },
      {
        question: '「ピザ屋のチラシ、どこにある？ ___ ___ ★ ___ 。」',
        options: ['1 捨てた', '2 でいいの', '3 だけど', '4 捨てたら'],
        correct: '4-1-2-3',
        fullSentence: '「ピザ屋のチラシ、どこにある？【 4 捨てたら 】【 1 捨てた 】【 2★ でいいの 】【 3 だけど 】。」'
      },
      {
        question: 'この仕事は、いつ ___ ___ ★ ___ もつかない。',
        options: ['1 終わる', '2 になったら', '3 見当', '4 ことやら'],
        correct: '2-1-4-3',
        fullSentence: 'この仕事は、いつ【 2 になったら 】【 1 終わる 】【 4★ ことやら 】【 3 見当 】もつかない。'
      }
    ]
  }
};