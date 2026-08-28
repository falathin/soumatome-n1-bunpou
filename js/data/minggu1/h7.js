// Data and interactive logic for Day 7: Jissen Mondai (Full Exam - 25 Questions)
window.W1H7 = {
    title: "７日目 実戦問題 (Ujian Minggu 1)",
    grammar: [], // Kosong karena ini hari ujian
    exam: `
        <div class="exam-container">
            <div class="exam-q">
                <h3>問題１ 次の文の（ ）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。</h3>
                <p>1. 彼のゴルフの腕はなかなかのものだが、プロの（ ）、まだまだだ。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">1 私が言うのは</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (私から言わせれば)')">2 私から言わせれば</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">3 私に言われると</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">4 私から言っては</button></p>
                
                <p>2. まじめな彼女（ ）、無断で休むということはないでしょう。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">1 としているから</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">2 としたところで</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">3 に言わせれば</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (のことだから)')">4 のことだから</button></p>
                
                <p>3. ぼくの貯金は（ ）、増えることはない。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">1 減るることにして</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">2 減らずとみえて</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">3 減ることのないように</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (減りこそすれ)')">4 減りこそすれ</button></p>
                
                <p>4. 無駄な道路工事をする（ ）減税してほしい。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (くらいなら)')">1 くらいなら</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">2 ものならば</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">3 とみると</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">4 こそあれ</button></p>
                
                <p>5. 練習（ ）、どんなスポーツも上達することはない。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (することなしに)')">1 することなしに</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">2 しなかったことにして</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">3 するとみえずに</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">4 しないところを</button></p>
                
                <p>6. 今年は消費税の値上げはない（ ）が、来年あたりはあるかもしれない。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (とされている)')">1 とされている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">2 とさせられている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">3 ものになっている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">4 ものだとしたところ</button></p>
                
                <p>7. その会社は業績が悪い（ ）、あちこちの支店を閉店した。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (とみえて)')">1 とみえて</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">2 とみられて</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">3 とさせて</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">4 とさせられて</button></p>
                
                <p>8. 仕事といっても、月に２、３回（ ）ところです。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">1 ぐらいなら</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">2 とみる</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">3 こソの</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (という)')">4 という</button></p>
                
                <p>9. このきゅうりは、（ ）味は抜群にいい。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">1 形が悪いこそあれ</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">2 形の悪さこそすれ</button> 
                <button class="exam-btn" onclick="alert('Benar! 3 (形こそ悪いが)')">3 形こそ悪いが</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">4 形こそ悪さあれ</button></p>
                
                <p>10. この仕組みを（ ）無駄だよ。この会社は君が思う以上に保守的だから。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (変えようとしたって)')">1 変えようとしたって</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">2 変えようとみると</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">3 変えることなしに</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 1')">4 変えるとされても</button></p>

                <p>11. 今時、こんな古い洗濯機を使っているのは、うち（ ）。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">1 ぐらいのところだ</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (ぐらいのものだ)')">2 ぐらいのものだ</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">3 ぐらいだとしている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">4 ぐらいだとされている</button></p>

                <p>12. 高速料金の割引で、今度の連休は例年以上に渋滞する（ ）。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">1 ものとしている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">2 ところだとみえる</button> 
                <button class="exam-btn" onclick="alert('Benar! 3 (とみられている)')">3 とみられている</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 3')">4 としたところだ</button></p>

                <p>13. 契約書は双方がそれぞれ保管する（ ）。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">1 ようとする</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (ものとする)')">2 ものとする</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">3 ぐらいになる</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">4 こととみる</button></p>

                <p>14. 過去の失敗は過ぎたものとして（ ）。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">1 どうしても覚えているものだ</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">2 思い出そうとしても思い出せない</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 4')">3 思い出さずにはいられない</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (忘れてしまうほうがいい)')">4 忘れてしまうほうがいい</button></p>

                <p>15. 寝ないでやったところで、（ ）。<br>
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">1 疲れすぎて熟睡できないだろう</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (それを完成させるのは不可能だろう)')">2 それを完成させるのは不可能だろう</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">3 もう少し長く続けることができるだろう</button> 
                <button class="exam-btn" onclick="alert('Salah! Jawabannya 2')">4 なんとかそれを仕上げることができるだろう</button></p>
            </div>

            <div class="exam-q">
                <h3>問題２ 次の文の <u> ★ </u> に入る最もよいものを、１・２・３・４から一つ選びなさい。</h3>
                <p>16. <u> 外食した </u> <u> ことにして </u> <u> ★ (その分を貯めた) </u> <u> とすれば </u> かなりの額になるだろう。<br>
                <button class="exam-btn" onclick="alert('Benar! 1 (Urutan: 4->2->1->3)')">1 その分を貯めた</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 ことにして</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 とすれば</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 外食した</button></p>

                <p>17. その政治家は、国民の信頼を <u> 裏切ったりする </u> <u> ことの </u> <u> ★ (ないように) </u> <u> 心がける </u> ことを約束した。<br>
                <button class="exam-btn" onclick="alert('Salah!')">1 ことの</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 裏切ったりする</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 心がける</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (Urutan: 2->1->4->3)')">4 ないように</button></p>

                <p>18. 彼は簡単だと <u> 言うが </u> <u> やったことがない </u> <u> ★ (私に) </u> <u> 言わせれば </u>、不可能としか思えない。<br>
                <button class="exam-btn" onclick="alert('Salah!')">1 言うが</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (Urutan: 1->3->2->4)')">2 私に</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 やったことがない</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 言わせれば</button></p>

                <p>19. 留学生の多くが、程度の違い <u> こそあれ </u> <u> 言葉の問題 </u> <u> ★ (に悩まされている) </u> <u> とみえる </u>。<br>
                <button class="exam-btn" onclick="alert('Salah!')">1 とみえる</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (Urutan: 4->3->2->1)')">2 に悩まされている</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 言葉の問題</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 こそあれ</button></p>

                <p>20. うちの息子は <u> 天気が悪い </u> <u> とみると </u> <u> ★ (学校へ行く) </u> <u> 気が失せる </u> ようで困ったものだ。<br>
                <button class="exam-btn" onclick="alert('Salah!')">1 天気が悪い</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 気が失せる</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 とみると</button> 
                <button class="exam-btn" onclick="alert('Benar! 4 (Urutan: 1->3->4->2)')">4 学校へ行く</button></p>
            </div>

            <div class="exam-q">
                <h3>問題３ 次の文章を読んで、[ 21 ] から [ 25 ] の中に入る最もよいものを、１・２・３・４から一つ選びなさい。</h3>
                <p>相撲の世界は大変厳しいものである。日本古来の伝統を重んじる縦社会の中で、しきたりを学びながら激しい稽古を積む <strong>[ 21 ]</strong>、上に上がっていくことはできない。<br><br>
                しかし、全体で700人ほどいる力士の中で、幕内と呼ばれる上位42人に残れるのはごくわずかな人間だけである。毎日のように厳しい稽古に耐え抜いた <strong>[ 22 ]</strong>、けがや不振に泣く力士も少なくない。<br><br>
                ある力士は、「若いころは無理をしても体がついてきたが、この年齢 <strong>[ 23 ]</strong>、無理がきかなくなってきた」と語る。それでも土俵に立ち続けるのは、相撲に対する強い誇りと情熱があるからにほかならない。<br><br>
                ファンにとっても、力士たちの白熱した取組を見る <strong>[ 24 ]</strong>、日々のストレスや疲れが吹き飛ぶ思いがするものだ。勝負の世界の厳しさと美しさが共存する相撲は、これからも多くの人々を魅了し続ける <strong>[ 25 ]</strong>。</p>

                <p><strong>[ 21 ]</strong><br>
                <button class="exam-btn" onclick="alert('Benar! 1 (ことなしには)')">1 ことなしには</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 ことにすると</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 ことなく</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 こととて</button></p>

                <p><strong>[ 22 ]</strong><br>
                <button class="exam-btn" onclick="alert('Salah!')">1 ものだから</button> 
                <button class="exam-btn" onclick="alert('Benar! 2 (ものの)')">2 ものの</button> 
                <button class="exam-btn" onclick="alert('Salah!')">3 ものとする</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 ものの、それから</button></p>

                <p><strong>[ 23 ]</strong><br>
                <button class="exam-btn" onclick="alert('Salah!')">1 くらいなら</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 こそあれ</button> 
                <button class="exam-btn" onclick="alert('Benar! 3 (ともなると / とあって)')">3 とあって</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 ともなると</button></p>

                <p><strong>[ 24 ]</strong><br>
                <button class="exam-btn" onclick="alert('Salah!')">1 ものの</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 ことなしに</button> 
                <button class="exam-btn" onclick="alert('Benar! 3 (ものなら / とみると / とあれば)')">3 とあれば</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 とすると</button></p>

                <p><strong>[ 25 ]</strong><br>
                <button class="exam-btn" onclick="alert('Salah!')">1 ことだろう</button> 
                <button class="exam-btn" onclick="alert('Salah!')">2 べきではない</button> 
                <button class="exam-btn" onclick="alert('Benar! 3 (にちがいない / ものだ)')">3 にちがいない</button> 
                <button class="exam-btn" onclick="alert('Salah!')">4 ほかはない</button></p>
            </div>
        </div>
    `
};