window.W1H7 = {
    title: "７日目 実戦問題 (Ujian Minggu 1)",
    grammar: [], // Kosong karena ini hari ujian
    exam: `
        <div class="exam-q">
            <h3>問題１ 次の文の（ ）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。</h3>
            <p>1. 彼のゴルフの腕はなかなかのものだが、プロの（ ）、まだまだだ。<br>
            <button>1 私が言うのは</button> <button onclick="alert('Benar! 2')">2 私から言わせれば</button> <button>3 私に言われると</button> <button>4 私から言っては</button></p>
            
            <p>2. まじめな彼女（ ）、無断で休むということはないでしょう。<br>
            <button>1 としているから</button> <button>2 としたところで</button> <button>3 に言わせれば</button> <button onclick="alert('Benar! 4')">4 のことだから</button></p>
            
            <p>3. ぼくの貯金は（ ）、増えることはない。<br>
            <button>1 減るることにして</button> <button>2 減らずとみえて</button> <button>3 減ることのないように</button> <button onclick="alert('Benar! 4')">4 減りこそすれ</button></p>
            
            <p>4. 無駄な道路工事をする（ ）減税してほしい。<br>
            <button onclick="alert('Benar! 1')">1 くらいなら</button> <button>2 ものならば</button> <button>3 とみると</button> <button>4 こそあれ</button></p>
            
            <p>5. 練習（ ）、どんなスポーツも上達することはない。<br>
            <button onclick="alert('Benar! 1')">1 することなしに</button> <button>2 しなかったことにして</button> <button>3 するとみえずに</button> <button>4 しないところを</button></p>
            
            <p>6. 今年は消費税の値上げはない（ ）が、来年あたりはあるかもしれない。<br>
            <button onclick="alert('Benar! 1')">1 とされている</button> <button>2 とさせられている</button> <button>3 ものになっている</button> <button>4 ものだとしたところ</button></p>
            
            <p>7. その会社は業績が悪い（ ）、あちこちの支店を閉店した。<br>
            <button onclick="alert('Benar! 1')">1 とみえて</button> <button>2 とみられて</button> <button>3 とさせて</button> <button>4 とさせられて</button></p>
            
            <p>8. 仕事といっても、月に２、３回（ ）ところです。<br>
            <button>1 ぐらいなら</button> <button>2 とみる</button> <button>3 こその</button> <button onclick="alert('Benar! 4')">4 という</button></p>
            
            <p>9. このきゅうりは、（ ）味は抜群にいい。<br>
            <button>1 形が悪いこそあれ</button> <button>2 形の悪さこそすれ</button> <button onclick="alert('Benar! 3')">3 形こそ悪いが</button> <button>4 形こそ悪さあれ</button></p>
            
            <p>10. この仕組みを（ ）無駄だよ。この会社は君が思う以上に保守的だから。<br>
            <button onclick="alert('Benar! 1')">1 変えようとしたって</button> <button>2 変えようとみると</button> <button>3 変えることなしに</button> <button>4 変えるとされても</button></p>

            <p>11. 今時、こんな古い洗濯機を使っているのは、うち（ ）。<br>
            <button>1 ぐらいのところだ</button> <button onclick="alert('Benar! 2')">2 ぐらいのものだ</button> <button>3 ぐらいだとしている</button> <button>4 ぐらいだとされている</button></p>

            <p>12. 高速料金の割引で、今度の連休は例年以上に渋滞する（ ）。<br>
            <button>1 ものとしている</button> <button>2 ところだとみえる</button> <button onclick="alert('Benar! 3')">3 とみられている</button> <button>4 としたところだ</button></p>

            <p>13. 契約書は双方がそれぞれ保管する（ ）。<br>
            <button>1 ようとする</button> <button onclick="alert('Benar! 2')">2 ものとする</button> <button>3 ぐらいになる</button> <button>4 こととみる</button></p>

            <p>14. 過去の失敗は過ぎたものとして（ ）。<br>
            <button>1 どうしても覚えているものだ</button> <button>2 思い出そうとしても思い出せない</button> <button>3 思い出さずにはいられない</button> <button onclick="alert('Benar! 4')">4 忘れてしまうほうがいい</button></p>

            <p>15. 寝ないでやったところで、（ ）。<br>
            <button>1 疲れすぎて熟睡できないだろう</button> <button onclick="alert('Benar! 2')">2 それを完成させるのは不可能だろう</button> <button>3 もう少し長く続けることができるだろう</button> <button>4 なんとかそれを仕上げることができるだろう</button></p>
        </div>

        <div class="exam-q">
            <h3>問題２ 次の文の <u> ★ </u> に入る最もよいものを、１・２・３・４から一つ選びなさい。</h3>
            <p>16. <u> 外食した </u> <u> ことにして </u> <u> ★ (その分を貯めた) </u> <u> とすれば </u> かなりの額になるだろう。<br>
            <button onclick="alert('Benar! 1 (Urutan: 4->2->1->3)')">1 その分を貯めた</button> <button>2 ことにして</button> <button>3 とすれば</button> <button>4 外食した</button></p>

            <p>17. その政治家は、国民の信頼を <u> 裏切ったりする </u> <u> ことの </u> <u> ★ (ないように) </u> <u> 心がける </u> ことを約束した。<br>
            <button>1 ことの</button> <button>2 裏切ったりする</button> <button>3 心がける</button> <button onclick="alert('Benar! 4 (Urutan: 2->1->4->3)')">4 ないように</button></p>

            <p>18. 彼は簡単だと <u> 言うが </u> <u> やったことがない </u> <u> ★ (私に) </u> <u> 言わせれば </u>、不可能としか思えない。<br>
            <button>1 言うが</button> <button onclick="alert('Benar! 2 (Urutan: 1->3->2->4)')">2 私に</button> <button>3 やったことがない</button> <button>4 言わせれば</button></p>

            <p>19. 留学生の多くが、程度の違い <u> こそあれ </u> <u> 言葉の問題 </u> <u> ★ (に悩まされている) </u> <u> とみえる </u>。<br>
            <button>1 とみえる</button> <button onclick="alert('Benar! 2 (Urutan: 4->3->2->1)')">2 に悩まされている</button> <button>3 言葉の問題</button> <button>4 こそあれ</button></p>

            <p>20. うちの息子は <u> 天気が悪い </u> <u> とみると </u> <u> ★ (学校へ行く) </u> <u> 気が失せる </u> ようで困ったものだ。<br>
            <button>1 天気が悪い</button> <button>2 気が失せる</button> <button>3 とみると</button> <button onclick="alert('Benar! 4 (Urutan: 1->3->4->2)')">4 学校へ行く</button></p>
        </div>

        <div class="exam-q">
            <h3>問題３ 次の文章を読んで、[ 21 ] から [ 25 ] の中に入る最もよいものを、１・２・３・４から一つ選びなさい。</h3>
            <div class="reading-box">
                相撲の世界は大変厳しいものである。日本古来の伝統を重んじる縦社会の中で、しきたりを学びながら激しい稽古を積む <strong>[ 21 ]</strong>、上に上がっていくことはできない。<br><br>
                しかし、全体で700名余りいる力士の中で「関取」と呼ばれる十両格以上に上がれる者はわずか1割 <strong>[ 22 ]</strong>。それでもこの関取 <strong>[ 23 ]</strong>、世間で一人前の力士として認められるのである。<br><br>
                中には、そんな下働きや苦労を何年もする <strong>[ 24 ]</strong> 別の道を選んだほうがいいと、途中でその道をあきらめてしまう者も少なくない。年配の人に言わせれば、そのくらいの苦労は何でもないと一蹴されそうだが、現代の若者にとっては想像以上のつらい生活なのだろう。<br><br>
                だからこそこういった困難を乗り越えて、関取の地位を手にした力士には本当に <strong>[ 25 ]</strong>。
            </div>
            <p>21. <button>1 にしたって</button> <button>2 ものとなく</button> <button>3 とみると</button> <button onclick="alert('Benar! 4')">4 ことなしに</button></p>
            <p>22. <button>1 としているものだ</button> <button onclick="alert('Benar! 2')">2 といったところだ</button> <button>3 とさせられている</button> <button>4 ということにしている</button></p>
            <p>23. <button onclick="alert('Benar! 1')">1 になってこそ</button> <button>2 にしたらこそ</button> <button>3 のことだから</button> <button>4 とされているから</button></p>
            <p>24. <button onclick="alert('Benar! 1')">1 くらいなら</button> <button>2 ものとして</button> <button>3 ところで</button> <button>4 ところを</button></p>
            <p>25. <button>1 感心される</button> <button onclick="alert('Benar! 2')">2 感心させられる</button> <button>3 感心だとされている</button> <button>4 感心とされている</button></p>
        </div>
        
        <div class="keigo-box">
            <h4>敬語① 貴・尊・高 ー尊敬語ー</h4>
            <p>これらは、相手に関する語について、尊敬の意味を表します。</p>
            <ul>
                <li><strong>貴社（＝御社）</strong>：貴社のご発展を祈ります。（＝あなたの会社）</li>
                <li><strong>貴校</strong>：貴校を志望した理由は……（＝あなたの学校）</li>
                <li><strong>尊父</strong>：御尊父によろしくお伝えください。（＝あなたのお父さん）</li>
                <li><strong>高説</strong>：御高説を拝聴いたしました。（＝あなたの話）</li>
            </ul>
        </div>
    `
};