window.W3H7 = {
  title: '7日目 実戦問題 (Ujian Minggu 3)',

  grammar: [],

  exam: {
    type: 'quiz',

    questions: [

      /* =====================================================
         1
      ===================================================== */
      {
        question: '（ ）店を続ける気はないです。',

        options: [
          '1 損とはいえ',
          '2 損といえども',
          '3 損をするまでも',
          '4 損をしてまでも'
        ],

        correct: 3,

        explanation: {
          title: '～てまでも',

          correct: `
            <p><strong>Jawaban benar: 4. 損をしてまでも</strong></p>

            <p>
              <strong>～てまでも</strong> berarti:
              <strong>“bahkan sampai harus melakukan ...”</strong>
              dengan nuansa bahwa tindakan tersebut dilakukan
              untuk mencapai tujuan tertentu meskipun pengorbanannya besar.
            </p>

            <p>
              <strong>損をしてまでも店を続ける気はない</strong>
              berarti:
              <strong>“Saya tidak berniat mempertahankan toko ini bahkan sampai harus mengalami kerugian.”</strong>
            </p>
          `,

          usage: `
            <p>
              Pola ini menekankan besarnya pengorbanan
              yang sebenarnya tidak ingin dilakukan.
            </p>

            <p>
              無理をしてまでも参加する必要はない。
            </p>

            <p>
              → Tidak perlu sampai memaksakan diri hanya untuk ikut.
            </p>
          `,

          options: {
            0: `
              <strong>1. 損とはいえ</strong><br>
              <span>
                ～とはいえ berarti “meskipun dikatakan ...”.
                Tidak cocok dengan makna “sampai rela rugi”.
              </span>
            `,

            1: `
              <strong>2. 損といえども</strong><br>
              <span>
                ～といえども berarti “meskipun ...”.
                Bukan pola yang menunjukkan pengorbanan ekstrem.
              </span>
            `,

            2: `
              <strong>3. 損をするまでも</strong><br>
              <span>
                ～までも tanpa pola ～て biasanya bermakna
                “sampai-sampai perlu ...” dalam konteks lain.
                Struktur kalimat ini membutuhkan ～てまでも.
              </span>
            `,

            3: `
              <strong>4. 損をしてまでも</strong><br>
              <span>
                Benar. Menekankan bahwa seseorang tidak mau
                mempertahankan toko sampai harus mengalami kerugian.
              </span>
            `
          }
        }
      },


      /* =====================================================
         2
      ===================================================== */
      {
        question: '普段着はシンプルで（ ）。',

        options: [
          '1 丈夫なのに限る',
          '2 丈夫な限りだ',
          '3 丈夫に限らない',
          '4 丈夫に限ったことだ'
        ],

        correct: 0,

        explanation: {
          title: '～に限る',

          correct: `
            <p><strong>Jawaban benar: 1. 丈夫なのに限る</strong></p>

            <p>
              <strong>～に限る</strong> berarti:
              <strong>“tidak ada yang lebih baik daripada ...”</strong>
              atau “yang terbaik adalah ...”.
            </p>

            <p>
              <strong>普段着はシンプルで丈夫なのに限る</strong>
              berarti:
              “Untuk pakaian sehari-hari, yang terbaik adalah
              pakaian yang sederhana dan tahan lama.”
            </p>
          `,

          usage: `
            <p>
              Dipakai ketika memberikan rekomendasi atau pilihan
              yang dianggap paling baik.
            </p>

            <p>
              疲れたときは寝るに限る。
            </p>

            <p>
              → Kalau lelah, tidak ada yang lebih baik daripada tidur.
            </p>
          `,

          options: {
            0: `
              <strong>1. 丈夫なのに限る</strong><br>
              <span>
                Benar. Menyatakan bahwa pakaian sehari-hari paling baik
                jika sederhana dan tahan lama.
              </span>
            `,

            1: `
              <strong>2. 丈夫な限りだ</strong><br>
              <span>
                ～限りだ berarti “sangat ...” atau “sejauh ...”,
                bukan rekomendasi.
              </span>
            `,

            2: `
              <strong>3. 丈夫に限らない</strong><br>
              <span>
                Berarti “tidak terbatas pada tahan lama”.
                Maknanya berbeda.
              </span>
            `,

            3: `
              <strong>4. 丈夫に限ったことだ</strong><br>
              <span>
                Tidak membentuk pola yang tepat.
              </span>
            `
          }
        }
      },


      /* =====================================================
         3
      ===================================================== */
      {
        question: '病気（ ）、いつまでも仕事を休んではいられない。',

        options: [
          '1 といえず',
          '2 というまでもなく',
          '3 と思いきや',
          '4 とはいえ'
        ],

        correct: 3,

        explanation: {
          title: '～とはいえ',

          correct: `
            <p><strong>Jawaban benar: 4. とはいえ</strong></p>

            <p>
              <strong>～とはいえ</strong> berarti:
              <strong>“meskipun demikian”, “walaupun memang ...”</strong>.
            </p>

            <p>
              <strong>病気とはいえ、いつまでも仕事を休んではいられない</strong>
              berarti:
              “Walaupun sedang sakit, tidak bisa terus-menerus
              mengambil cuti dari pekerjaan.”
            </p>
          `,

          usage: `
            <p>
              Menunjukkan pertentangan antara fakta A
              dan tindakan/kesimpulan B.
            </p>

            <p>
              子供とはいえ、責任を取る必要がある。
            </p>

            <p>
              → Meskipun masih anak-anak, dia perlu bertanggung jawab.
            </p>
          `,

          options: {
            0: `
              <strong>1. といえず</strong><br>
              <span>
                ～といえず berarti “tidak dapat dikatakan ...”.
                Tidak sesuai.
              </span>
            `,

            1: `
              <strong>2. というまでもなく</strong><br>
              <span>
                Berarti “tidak perlu dikatakan lagi”.
                Tidak cocok dengan pertentangan.
              </span>
            `,

            2: `
              <strong>3. と思いきや</strong><br>
              <span>
                Berarti “ternyata di luar dugaan”.
                Tidak ada unsur kejutan dalam kalimat ini.
              </span>
            `,

            3: `
              <strong>4. とはいえ</strong><br>
              <span>
                Benar. Menunjukkan bahwa meskipun sakit,
                tetap ada kewajiban pekerjaan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         4
      ===================================================== */
      {
        question: 'その商品がヒットしたの（ ）、次々と類似品が発売された。',

        options: [
          '1 が最後',
          '2 を皮切りに',
          '3 や否や',
          '4 を思いきや'
        ],

        correct: 1,

        explanation: {
          title: '～を皮切りに',

          correct: `
            <p><strong>Jawaban benar: 2. を皮切りに</strong></p>

            <p>
              <strong>～を皮切りに</strong> berarti:
              <strong>“dimulai dari ... lalu diikuti oleh hal-hal lain secara berturut-turut.”</strong>
            </p>

            <p>
              <strong>その商品がヒットしたのを皮切りに、
              次々と類似品が発売された</strong>
              berarti:
              “Dimulai dari kesuksesan produk tersebut,
              produk-produk serupa kemudian diluncurkan satu demi satu.”
            </p>
          `,

          usage: `
            <p>
              Sering digunakan untuk rangkaian kejadian,
              peluncuran, acara, atau perkembangan yang dimulai
              dari satu peristiwa.
            </p>

            <p>
              東京を皮切りに全国でイベントを開催した。
            </p>

            <p>
              → Dimulai dari Tokyo, acara diadakan di seluruh negeri.
            </p>
          `,

          options: {
            0: `
              <strong>1. が最後</strong><br>
              <span>
                Tidak membentuk makna “dimulai dari”.
              </span>
            `,

            1: `
              <strong>2. を皮切りに</strong><br>
              <span>
                Benar. Menandai peristiwa pertama yang kemudian
                diikuti oleh kejadian serupa.
              </span>
            `,

            2: `
              <strong>3. や否や</strong><br>
              <span>
                ～や否や berarti “begitu A, langsung B”.
                Fokusnya pada waktu yang sangat berdekatan,
                bukan rangkaian peluncuran.
              </span>
            `,

            3: `
              <strong>4. を思いきや</strong><br>
              <span>
                Bentuk ini tidak tepat; ～と思いきや memiliki makna
                “ternyata di luar dugaan”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         5
      ===================================================== */
      {
        question: '近くまで来ましたので、ご挨拶（ ）お伺いしました。',

        options: [
          '1 かたがた',
          '2 かたわら',
          '3 ながら',
          '4 ながらも'
        ],

        correct: 0,

        explanation: {
          title: '～かたがた',

          correct: `
            <p><strong>Jawaban benar: 1. かたがた</strong></p>

            <p>
              <strong>～かたがた</strong> berarti:
              <strong>“sekaligus untuk tujuan lain”</strong>
              atau “sambil sekalian ...”.
            </p>

            <p>
              <strong>ご挨拶かたがたお伺いしました</strong>
              berarti:
              <strong>“Saya datang sekalian untuk menyampaikan salam.”</strong>
            </p>
          `,

          usage: `
            <p>
              Sangat formal dan umum dalam bahasa sopan,
              terutama ketika kunjungan dilakukan dengan dua tujuan.
            </p>

            <p>
              お礼かたがたご報告に伺いました。
            </p>

            <p>
              → Saya datang sekalian untuk menyampaikan laporan
              sebagai ucapan terima kasih.
            </p>
          `,

          options: {
            0: `
              <strong>1. かたがた</strong><br>
              <span>
                Benar. Menunjukkan dua tujuan kunjungan sekaligus.
              </span>
            `,

            1: `
              <strong>2. かたわら</strong><br>
              <span>
                ～かたわら berarti “di samping melakukan pekerjaan utama,
                juga melakukan ...”. Tidak cocok untuk kunjungan singkat.
              </span>
            `,

            2: `
              <strong>3. ながら</strong><br>
              <span>
                ～ながら berarti “sambil ...”.
                Bisa secara umum digunakan, tetapi kurang tepat
                dan kurang formal dibanding かたがた pada konteks ini.
              </span>
            `,

            3: `
              <strong>4. ながらも</strong><br>
              <span>
                ～ながらも berarti “meskipun ...”.
                Tidak cocok.
              </span>
            `
          }
        }
      },


      /* =====================================================
         6
      ===================================================== */
      {
        question: '明日（ ）、退職いたします。',

        options: [
          '1 をもって',
          '2 というもの',
          '3 が最後',
          '4 に限り'
        ],

        correct: 0,

        explanation: {
          title: '～をもって',

          correct: `
            <p><strong>Jawaban benar: 1. をもって</strong></p>

            <p>
              <strong>～をもって</strong> dalam konteks waktu berarti:
              <strong>“terhitung sampai ...”, “dengan ... sebagai batas akhir”.</strong>
            </p>

            <p>
              <strong>明日をもって退職いたします</strong>
              berarti:
              <strong>“Saya akan berhenti bekerja terhitung mulai/hingga besok sebagai hari terakhir.”</strong>
            </p>
          `,

          usage: `
            <p>
              Sangat umum dalam pengumuman formal:
              pengunduran diri, masa berlaku, penutupan, dan sebagainya.
            </p>

            <p>
              本日をもって営業を終了いたします。
            </p>

            <p>
              → Mulai hari ini, kegiatan operasional kami berakhir.
            </p>
          `,

          options: {
            0: `
              <strong>1. をもって</strong><br>
              <span>
                Benar. Menunjukkan batas waktu formal.
              </span>
            `,

            1: `
              <strong>2. というもの</strong><br>
              <span>
                ～というもの berarti “selama ... ini”.
                Tidak cocok untuk “besok sebagai batas”.
              </span>
            `,

            2: `
              <strong>3. が最後</strong><br>
              <span>
                Tidak menjadi ekspresi formal yang sesuai dalam konteks pengunduran diri.
              </span>
            `,

            3: `
              <strong>4. に限り</strong><br>
              <span>
                Berarti “khusus/terbatas pada ...”.
                Tidak cocok.
              </span>
            `
          }
        }
      },


      /* =====================================================
         7
      ===================================================== */
      {
        question: 'デパートが開店する（ ）、主婦たちが特売場に押し寄せた。',

        options: [
          '1 かと思いきや',
          '2 までもなく',
          '3 が早いか',
          '4 そばから'
        ],

        correct: 2,

        explanation: {
          title: '～が早いか',

          correct: `
            <p><strong>Jawaban benar: 3. が早いか</strong></p>

            <p>
              <strong>～が早いか</strong> berarti:
              <strong>“begitu A terjadi, langsung B terjadi.”</strong>
            </p>

            <p>
              <strong>デパートが開店するが早いか、
              主婦たちが押し寄せた</strong>
              berarti:
              “Begitu department store dibuka,
              para ibu rumah tangga langsung berbondong-bondong masuk.”
            </p>
          `,

          usage: `
            <p>
              Menekankan bahwa dua kejadian terjadi
              hampir bersamaan.
            </p>

            <p>
              彼は席に着くが早いか、仕事を始めた。
            </p>

            <p>
              → Begitu duduk, dia langsung mulai bekerja.
            </p>
          `,

          options: {
            0: `
              <strong>1. かと思いきや</strong><br>
              <span>
                Berarti “dikira akan A, ternyata B”.
                Tidak ada unsur kejutan di sini.
              </span>
            `,

            1: `
              <strong>2. までもなく</strong><br>
              <span>
                Berarti “tidak perlu sampai ...”.
                Tidak menunjukkan urutan waktu.
              </span>
            `,

            2: `
              <strong>3. が早いか</strong><br>
              <span>
                Benar. Menunjukkan B terjadi segera setelah A.
              </span>
            `,

            3: `
              <strong>4. そばから</strong><br>
              <span>
                Menunjukkan tindakan yang terus berulang dan
                hasilnya segera berubah lagi. Tidak cocok dengan satu kejadian.
              </span>
            `
          }
        }
      },


      /* =====================================================
         8
      ===================================================== */
      {
        question: '（ ）と思っていたことだったが、記録しておいてよかった。',

        options: [
          '1 書くまでのことだ',
          '2 書くまでもない',
          '3 書かないまでだ',
          '4 書かないまでも'
        ],

        correct: 1,

        explanation: {
          title: '～までもない',

          correct: `
            <p><strong>Jawaban benar: 2. 書くまでもない</strong></p>

            <p>
              <strong>～までもない</strong> berarti:
              <strong>“tidak perlu sampai ...”</strong>.
            </p>

            <p>
              <strong>書くまでもないと思っていた</strong>
              berarti:
              <strong>“Saya pikir tidak perlu sampai mencatatnya.”</strong>
            </p>

            <p>
              Namun kemudian ternyata mencatatnya justru berguna,
              sehingga pembicara berkata:
              <strong>記録しておいてよかった</strong>.
            </p>
          `,

          usage: `
            <p>
              Pola ini sering digunakan untuk sesuatu yang dianggap
              tidak perlu dilakukan karena masalahnya kecil atau sudah jelas.
            </p>

            <p>
              言うまでもない。
            </p>

            <p>
              → Tidak perlu dikatakan lagi / sudah jelas.
            </p>
          `,

          options: {
            0: `
              <strong>1. 書くまでのことだ</strong><br>
              <span>
                Tidak membentuk makna “tidak perlu menulis”.
              </span>
            `,

            1: `
              <strong>2. 書くまでもない</strong><br>
              <span>
                Benar. Berarti “tidak perlu sampai menulis”.
              </span>
            `,

            2: `
              <strong>3. 書かないまでだ</strong><br>
              <span>
                ～までだ berarti “tinggal melakukan ...”.
                Tidak cocok.
              </span>
            `,

            3: `
              <strong>4. 書かないまでも</strong><br>
              <span>
                Berarti “kalaupun tidak menulis...”.
                Struktur dan makna berbeda.
              </span>
            `
          }
        }
      },


      /* =====================================================
         9
      ===================================================== */
      {
        question: '語彙を勉強しているが、覚えたと思った（ ）忘れてしまう。',

        options: [
          '1 かたがた',
          '2 かたわら',
          '3 そばから',
          '4 がてら'
        ],

        correct: 2,

        explanation: {
          title: '～そばから',

          correct: `
            <p><strong>Jawaban benar: 3. そばから</strong></p>

            <p>
              <strong>～そばから</strong> berarti:
              <strong>“baru saja melakukan A, B langsung terjadi sehingga A seakan sia-sia.”</strong>
            </p>

            <p>
              <strong>覚えたと思ったそばから忘れてしまう</strong>
              berarti:
              <strong>“Begitu merasa sudah menghafalnya,
              langsung lupa lagi.”</strong>
            </p>

            <p>
              Pola ini sering memiliki nuansa frustrasi
              karena hasil tindakan segera hilang.
            </p>
          `,

          usage: `
            <p>
              覚えたそばから忘れてしまう。
            </p>

            <p>
              → Baru saja menghafalnya, langsung lupa lagi.
            </p>
          `,

          options: {
            0: `
              <strong>1. かたがた</strong><br>
              <span>
                Berarti “sekaligus/sambil sekalian”.
              </span>
            `,

            1: `
              <strong>2. かたわら</strong><br>
              <span>
                Berarti “di samping kegiatan utama”.
              </span>
            `,

            2: `
              <strong>3. そばから</strong><br>
              <span>
                Benar. Menunjukkan bahwa sesuatu segera terjadi lagi
                setelah tindakan pertama.
              </span>
            `,

            3: `
              <strong>4. がてら</strong><br>
              <span>
                Berarti “sekalian sambil melakukan ...”.
                Tidak cocok.
              </span>
            `
          }
        }
      },


      /* =====================================================
         10
      ===================================================== */
      {
        question: 'この３週間（ ）、ろくに寝ていない。',

        options: [
          '1 の限り',
          '2 といえども',
          '3 かと思いきや',
          '4 というもの'
        ],

        correct: 3,

        explanation: {
          title: '～というもの',

          correct: `
            <p><strong>Jawaban benar: 4. というもの</strong></p>

            <p>
              <strong>この３週間というもの</strong>
              berarti:
              <strong>“selama tiga minggu terakhir ini tanpa putus.”</strong>
            </p>

            <p>
              ～というもの digunakan untuk menekankan
              seluruh periode waktu.
            </p>

            <p>
              Jadi:
              <strong>“Selama tiga minggu ini saya hampir tidak tidur dengan baik.”</strong>
            </p>
          `,

          usage: `
            <p>
              この一ヶ月というもの、忙しくて休んでいない。
            </p>

            <p>
              → Selama sebulan penuh ini, saya sibuk dan tidak beristirahat.
            </p>
          `,

          options: {
            0: `
              <strong>1. の限り</strong><br>
              <span>
                Biasanya berarti “selama batas ...” atau
                “sejauh ...”, bukan penekanan durasi seperti ini.
              </span>
            `,

            1: `
              <strong>2. といえども</strong><br>
              <span>
                Berarti “meskipun”.
                Tidak sesuai dengan durasi.
              </span>
            `,

            2: `
              <strong>3. かと思いきや</strong><br>
              <span>
                Menunjukkan kejutan, bukan durasi.
              </span>
            `,

            3: `
              <strong>4. というもの</strong><br>
              <span>
                Benar. Menekankan seluruh periode waktu.
              </span>
            `
          }
        }
      },


      /* =====================================================
         11
      ===================================================== */
      {
        question: 'とにかくやってみよう。できなければ、あきらめる（ ）。',

        options: [
          '1 わけだ',
          '2 わけにはいかない',
          '3 までもない',
          '4 までのことだ'
        ],

        correct: 3,

        explanation: {
          title: '～までのことだ',

          correct: `
            <p><strong>Jawaban benar: 4. までのことだ</strong></p>

            <p>
              <strong>～までのことだ</strong> berarti:
              <strong>“kalau tidak berhasil, ya tinggal ...”</strong>
              atau “paling tidak, kita bisa melakukan ...”.
            </p>

            <p>
              <strong>できなければ、あきらめるまでのことだ</strong>
              berarti:
              <strong>“Kalau tidak berhasil, ya tinggal menyerah.”</strong>
            </p>

            <p>
              Nuansanya menunjukkan bahwa tindakan tersebut
              merupakan alternatif terakhir.
            </p>
          `,

          usage: `
            <p>
              やってみて失敗したら、そのときは諦めるまでのことだ。
            </p>
          `,

          options: {
            0: `
              <strong>1. わけだ</strong><br>
              <span>
                Berarti “berarti/sewajarnya demikian”.
                Tidak cocok.
              </span>
            `,

            1: `
              <strong>2. わけにはいかない</strong><br>
              <span>
                Berarti “tidak bisa/tidak boleh melakukan”.
                Justru bertentangan dengan あきらめる.
              </span>
            `,

            2: `
              <strong>3. までもない</strong><br>
              <span>
                Berarti “tidak perlu sampai ...”.
                Tidak sesuai.
              </span>
            `,

            3: `
              <strong>4. までのことだ</strong><br>
              <span>
                Benar. Menyatakan tindakan sebagai alternatif terakhir.
              </span>
            `
          }
        }
      },


      /* =====================================================
         12
      ===================================================== */
      {
        question: '彼が美人で若いお嫁さんをもらったとは、うらやましい（ ）。',

        options: [
          '1 限りだ',
          '2 限りではない',
          '3 に限る',
          '4 に限らない'
        ],

        correct: 0,

        explanation: {
          title: '～限りだ',

          correct: `
            <p><strong>Jawaban benar: 1. 限りだ</strong></p>

            <p>
              <strong>～限りだ</strong> dalam konteks ini berarti:
              <strong>“sangat ...”, “benar-benar ...”</strong>
              terutama untuk menyatakan perasaan yang kuat.
            </p>

            <p>
              <strong>うらやましい限りだ</strong>
              berarti:
              <strong>“Benar-benar membuat iri.”</strong>
            </p>
          `,

          usage: `
            <p>
              光栄な限りです。
            </p>

            <p>
              → Saya merasa sangat terhormat.
            </p>

            <p>
              残念な限りだ。
            </p>

            <p>
              → Benar-benar disayangkan.
            </p>
          `,

          options: {
            0: `
              <strong>1. 限りだ</strong><br>
              <span>
                Benar. Menekankan perasaan yang sangat kuat.
              </span>
            `,

            1: `
              <strong>2. 限りではない</strong><br>
              <span>
                Berarti “tidak terbatas hanya pada ...”,
                maknanya berbeda.
              </span>
            `,

            2: `
              <strong>3. に限る</strong><br>
              <span>
                Berarti “yang terbaik adalah ...”.
                Tidak cocok dengan うらやましい.
              </span>
            `,

            3: `
              <strong>4. に限らない</strong><br>
              <span>
                Berarti “tidak terbatas pada ...”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         13
      ===================================================== */
      {
        question: '遊びがてら（ ）。',

        options: [
          '1 よく学んでください',
          '2 看護師の勉強をしています',
          '3 ぜひいらっしゃってください',
          '4 お詫びに伺います'
        ],

        correct: 2,

        explanation: {
          title: '～がてら',

          correct: `
            <p><strong>Jawaban benar: 3. ぜひいらっしゃってください</strong></p>

            <p>
              <strong>～がてら</strong> berarti:
              <strong>“sekalian sambil melakukan ...”</strong>.
            </p>

            <p>
              <strong>遊びがてら、ぜひいらっしゃってください</strong>
              berarti:
              “Kalau sedang bermain-jalan sekalian,
              silakan datang berkunjung.”
            </p>

            <p>
              Pola ini menyatakan bahwa tujuan kedua dilakukan
              bersamaan dengan kegiatan utama.
            </p>
          `,

          usage: `
            <p>
              散歩がてら、コンビニに寄った。
            </p>

            <p>
              → Sambil sekalian jalan-jalan, saya mampir ke minimarket.
            </p>
          `,

          options: {
            0: `
              <strong>1. よく学んでください</strong><br>
              <span>
                “Sambil bermain, silakan belajar” tidak cocok
                dengan konteks hubungan verba yang digunakan.
              </span>
            `,

            1: `
              <strong>2. 看護師の勉強をしています</strong><br>
              <span>
                Struktur dan makna tidak cocok dengan 遊びがてら.
              </span>
            `,

            2: `
              <strong>3. ぜひいらっしゃってください</strong><br>
              <span>
                Benar. “Sekalian bermain/jalan-jalan,
                silakan datang.”
              </span>
            `,

            3: `
              <strong>4. お詫びに伺います</strong><br>
              <span>
                伺います adalah kunjungan formal untuk tujuan tertentu.
                Hubungan dengan 遊びがてら tidak sesuai.
              </span>
            `
          }
        }
      },


      /* =====================================================
         14
      ===================================================== */
      {
        question: '彼女は子どもを育てるかたわら、（ ）。',

        options: [
          '1 時間が足りなくて悩んでいる',
          '2 家で料理教室も開いている',
          '3 家事が得意で何をするのも早い',
          '4 将来は教師の資格を生かしたいそうだ'
        ],

        correct: 1,

        explanation: {
          title: '～かたわら',

          correct: `
            <p><strong>Jawaban benar: 2. 家で料理教室も開いている</strong></p>

            <p>
              <strong>～かたわら</strong> berarti:
              <strong>“di samping melakukan kegiatan utama,
              juga melakukan kegiatan lain.”</strong>
            </p>

            <p>
              <strong>子どもを育てるかたわら、家で料理教室も開いている</strong>
              berarti:
              <strong>“Selain membesarkan anak, dia juga membuka kelas memasak di rumah.”</strong>
            </p>
          `,

          usage: `
            <p>
              Sering dipakai untuk dua aktivitas yang dilakukan
              secara paralel dalam jangka waktu relatif panjang.
            </p>

            <p>
              会社員として働くかたわら、大学で研究している。
            </p>

            <p>
              → Selain bekerja sebagai karyawan,
              dia juga melakukan penelitian di universitas.
            </p>
          `,

          options: {
            0: `
              <strong>1. 時間が足りなくて悩んでいる</strong><br>
              <span>
                Ini bukan kegiatan paralel yang disejajarkan dengan
                membesarkan anak.
              </span>
            `,

            1: `
              <strong>2. 家で料理教室も開いている</strong><br>
              <span>
                Benar. Dua aktivitas berjalan berdampingan.
              </span>
            `,

            2: `
              <strong>3. 家事が得意で何をするのも早い</strong><br>
              <span>
                Ini lebih merupakan sifat/kemampuan,
                bukan kegiatan kedua.
              </span>
            `,

            3: `
              <strong>4. 将来は教師の資格を生かしたいそうだ</strong><br>
              <span>
                Ini adalah keinginan masa depan,
                bukan kegiatan yang sedang dilakukan bersamaan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         15
      ===================================================== */
      {
        question: '今日の試合に負けたといえども、（ ）。',

        options: [
          '1 勝つわけがないと思っていた',
          '2 勝てなかったのは仕方がなかった',
          '3 相手チームとの力の差はほとんどなかった',
          '4 相手チームほどの実力はなかった'
        ],

        correct: 2,

        explanation: {
          title: '～といえども',

          correct: `
            <p><strong>Jawaban benar: 3. 相手チームとの力の差はほとんどなかった</strong></p>

            <p>
              <strong>～といえども</strong> berarti:
              <strong>“meskipun ...”</strong>
              dengan gaya formal/literer.
            </p>

            <p>
              Kalimat:
              <strong>
                今日の試合に負けたといえども、相手チームとの力の差はほとんどなかった。
              </strong>
            </p>

            <p>
              Artinya:
              <strong>
                “Meskipun kalah dalam pertandingan hari ini,
                perbedaan kekuatan dengan tim lawan hampir tidak ada.”
              </strong>
            </p>
          `,

          usage: `
            <p>
              Sering digunakan dalam tulisan, pidato, dan konteks formal.
            </p>

            <p>
              子供といえども、責任はある。
            </p>

            <p>
              → Meskipun masih anak-anak, tetap ada tanggung jawab.
            </p>
          `,

          options: {
            0: `
              <strong>1. 勝つわけがないと思っていた</strong><br>
              <span>
                “Saya pikir mustahil menang” bertentangan dengan
                nuansa bahwa kekuatan hampir sama.
              </span>
            `,

            1: `
              <strong>2. 勝てなかったのは仕方がなかった</strong><br>
              <span>
                Secara makna masih mungkin, tetapi tidak menciptakan
                kontras yang paling tepat dengan ～といえども.
              </span>
            `,

            2: `
              <strong>3. 相手チームとの力の差はほとんどなかった</strong><br>
              <span>
                Benar. Menyatakan kontras:
                kalah, tetapi sebenarnya kekuatannya hampir sama.
              </span>
            `,

            3: `
              <strong>4. 相手チームほどの実力はなかった</strong><br>
              <span>
                Justru menyatakan tim sendiri lebih lemah,
                sehingga kontrasnya tidak sekuat pilihan 3.
              </span>
            `
          }
        }
      },


      /* =====================================================
         16
      ===================================================== */
      {
        question: '息子は頑固でいったん ___ ___ _★_ ___ 耳を傾けない。',

        options: [
          '1 だれの言うこと',
          '2 最後',
          '3 にも',
          '4 言い出したら'
        ],

        correct: '4-2-1-3',

        fullSentence:
          '息子は頑固でいったん【 4 言い出したら 】【 2 最後 】【 1★ だれの言うこと 】【 3 にも 】耳を傾けない。',

        explanation: {
          title: 'いったん～たら最後',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. だれの言うこと</strong></p>

            <p>
              Struktur:
              <strong>
                いったん言い出したら最後、だれの言うことにも耳を傾けない。
              </strong>
            </p>

            <p>
              <strong>～たら最後</strong> berarti:
              <strong>“sekali sudah melakukan ..., maka akibat berikutnya hampir pasti terjadi dan sulit dihentikan.”</strong>
            </p>

            <p>
              <strong>だれの言うことにも耳を傾けない</strong>
              berarti:
              <strong>“tidak mau mendengarkan siapa pun.”</strong>
            </p>
          `,

          usage: `
            <p>
              いったん始めたら最後、途中でやめられない。
            </p>

            <p>
              → Begitu sudah mulai, tidak bisa berhenti di tengah.
            </p>
          `,

          options: {
            0: `
              <strong>1. だれの言うこと</strong><br>
              <span>
                Benar untuk posisi ★ karena harus diikuti にも:
                だれの言うことにも.
              </span>
            `,

            1: `
              <strong>2. 最後</strong><br>
              <span>
                Berada setelah 言い出したら untuk membentuk
                ～たら最後.
              </span>
            `,

            2: `
              <strong>3. にも</strong><br>
              <span>
                Menutup struktur だれの言うことにも.
              </span>
            `,

            3: `
              <strong>4. 言い出したら</strong><br>
              <span>
                Membentuk klausa pertama:
                いったん言い出したら最後.
              </span>
            `
          }
        }
      },


      /* =====================================================
         17
      ===================================================== */
      {
        question: '友人が ___ ___ _★_ ___ とは、夢にも思わなかった。',

        options: [
          '1 連絡を受けたが',
          '2 との',
          '3 そんなに悪かった',
          '4 入院した'
        ],

        correct: '4-2-1-3',

        fullSentence:
          '友人が【 4 入院した 】【 2 との 】【 1★ 連絡を受けたが 】【 3 そんなに悪かった 】とは、夢にも思わなかった。',

        explanation: {
          title: '～との連絡を受ける',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. 連絡を受けたが</strong></p>

            <p>
              Struktur:
              <strong>
                友人が入院したとの連絡を受けたが、
                そんなに悪かったとは、夢にも思わなかった。
              </strong>
            </p>

            <p>
              <strong>～との連絡を受ける</strong> berarti:
              <strong>“menerima kabar bahwa ...”</strong>.
            </p>

            <p>
              <strong>夢にも思わなかった</strong> berarti:
              <strong>“tidak pernah membayangkan sama sekali.”</strong>
            </p>
          `,

          usage: `
            <p>
              会社を辞めたとの連絡を受けた。
            </p>

            <p>
              → Saya menerima kabar bahwa dia berhenti dari perusahaan.
            </p>
          `,

          options: {
            0: `
              <strong>1. 連絡を受けたが</strong><br>
              <span>
                Benar untuk posisi ★. Membentuk
                入院したとの連絡を受けたが.
              </span>
            `,

            1: `
              <strong>2. との</strong><br>
              <span>
                Berada setelah 入院した dan sebelum 連絡:
                入院したとの連絡.
              </span>
            `,

            2: `
              <strong>3. そんなに悪かった</strong><br>
              <span>
                Berada sebelum とは untuk membentuk:
                そんなに悪かったとは.
              </span>
            `,

            3: `
              <strong>4. 入院した</strong><br>
              <span>
                Menjadi isi berita/kabar:
                入院したとの連絡.
              </span>
            `
          }
        }
      },


      /* =====================================================
         18
      ===================================================== */
      {
        question: '彼は ___ ___ _★_ ___ 乗り換えの電車に間に合わなかったようだ。',

        options: [
          '1 やいなや',
          '2 電車を降りる',
          '3 どうやら',
          '4 走り出したが'
        ],

        correct: '3-2-1-4',

        fullSentence:
          '彼は【 3 どうやら 】【 2 電車を降りる 】【 1★ やいなや 】【 4 走り出したが 】乗り換えの電車に間に合わなかったようだ。',

        explanation: {
          title: '～や否や',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. やいなや</strong></p>

            <p>
              Struktur:
              <strong>
                どうやら電車を降りるや否や走り出したが、
                乗り換えの電車に間に合わなかったようだ。
              </strong>
            </p>

            <p>
              <strong>～や否や</strong> berarti:
              <strong>“begitu A, langsung B.”</strong>
            </p>

            <p>
              Menunjukkan bahwa tindakan kedua terjadi segera
              setelah tindakan pertama.
            </p>
          `,

          usage: `
            <p>
              彼は家に帰るや否や、宿題を始めた。
            </p>

            <p>
              → Begitu pulang, dia langsung mengerjakan PR.
            </p>

            <p>
              Ini merupakan pola formal yang sering ditemukan
              dalam soal JLPT N1.
            </p>
          `,

          options: {
            0: `
              <strong>1. やいなや</strong><br>
              <span>
                Benar. Membentuk 電車を降りるや否や.
              </span>
            `,

            1: `
              <strong>2. 電車を降りる</strong><br>
              <span>
                Harus berada sebelum や否や.
              </span>
            `,

            2: `
              <strong>3. どうやら</strong><br>
              <span>
                Menjadi adverbia di awal yang berarti “kelihatannya”.
              </span>
            `,

            3: `
              <strong>4. 走り出したが</strong><br>
              <span>
                Menjadi tindakan kedua setelah や否や.
              </span>
            `
          }
        }
      },


      /* =====================================================
         19
      ===================================================== */
      {
        question: 'あなたの ___ ___ _★_ ___ 、油断してはいけません。',

        options: [
          '1 すれば',
          '2 とはいえ',
          '3 実力をもって',
          '4 合格は可能だ'
        ],

        correct: '3-1-4-2',

        fullSentence:
          'あなたの【 3 実力をもって 】【 1 すれば 】【 4★ 合格は可能だ 】【 2 とはいえ 】、油断してはいけません。',

        explanation: {
          title: '～をもってすれば',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 4. 合格は可能だ</strong></p>

            <p>
              Struktur:
              <strong>
                あなたの実力をもってすれば、合格は可能だとはいえ、
                油断してはいけません。
              </strong>
            </p>

            <p>
              <strong>～をもってすれば</strong> berarti:
              <strong>“kalau menggunakan/memiliki ... sebagai kemampuan/sarana,
              maka ... mungkin dilakukan.”</strong>
            </p>

            <p>
              <strong>実力をもってすれば</strong>
              berarti:
              “dengan kemampuan Anda tersebut...”
            </p>
          `,

          usage: `
            <p>
              Pola ini formal dan sering digunakan dalam tulisan,
              pidato, atau bahasa yang cukup kaku.
            </p>

            <p>
              彼の技術をもってすれば、問題を解決できるだろう。
            </p>

            <p>
              → Dengan kemampuan teknisnya, masalah itu mungkin
              bisa diselesaikan.
            </p>
          `,

          options: {
            0: `
              <strong>1. すれば</strong><br>
              <span>
                Harus mengikuti 実力をもって.
              </span>
            `,

            1: `
              <strong>2. とはいえ</strong><br>
              <span>
                Harus berada setelah klausa 合格は可能だ
                untuk membuat pertentangan.
              </span>
            `,

            2: `
              <strong>3. 実力をもって</strong><br>
              <span>
                Menjadi awal pola ～をもってすれば.
              </span>
            `,

            3: `
              <strong>4. 合格は可能だ</strong><br>
              <span>
                Benar untuk posisi ★ karena menjadi kesimpulan
                dari 実力をもってすれば.
              </span>
            `
          }
        }
      },


      /* =====================================================
         20
      ===================================================== */
      {
        question: 'その国は ___ ___ _★_ ___ いる。',

        options: [
          '1 目覚ましい進歩',
          '2 からというもの',
          '3 をとげて',
          '4 オリンピックを開催して'
        ],

        correct: '4-2-1-3',

        fullSentence:
          'その国は【 4 オリンピックを開催して 】【 2 からというもの 】【 1★ 目覚ましい進歩 】【 3 をとげて 】いる。',

        explanation: {
          title: '～てからというもの',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. 目覚ましい進歩</strong></p>

            <p>
              Struktur:
              <strong>
                オリンピックを開催してからというもの、
                目覚ましい進歩をとげている。
              </strong>
            </p>

            <p>
              <strong>～てからというもの</strong> berarti:
              <strong>“sejak ... terjadi, terus-menerus ...”</strong>
            </p>

            <p>
              Pola ini menekankan bahwa perubahan yang terjadi
              setelah suatu titik waktu terus berlangsung sampai sekarang.
            </p>
          `,

          usage: `
            <p>
              日本に来てからというもの、日本語が好きになった。
            </p>

            <p>
              → Sejak datang ke Jepang, saya menjadi suka bahasa Jepang.
            </p>
          `,

          options: {
            0: `
              <strong>1. 目覚ましい進歩</strong><br>
              <span>
                Benar untuk posisi ★ karena membentuk:
                目覚ましい進歩をとげている.
              </span>
            `,

            1: `
              <strong>2. からというもの</strong><br>
              <span>
                Menjadi bagian dari pola:
                開催してからというもの.
              </span>
            `,

            2: `
              <strong>3. をとげて</strong><br>
              <span>
                Menjadi predikat terakhir:
                進歩をとげている.
              </span>
            `,

            3: `
              <strong>4. オリンピックを開催して</strong><br>
              <span>
                Menjadi titik awal perubahan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         21
      ===================================================== */
      {
        question: 'ダイエットを成功させるのが難しいと感じているのは、私に [ 21 ] だろう。',

        options: [
          '1 限ってない',
          '2 限ってまでもない',
          '3 限ったまで',
          '4 限ったことではない'
        ],

        correct: 3,

        explanation: {
          title: '～に限ったことではない',

          correct: `
            <p><strong>Jawaban benar: 4. 限ったことではない</strong></p>

            <p>
              <strong>～に限ったことではない</strong> berarti:
              <strong>“bukan hanya ...”, “tidak terbatas pada ...”.</strong>
            </p>

            <p>
              <strong>私に限ったことではない</strong>
              berarti:
              <strong>“hal itu bukan hanya dialami oleh saya.”</strong>
            </p>

            <p>
              Jadi kesulitan melakukan diet bukan hanya masalah pribadi pembicara.
            </p>
          `,

          usage: `
            <p>
              日本人に限ったことではない。
            </p>

            <p>
              → Ini bukan hanya terjadi pada orang Jepang.
            </p>
          `,

          options: {
            0: `
              <strong>1. 限ってない</strong><br>
              <span>
                Secara lisan bisa ditemukan dalam konteks tertentu,
                tetapi bukan konstruksi formal yang diuji di sini.
              </span>
            `,

            1: `
              <strong>2. 限ってまでもない</strong><br>
              <span>
                Tidak merupakan pola yang benar.
              </span>
            `,

            2: `
              <strong>3. 限ったまで</strong><br>
              <span>
                Tidak membentuk makna yang diperlukan.
              </span>
            `,

            3: `
              <strong>4. 限ったことではない</strong><br>
              <span>
                Benar. Menunjukkan bahwa keadaan tersebut
                bukan sesuatu yang hanya terjadi pada pembicara.
              </span>
            `
          }
        }
      },


      /* =====================================================
         22
      ===================================================== */
      {
        question: '甘いおやつも今日 [ 22 ] やめようと思うのだが、目の前にするとついつい手が伸びてしまう。',

        options: [
          '1 早いか',
          '2 が最後',
          '3 を皮切りに',
          '4 を限りに'
        ],

        correct: 3,

        explanation: {
          title: '～を限りに',

          correct: `
            <p><strong>Jawaban benar: 4. を限りに</strong></p>

            <p>
              <strong>～を限りに</strong> berarti:
              <strong>“mulai saat ini sebagai batas terakhir / sejak ... tidak lagi.”</strong>
            </p>

            <p>
              <strong>今日を限りにやめる</strong>
              berarti:
              <strong>“mulai hari ini sebagai batas terakhir,
              saya akan berhenti.”</strong>
            </p>

            <p>
              Dalam konteks ini pembicara berniat menjadikan hari ini
              sebagai batas terakhir makan camilan manis.
            </p>
          `,

          usage: `
            <p>
              Biasanya digunakan untuk perubahan kebiasaan,
              masa berlaku, atau keputusan akhir.
            </p>

            <p>
              今日を限りに会社を辞めます。
            </p>

            <p>
              → Saya berhenti dari perusahaan mulai hari ini.
            </p>
          `,

          options: {
            0: `
              <strong>1. 早いか</strong><br>
              <span>
                ～が早いか berarti “begitu ... langsung ...”.
                Tidak cocok dengan keputusan berhenti.
              </span>
            `,

            1: `
              <strong>2. が最後</strong><br>
              <span>
                ～が最後 berarti “sekali ... maka ...”.
                Tidak cocok.
              </span>
            `,

            2: `
              <strong>3. を皮切りに</strong><br>
              <span>
                Berarti “dimulai dari ... lalu diikuti ...”.
                Tidak cocok dengan berhenti.
              </span>
            `,

            3: `
              <strong>4. を限りに</strong><br>
              <span>
                Benar. Menetapkan batas terakhir sebelum perubahan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         23
      ===================================================== */
      {
        question: 'また、それだけではなく、健康を害する恐れもあるということは [ 23 ]。',

        options: [
          '1 言うまでだ',
          '2 言わないまでだ',
          '3 言うまでもない',
          '4 言わないまでもない'
        ],

        correct: 2,

        explanation: {
          title: '言うまでもない',

          correct: `
            <p><strong>Jawaban benar: 3. 言うまでもない</strong></p>

            <p>
              <strong>言うまでもない</strong> adalah ungkapan tetap
              yang berarti:
              <strong>“tidak perlu dikatakan lagi”, “sudah jelas”.</strong>
            </p>

            <p>
              <strong>健康を害する恐れもあるということは言うまでもない</strong>
              berarti:
              <strong>“Sudah jelas bahwa ada risiko juga terhadap kesehatan.”</strong>
            </p>
          `,

          usage: `
            <p>
              Dalam N1, ungkapan ini sering muncul dalam tulisan formal.
            </p>

            <p>
              結果は言うまでもない。
            </p>

            <p>
              → Hasilnya sudah jelas, tidak perlu dikatakan lagi.
            </p>
          `,

          options: {
            0: `
              <strong>1. 言うまでだ</strong><br>
              <span>
                Tidak merupakan ungkapan yang benar untuk makna ini.
              </span>
            `,

            1: `
              <strong>2. 言わないまでだ</strong><br>
              <span>
                Tidak membentuk ekspresi standar.
              </span>
            `,

            2: `
              <strong>3. 言うまでもない</strong><br>
              <span>
                Benar. Berarti “tidak perlu dikatakan lagi”.
              </span>
            `,

            3: `
              <strong>4. 言わないまでもない</strong><br>
              <span>
                Tidak merupakan konstruksi standar.
              </span>
            `
          }
        }
      },


      /* =====================================================
         24
      ===================================================== */
      {
        question: '理想の体重になった [ 24 ]、リバウンドすることもよくあるからだ。',

        options: [
          '1 が早いか',
          '2 や否や',
          '3 と思いきや',
          '4 とは思い'
        ],

        correct: 2,

        explanation: {
          title: '～と思いきや',

          correct: `
            <p><strong>Jawaban benar: 3. と思いきや</strong></p>

            <p>
              <strong>～と思いきや</strong> berarti:
              <strong>“dikira akan begitu, ternyata justru ...”</strong>.
            </p>

            <p>
              Dalam konteks:
              “Dikira setelah mencapai berat badan ideal semuanya selesai,
              ternyata sering kali justru terjadi rebound.”
            </p>

            <p>
              Jadi pola ini menunjukkan hasil yang
              <strong>berlawanan dengan perkiraan semula</strong>.
            </p>
          `,

          usage: `
            <p>
              Mudah dikenali dari adanya perubahan ekspektasi:
              Aと思いきや、B.
            </p>

            <p>
              成功したと思いきや、まだ問題が残っていた。
            </p>

            <p>
              → Dikira sudah berhasil, ternyata masih ada masalah.
            </p>
          `,

          options: {
            0: `
              <strong>1. が早いか</strong><br>
              <span>
                Berarti “begitu ... langsung ...”.
                Tidak ada unsur hasil tak terduga.
              </span>
            `,

            1: `
              <strong>2. や否や</strong><br>
              <span>
                Juga berarti “begitu ... langsung ...”.
                Bukan kejutan terhadap perkiraan.
              </span>
            `,

            2: `
              <strong>3. と思いきや</strong><br>
              <span>
                Benar. Menunjukkan bahwa kenyataan ternyata
                tidak sesuai dugaan.
              </span>
            `,

            3: `
              <strong>4. とは思い</strong><br>
              <span>
                Tidak membentuk ekspresi lengkap yang dibutuhkan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         25
      ===================================================== */
      {
        question: '結局 [ 25 ]、適度な運動をしてカロリーを消費したり、筋肉をつけることが大切だ。',

        options: [
          '1 毎日とはいかないまでも',
          '2 毎日となるまでに',
          '3 毎日といえども',
          '4 毎日というもの'
        ],

        correct: 0,

        explanation: {
          title: '～とはいかないまでも',

          correct: `
            <p><strong>Jawaban benar: 1. 毎日とはいかないまでも</strong></p>

            <p>
              <strong>～とはいかないまでも</strong> berarti:
              <strong>“walaupun tidak sampai ...”, “meskipun tidak bisa ... sepenuhnya”.</strong>
            </p>

            <p>
              <strong>毎日とはいかないまでも</strong>
              berarti:
              <strong>“meskipun tidak bisa dilakukan setiap hari.”</strong>
            </p>

            <p>
              Kalimat ini menyatakan:
              meskipun olahraga setiap hari mungkin tidak realistis,
              tetap penting berolahraga secukupnya dan membangun otot.
            </p>
          `,

          usage: `
            <p>
              Pola ini berguna ketika target ideal sulit dicapai,
              tetapi tingkat yang lebih rendah masih memungkinkan.
            </p>

            <p>
              毎日とはいかないまでも、週に三回は運動したい。
            </p>

            <p>
              → Meskipun tidak setiap hari,
              saya ingin berolahraga tiga kali seminggu.
            </p>
          `,

          options: {
            0: `
              <strong>1. 毎日とはいかないまでも</strong><br>
              <span>
                Benar. Menyatakan target ideal “setiap hari” mungkin
                tidak tercapai, tetapi usaha tetap dilakukan.
              </span>
            `,

            1: `
              <strong>2. 毎日となるまでに</strong><br>
              <span>
                Tidak membentuk makna yang diperlukan.
              </span>
            `,

            2: `
              <strong>3. 毎日といえども</strong><br>
              <span>
                Berarti “meskipun setiap hari”.
                Tidak sesuai karena yang dimaksud justru
                tidak harus setiap hari.
              </span>
            `,

            3: `
              <strong>4. 毎日というもの</strong><br>
              <span>
                ～というもの menekankan periode waktu,
                bukan “meskipun tidak sampai”.
              </span>
            `
          }
        }
      }

    ]
  }
};