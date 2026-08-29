window.W7H2 = {
  title: '2日目 思い出すだに',
  grammar: [
    {
      id: 'w7_d2_1',
      rule: '〜にして（初めて）',
      formal: true,
      explanation: '(= 〜のときに、初めて) Menunjukkan kondisi khusus atau waktu tertentu yang baru bisa tercapai.',
      meaning: {
        id: 'Baru pada usia / baru setelah...',
        en: 'Only at (age/time)... / Only by doing...',
        cn: '到了...才... / 只有在...才...'
      },
      examples: [
        '40歳にして初めて車の免許を取った。',
        'この改革は、あの政治家にして初めてできたことだ。'
      ]
    },
    {
      id: 'w7_d2_2',
      rule: '〜もしないで',
      formal: false,
      explanation: '(= 少しもしないで) Melakukan sesuatu tanpa melakukan hal dasar yang seharusnya.',
      meaning: {
        id: 'Tanpa bahkan melakukan...',
        en: 'Without even doing...',
        cn: '连...都不做就...'
      },
      examples: [
        '知りもしないで軽そうなことを言うな。',
        '彼は、いつもやりもしないで、できないと言う。'
      ]
    },
    {
      id: 'w7_d2_3',
      rule: '〜だに / Vるだに',
      formal: true,
      explanation: '(= 〜するだけで) Hanya dengan membayangkan atau memikirkan saja sudah...',
      meaning: {
        id: 'Hanya dengan... saja sudah...',
        en: 'Even just...ing...',
        cn: '仅仅...就...'
      },
      examples: [
        'この間の彼女の態度は、思い出すだに腹が立つ。',
        '地下鉄に乗っているときに大地震が起きたらどうなるだろう。想像するだに恐ろしい。',
        'そんなこと、夢にだに思わない。'
      ]
    },
    {
      id: 'w7_d2_4',
      rule: '〜こととて',
      formal: true,
      explanation: '(= 〜ないから / 〜なので) Ungkapan formal untuk menyatakan alasan.',
      meaning: {
        id: 'Karena (alasan tertentu)...',
        en: 'Because of...',
        cn: '因为...'
      },
      examples: [
        '新入社員で慣れぬこととて、失礼があればお許しください。',
        '年末年始は休業中のこととて、この時期の依頼にはすぐに対応できない。'
      ]
    }
  ],
  exam: {
    type: 'quiz',
    questions: [
      {
        question: 'まだ検討中の（a. こととて b. だに）、はっきりととしたお返事はできません。',
        options: ['a', 'b'],
        correct: 0
      },
      {
        question: 'あんな大きい会社の倒産は、誰もが想像（a. だに b. にして）しなかった。',
        options: ['a', 'b'],
        correct: 0
      },
      {
        question: 'これほどの安売りは、現金取引（a. にして b. だに）初めて可能になることだ。',
        options: ['a', 'b'],
        correct: 0
      },
      {
        question: '彼は、授業に遅れてきたのに謝り（a. はしないで b. もしないで）席に着いた。',
        options: ['b', 'a'],
        correct: 1
      },
      {
        question: '外国人と結婚するなんて、夢（a. にして b. だに）思わなかった。',
        options: ['b', 'a'],
        correct: 1
      },
      {
        question: 'その女優さんは、彼女に ___ ___ ___ ___ 行ってしまった。',
        options: ['1 声をかけた', '2 もしないで', '3 見向き', '4 ファンに'],
        correct: '4-3-2-1'
      },
      {
        question: '彼女はまだ ___ ___ ___ ___ やってください。',
        options: ['1 初心者', '2 多少の失敗は', '3 大目見て', '4 のこととて'],
        correct: '1-4-3-2'
      }
    ]
  }
};