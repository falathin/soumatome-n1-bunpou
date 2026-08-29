
window.W2H6 = {
  title: '6日目 いつまで続くのやら',
  grammar: [
    {
      id: 'w2_d6_1',
      rule: '〜とも〜とも',
      formal: false,
      explanation: '(= いい・悪いと決めることはできない) 【〜とも〜とも】 Nとも / V/A/na/N(普)とも ＋ 言えない / つかない (※「何も言わない・何もわからない」等の意味)',
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
      explanation: '(= 〜あるのはいいが、その場合は...) VたらVたで / AかったらAかったで / AかったらAいで / naならnaで / NならNで (※否定形も使う)',
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
      explanation: '(= 〜喜ぶべきなのか悲しむべきなのかどちらとも言えない / 〜いつまで続くのかわからない) 【〜のやら(〜のやら) / 〜ものやら / 〜ことやら】 V/A(普) / na/Nな ＋ のやら',
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
        options: ['暇なのやら忙しいのやら', '暇とも忙しいとも'],
        correct: 0
      },
      {
        question: 'ペットは（ ）大変だけれど、ペットのいない生活は考えられない。',
        options: ['いるともいないとも言えなくて', 'いたらいたで'],
        correct: 1
      },
      {
        question: '会社が倒産しそうだ。（ ）ことやら……。',
        options: ['何をする', 'どうなる'],
        correct: 1
      },
      {
        question: '彼は（ ）言えるが、とにかく口数が少ない。',
        options: ['おとなしいとも従順だとも', 'おとなしいのやら消極的なのやらと'],
        correct: 0
      },
      {
        question: '（ ）、はっきり言ってください。',
        options: ['いやならいやで', 'いやともいやじゃないとも'],
        correct: 0
      },
      {
        question: '「ピザ屋のチラシ、どこにある？ ___ ___ ___ ___ 。」',
        options: ['1 捨てた', '2 でいいの', '3 だけど', '4 捨てたら'],
        correct: '4-1-2-3'
      },
      {
        question: 'この仕事は、いつ ___ ___ ___ ___ もつかない。',
        options: ['1 終わる', '2 になったら', '3 見当', '4 ことやら'],
        correct: '2-1-4-3'
      }
    ]
  }
};
