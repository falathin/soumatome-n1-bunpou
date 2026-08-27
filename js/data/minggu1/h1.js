window.W1H1 = {
    title: "1日目 感謝こそすれ",
    grammar: [
        {
            id: "w1_d1_1", rule: "〜てこそ", formal: false,
            explanation: "(= Vて はじめて) 過去のことには使えない。",
            meaning: { id: "Hanya setelah (melakukan sesuatu), barulah bisa...", en: "Only after doing... can one...", cn: "只有...才能..." },
            examples: [
                "親になってこそ、親の苦労や気持ちがわかるものだ。",
                "生活費を自分で稼いでこそ、自立していると言える。",
                "大きな失敗をしてこそ、人は成長できるのだ。"
            ]
        },
        {
            id: "w1_d1_2", rule: "〜こそあれ", formal: true,
            explanation: "(= 〜はあるけれど) Nこそあれ / naでこそあれ",
            meaning: { id: "Meskipun ada / walaupun...", en: "Although there is...", cn: "虽然有...但是..." },
            examples: [
                "苦労こそあれ、介護の仕事はやりがいがある。",
                "彼の日本語は小さい間違いこそあれ、ほとんど完璧だ。",
                "古さこそあれ、この家はとても頑丈で住みやすい。"
            ]
        },
        {
            id: "w1_d1_3", rule: "〜こそすれ", formal: true,
            explanation: "(= 〜はしているけれど、絶対に〜ない) 後文が「絶対〜ではない」という強調。",
            meaning: { id: "Sama sekali tidak... yang ada justru...", en: "May do..., but definitely not...", cn: "只有...绝不..." },
            examples: [
                "あなたには感謝こそすれ、恨んでなどいません。",
                "白髪はふつう増えこそすれ、減ることはない。",
                "彼女は笑いこそすれ、他人を怒ることは絶対にない。"
            ]
        },
        {
            id: "w1_d1_4", rule: "〜こそ悪いが…", formal: false,
            explanation: "Nこそ [〜が… / 〜けれど…]",
            meaning: { id: "Memang buruk di aspek X, tetapi...", en: "It may be bad in terms of X, but...", cn: "虽然...不好，但是..." },
            examples: [
                "父の料理は見ためこそ悪いが、とてもいい味をしている。",
                "このキノコは色と形こそきれいだが、毒があって食べることはできない。",
                "交通の便こそ悪いが、とても静かで環境のいい場所だ。"
            ]
        }
    ],
    exam: `<div class="exam-q"><strong>練習I</strong><br>1. その国で生活（<button onclick="alert('Benar! -> してこそ')">a. してこそ</button> / b. したこそ）文化がわかるというものだ。<br>2. 程度の違いこそ（<button onclick="alert('Benar! -> あれ')">a. あれ</button> / b. すれ）、悪いことをしたのは皆同じだ。</div>`
};