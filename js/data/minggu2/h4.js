window.W2H4 = {
  title: '4日目 デザインといい、色といい',
  grammar: [
    {
      id: 'w2_d4_1',
      rule: '〜だの〜だの',
      formal: false,
      conjunction: '普通形 + だの',
      explanation:
        '【接続】動詞・い形容詞の普通形 ＋ だの ／ な形容詞・名詞＋だの\n【意味・解説】「〜やら〜やら」と同様に例を挙げる表現だが、話し手の「不満・あきれ・うんざりした気持ち」が強く含まれることが多い。',
      meaning: {
        id: '...lah, ...lah (dan keluhan sejenisnya)',
        en: '...and... (and so on) [often used for complaints]',
        cn: '...啦...啦（多用于抱怨）'
      },
      examples: [
        '僕の毎月の小遣いは、雑誌だのDVDだので消えていく。',
        '彼は部屋が狭いだの、食事がまずいだのといつも文句を言っている。',
        '彼は、風邪を引いただの、頭が痛いだのと言って、よく授業を休む。'
      ]
    },
    {
      id: 'w2_d4_2',
      rule: '〜といい〜といい',
      formal: false,
      conjunction: 'N1 + といい + N2 + といい',
      explanation:
        '【接続】名詞1 ＋ といい ＋ 名詞2 ＋ といい\n【意味・解説】「〜を見ても〜を見ても、どちらをとっても…だ」という意味。挙げられた例をもとに、全体に対して評価（感心やあきれなど）を述べる。',
      meaning: {
        id: 'Baik... maupun... (keduanya sama-sama memiliki karakteristik X)',
        en: 'Both... and... / Not only... but also...',
        cn: '无论...还是...都...'
      },
      examples: [
        'デザインといい、色といい、すごく気に入った靴があったんだけど、サイズがなかった。',
        '運動といい勉強といい、僕は何をやってもダメだ。'
      ]
    },
    {
      id: 'w2_d4_3',
      rule: '〜が〜なら、〜も〜だ',
      formal: false,
      conjunction: 'N1 + が + N1 + なら、 + N2 + も + N2 + だ',
      explanation:
        '【接続】名詞1 ＋ が ＋ 名詞1 ＋ なら、＋ 名詞2 ＋ も ＋ 名詞2 ＋ だ\n【意味・解説】「一方も良くないが、もう一方も同様に良くない」と、両者とも批判されるべき状態・関係にあることを表す慣用的な表現。',
      meaning: {
        id: 'Karena (subjek pertama) buruk, maka (subjek kedua) juga buruk (keduanya sama-sama parah)',
        en: 'Like (bad) father, like (bad) son / Both X and Y are terrible',
        cn: '...不好，...也不好（有其父必有其子）'
      },
      examples: [
        '子どもが子どもなら、親も親だ。',
        'あのレストランは、味も味なら、サービスもサービスだ。'
      ]
    },
    {
      id: 'w2_d4_4',
      rule: '〜といわず〜といわず',
      formal: false,
      conjunction: 'N1 + といわず + N2 + といわず',
      explanation:
        '【接続】名詞1 ＋ といわず ＋ 名詞2 ＋ といわず\n【意味・解説】「〜も〜も区別なく、すべて／どこもかしこも」という意味。全体にその状態が及んでいることを強める。',
      meaning: {
        id: 'Tanpa membedakan... maupun... (semuanya)',
        en: 'Not to mention... or... / Whether... or... (all inclusive)',
        cn: '不管是...还是...（都）'
      },
      examples: [
        '日本人は、子どもといわず、大人といわず、マンガをよく読む。',
        '私は、牛肉といわず、豚肉といわず、肉は食べません。',
        '最近の若者は、食事中といわず、テレビを見ている間といわず、いつでも携帯電話を手にしている。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: '彼女はまだ若いけれど、（ ）申し分のない女性だ。',
        options: ['1 経験といい能力といい', '2 経験だの能力だの'],
        correct: 0
      },
      {
        question: '猫に（ ）引っかかれてしまった。',
        options: ['1 顔なり手なり', '2 顔といわず手といわず'],
        correct: 1
      },
      {
        question: 'こんなつまらない商品を、売るほうも売るほう（ ）買うほうも買うほうだ。',
        options: ['1 なら', '2 だろうが'],
        correct: 0
      },
      {
        question: '彼は、（ ）何かしら口に入れている。',
        options: ['1 ガムだのあめだの', '2 ガムなりあめなり'],
        correct: 0
      },
      {
        question: 'A「あの人、田中さんのお母さんだよね。派手だね。」\nB「（ ）。」',
        options: ['1 娘が娘なら母親も母親だね', '2 娘といい母親といい派手なんだね'],
        correct: 0
      },
      {
        question: '姉がデザインが ___ ___ ★ ___ バッグをずっと使っている。',
        options: ['1 くれた', '2 色が気に入らないだの', '3 古いだの', '4 といって'],
        correct: '3-2-4-1',
        fullSentence: '姉がデザインが【 3 古いだの 】【 2 色が気に入らないだの 】【 4★ といって 】【 1 くれた 】バッグをずっと使っている。'
      },
      {
        question: '彼は学校の ___ ___ ★ ___ から女の子に全然もてない。',
        options: ['1 しない', '2 成績といい', '3 パッと', '4 容姿といい'],
        correct: '2-4-3-1',
        fullSentence: '彼は学校の【 2 成績といい 】【 4 容姿といい 】【 3★ パッと 】【 1 しない 】から女の子に全然もてない。'
      }
    ]
  }
};