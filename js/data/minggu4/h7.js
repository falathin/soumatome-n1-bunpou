window.W4H7 = {
  title: '7日目 実戦問題 (Ujian Minggu 4)',

  grammar: [],

  exam: {
    type: 'quiz',

    questions: [

      /* =====================================================
         1. ～たる者
      ===================================================== */
      {
        question: '医者（ ）者が金もうけばかり考えてはいけない。',
        options: [
          '1 すら',
          '2 にした',
          '3 であろう',
          '4 たる'
        ],
        correct: 3,

        explanation: {
          title: '～たる者',
          correct: `
            <p><strong>Jawaban benar: 4. たる</strong></p>

            <p>
              Pola <strong>～たる者</strong> berarti
              “sebagai seseorang yang berkedudukan sebagai ...”,
              “orang yang memang merupakan ...”, atau
              “sebagai seorang ... yang seharusnya ...”.
            </p>

            <p>
              <strong>医者たる者</strong> berarti
              “orang yang berprofesi sebagai dokter” dengan nuansa
              bahwa karena dia seorang dokter, dia memiliki
              tanggung jawab atau sikap yang semestinya.
            </p>

            <p>
              Jadi kalimat ini bermakna:
              <strong>“Seorang dokter tidak boleh hanya memikirkan mencari uang.”</strong>
            </p>

            <p>
              Pola ini sering dipakai ketika membicarakan
              <strong>tanggung jawab, etika, kewajiban, atau sikap yang pantas</strong>
              berdasarkan status seseorang.
            </p>
          `,

          usage: `
            <p><strong>Rumus:</strong></p>
            <p>名詞 ＋ たる者</p>

            <p><strong>Contoh:</strong></p>
            <p>教師たる者、生徒の手本にならなければならない。</p>
            <p>→ Seorang guru harus menjadi teladan bagi muridnya.</p>
          `,

          options: {
            0: `
              <strong>1. すら</strong><br>
              <span>
                すら berarti “bahkan”. Pola ini tidak bisa membentuk
                makna “sebagai seorang dokter yang memiliki tanggung jawab”.
                <strong>医者すら者</strong> juga tidak gramatikal.
              </span>
            `,
            1: `
              <strong>2. にした</strong><br>
              <span>
                にした tidak cocok setelah 医者.
                Pola ini biasanya muncul dalam struktur seperti
                ～を～にした atau ～にしたら, bukan untuk menyatakan
                status moral “sebagai seorang dokter”.
              </span>
            `,
            2: `
              <strong>3. であろう</strong><br>
              <span>
                であろう berarti “mungkin adalah” atau bentuk lebih formal
                dari だろう. 医者であろう者 memiliki struktur yang berbeda
                dan tidak menghasilkan makna ～たる者.
              </span>
            `,
            3: `
              <strong>4. たる</strong><br>
              <span>
                Benar. ～たる者 digunakan untuk menyatakan bahwa seseorang,
                karena status atau kedudukannya, seharusnya memiliki
                tanggung jawab atau perilaku tertentu.
              </span>
            `
          }
        }
      },


      /* =====================================================
         2. ともなると
      ===================================================== */
      {
        question: '高校生（ ）、ファッションに敏感になるものだ。',
        options: [
          '1 にして',
          '2 ともなると',
          '3 にあって',
          '4 ならでは'
        ],
        correct: 1,

        explanation: {
          title: '～ともなると',
          correct: `
            <p><strong>Jawaban benar: 2. ともなると</strong></p>

            <p>
              <strong>～ともなると</strong> digunakan ketika seseorang
              sudah mencapai <strong>usia, tingkat, status, atau tahap tertentu</strong>,
              sehingga secara alami muncul perubahan atau kecenderungan tertentu.
            </p>

            <p>
              <strong>高校生ともなると</strong> berarti
              “kalau sudah menjadi siswa SMA / ketika sudah mencapai tingkat SMA”.
            </p>

            <p>
              Nuansanya adalah:
              <strong>“Begitu sudah mencapai tahap tersebut, biasanya ...”</strong>
            </p>
          `,

          usage: `
            <p><strong>Rumus:</strong> 名詞 ＋ ともなると</p>

            <p>
              Umumnya dipakai untuk perubahan yang dianggap wajar
              berdasarkan pertambahan usia atau kenaikan tingkat/status.
            </p>

            <p>Contoh:</p>
            <p>大学生ともなると、自分で生活を管理する必要がある。</p>
            <p>→ Kalau sudah menjadi mahasiswa, perlu mengatur kehidupan sendiri.</p>
          `,

          options: {
            0: `
              <strong>1. にして</strong><br>
              <span>
                ～にして memiliki banyak fungsi, tetapi pada konteks ini
                tidak cocok untuk menyatakan “ketika sudah mencapai tingkat SMA”.
              </span>
            `,
            1: `
              <strong>2. ともなると</strong><br>
              <span>
                Benar. Menunjukkan bahwa ketika seseorang sudah mencapai
                tahap tertentu, perilaku atau kondisi tertentu menjadi wajar.
              </span>
            `,
            2: `
              <strong>3. にあって</strong><br>
              <span>
                ～にあって berarti “dalam situasi/kondisi/era ...”.
                Fokusnya pada lingkungan atau keadaan, bukan perubahan
                yang terjadi ketika mencapai usia atau tingkat tertentu.
              </span>
            `,
            3: `
              <strong>4. ならでは</strong><br>
              <span>
                ～ならでは berarti “khas ...” atau “hanya bisa dilakukan
                oleh ...”. Tidak cocok untuk menunjukkan tahap usia/tingkat.
              </span>
            `
          }
        }
      },


      /* =====================================================
         3. とあれば
      ===================================================== */
      {
        question: '家で楽しく運動できる（ ）、そのゲームの人気が高いのもうなずける。',
        options: [
          '1 とあれば',
          '2 とあろうと',
          '3 となって',
          '4 となろうと'
        ],
        correct: 0,

        explanation: {
          title: '～とあれば',
          correct: `
            <p><strong>Jawaban benar: 1. とあれば</strong></p>

            <p>
              <strong>～とあれば</strong> berarti
              “kalau memang demikian”, “kalau kondisinya seperti itu”,
              atau “jika memang ...”.
            </p>

            <p>
              Dalam kalimat ini:
              <strong>家で楽しく運動できるとあれば</strong>
              = “kalau memang seseorang bisa berolahraga dengan menyenangkan
              di rumah”.
            </p>

            <p>
              Lalu kesimpulannya:
              <strong>人気が高いのもうなずける</strong>
              = “wajar jika popularitasnya tinggi”.
            </p>
          `,

          usage: `
            <p>
              ～とあれば sering digunakan ketika fakta/kondisi tertentu
              menjadi alasan kuat mengapa hasil berikutnya dapat dimengerti.
            </p>

            <p>
              Contoh:
              有名な先生が教えてくれるとあれば、参加者が増えるのも当然だ。
            </p>
          `,

          options: {
            0: `
              <strong>1. とあれば</strong><br>
              <span>
                Benar. Menunjukkan kondisi khusus yang membuat hasil berikutnya
                dapat dimaklumi.
              </span>
            `,
            1: `
              <strong>2. とあろうと</strong><br>
              <span>
                Pola ～とあろうと berarti “bagaimanapun ...” atau
                “meskipun ...”. Biasanya digunakan dalam struktur
                konsesif, bukan hubungan alasan seperti kalimat ini.
              </span>
            `,
            2: `
              <strong>3. となって</strong><br>
              <span>
                となって berasal dari となる dan menyatakan perubahan
                atau keadaan yang menjadi sesuatu. Tidak sesuai dengan
                hubungan “kalau memang begitu, maka wajar ...”.
              </span>
            `,
            3: `
              <strong>4. となろうと</strong><br>
              <span>
                ～となろうと juga digunakan dalam pola konsesif atau
                hipotetis seperti “meskipun akhirnya menjadi ...”.
                Maknanya tidak sesuai.
              </span>
            `
          }
        }
      },


      /* =====================================================
         4. あっての
      ===================================================== */
      {
        question: '魚（ ）漁業なのに、最近は魚が少なくなってしまった。',
        options: [
          '1 あっての',
          '2 なくしては',
          '3 ぐるみ',
          '4 からする'
        ],
        correct: 0,

        explanation: {
          title: '～あっての',
          correct: `
            <p><strong>Jawaban benar: 1. あっての</strong></p>

            <p>
              <strong>～あっての～</strong> berarti
              <strong>“~ ada karena adanya ...”</strong>,
              “~ berdiri/berjalan berkat adanya ...”,
              atau “~ tidak akan ada tanpa ...”.
            </p>

            <p>
              <strong>魚あっての漁業</strong> berarti:
              <strong>“Industri perikanan ada karena ada ikan.”</strong>
            </p>

            <p>
              Ini adalah hubungan mendasar antara dua hal:
              bagian pertama menjadi <strong>dasar keberadaan</strong>
              bagian kedua.
            </p>
          `,

          usage: `
            <p><strong>Rumus:</strong> 名詞 ＋ あっての ＋ 名詞</p>

            <p>Contoh:</p>
            <p>健康あっての人生だ。</p>
            <p>→ Hidup yang baik ada berkat kesehatan.</p>

            <p>信頼あっての人間関係だ。</p>
            <p>→ Hubungan antarmanusia ada berkat kepercayaan.</p>
          `,

          options: {
            0: `
              <strong>1. あっての</strong><br>
              <span>
                Benar. Ikan merupakan dasar keberadaan industri perikanan.
              </span>
            `,
            1: `
              <strong>2. なくしては</strong><br>
              <span>
                ～なくしては berarti “tanpa ...”.
                Secara makna memang berdekatan dengan ～あっての,
                tetapi struktur kalimat yang diberikan meminta
                <strong>魚あっての漁業</strong>, bukan 魚なくしては漁業.
              </span>
            `,
            2: `
              <strong>3. ぐるみ</strong><br>
              <span>
                ～ぐるみ berarti “beserta seluruh bagian/kelompoknya”,
                misalnya 家族ぐるみ. Tidak cocok untuk hubungan
                sebab keberadaan seperti ikan dan perikanan.
              </span>
            `,
            3: `
              <strong>4. からする</strong><br>
              <span>
                ～からする biasanya digunakan untuk menyatakan titik awal
                atau kisaran angka, misalnya 100万円からする時計.
                Tidak dapat dipakai untuk membentuk makna “berkat adanya”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         5. もなくはない
      ===================================================== */
      {
        question: '海外に転勤になった。（ ）が、楽しみでもある。',
        options: [
          '1 不安がないものだ',
          '2 不安なくしてはない',
          '3 不安すらない',
          '4 不安もなくはない'
        ],
        correct: 3,

        explanation: {
          title: '～なくはない',
          correct: `
            <p><strong>Jawaban benar: 4. 不安もなくはない</strong></p>

            <p>
              <strong>～なくはない</strong> adalah bentuk double negative.
              Maknanya kira-kira:
              <strong>“bukannya tidak ...”</strong>,
              “memang ada sedikit ...”, atau “tidak sepenuhnya tidak ...”.
            </p>

            <p>
              <strong>不安もなくはない</strong>
              berarti:
              <strong>“Bukan berarti saya sama sekali tidak cemas.”</strong>
            </p>

            <p>
              Kalimat berikutnya menyatakan kontras:
              ada kecemasan, <strong>tetapi juga ada rasa senang/antusias</strong>.
            </p>
          `,

          usage: `
            <p>
              Pola ini sering digunakan untuk menyampaikan sesuatu
              secara hati-hati, tidak terlalu tegas.
            </p>

            <p>
              反対 pendapat atau perasaan biasanya dibuat lebih lunak:
              <strong>～なくはない</strong>
              = “bukannya tidak ...”.
            </p>
          `,

          options: {
            0: `
              <strong>1. 不安がないものだ</strong><br>
              <span>
                Maknanya justru “memang tidak ada kecemasan”,
                sehingga bertentangan dengan が、楽しみでもある dan
                nuansa yang ingin mengatakan masih ada sedikit kecemasan.
              </span>
            `,
            1: `
              <strong>2. 不安なくしてはない</strong><br>
              <span>
                Struktur ini tidak alami. なくしては merupakan pola
                yang berarti “tanpa ...”, bukan pembentuk
                makna double negative seperti ～なくはない.
              </span>
            `,
            2: `
              <strong>3. 不安すらない</strong><br>
              <span>
                すら berarti “bahkan”. 不安すらない berarti
                “bahkan tidak ada kecemasan sedikit pun”, sehingga
                terlalu kuat dan bertentangan dengan konteks.
              </span>
            `,
            3: `
              <strong>4. 不安もなくはない</strong><br>
              <span>
                Benar. Menunjukkan bahwa rasa cemas itu memang ada,
                meskipun tidak berarti sepenuhnya cemas.
              </span>
            `
          }
        }
      },


      /* =====================================================
         6. なりとも
      ===================================================== */
      {
        question: '私の本が、多少（ ）若い人たちにいい影響を与えているとしたらうれしい限りです。',
        options: [
          '1 とあれば',
          '2 とあって',
          '3 なりとも',
          '4 なろうとも'
        ],
        correct: 2,

        explanation: {
          title: '～なりとも',
          correct: `
            <p><strong>Jawaban benar: 3. なりとも</strong></p>

            <p>
              <strong>～なりとも</strong> berarti
              <strong>“meskipun hanya sedikit”, “setidaknya”, “walaupun sekecil apa pun”</strong>.
            </p>

            <p>
              <strong>多少なりとも</strong> adalah ungkapan yang sangat umum:
              <strong>“sedikit banyak”, “walaupun sedikit”</strong>.
            </p>

            <p>
              Jadi:
              <strong>多少なりとも若い人たちにいい影響を与えている</strong>
              =
              “kalau buku saya sedikit banyak memberikan pengaruh baik kepada
              anak-anak muda...”.
            </p>
          `,

          usage: `
            <p>
              Dipakai ketika jumlahnya kecil tetapi tetap dianggap bernilai.
              Banyak ditemukan dalam tulisan formal.
            </p>

            <p>Contoh:</p>
            <p>多少なりとも役に立てばうれしい。</p>
            <p>→ Saya senang kalau bisa membantu walaupun sedikit.</p>
          `,

          options: {
            0: `
              <strong>1. とあれば</strong><br>
              <span>
                Berarti “kalau memang ...”. Tidak cocok setelah 多少
                dan tidak membentuk 多少とあれば.
              </span>
            `,
            1: `
              <strong>2. とあって</strong><br>
              <span>
                ～とあって berarti “karena kondisinya demikian”.
                Tidak dapat membentuk ungkapan 多少なりとも.
              </span>
            `,
            2: `
              <strong>3. なりとも</strong><br>
              <span>
                Benar. 多少なりとも adalah ungkapan tetap untuk
                “sedikit banyak / walaupun sedikit”.
              </span>
            `,
            3: `
              <strong>4. なろうとも</strong><br>
              <span>
                ～ようとも berarti “meskipun ...”. Struktur ini berbeda
                dan tidak membentuk 多少なりとも.
              </span>
            `
          }
        }
      },


      /* =====================================================
         7. たりとも
      ===================================================== */
      {
        question: '彼女の悪口など一言（ ）言ったことはありませんよ。',
        options: [
          '1 とあっては',
          '2 からあり',
          '3 からとも',
          '4 たりとも'
        ],
        correct: 3,

        explanation: {
          title: '～たりとも',
          correct: `
            <p><strong>Jawaban benar: 4. たりとも</strong></p>

            <p>
              <strong>一言たりとも</strong> berarti
              <strong>“bahkan sepatah kata pun”</strong>
              dengan nuansa bahwa jumlah tersebut benar-benar nol.
            </p>

            <p>
              Pola ini biasanya dipakai bersama bentuk negatif:
              <strong>一つたりともない / 一言たりとも言わない</strong>.
            </p>

            <p>
              Jadi kalimat:
              <strong>一言たりとも言ったことはありません</strong>
              berarti:
              <strong>“Saya sama sekali tidak pernah mengatakan sepatah kata pun untuk menjelek-jelekkannya.”</strong>
            </p>
          `,

          usage: `
            <p>
              ～たりとも menekankan jumlah yang sangat kecil sekalipun
              tidak termasuk atau tidak diperbolehkan.
            </p>

            <p>Contoh:</p>
            <p>一秒たりとも無駄にできない。</p>
            <p>→ Bahkan satu detik pun tidak boleh disia-siakan.</p>
          `,

          options: {
            0: `
              <strong>1. とあっては</strong><br>
              <span>
                ～とあっては berarti “kalau memang keadaannya begitu”.
                Tidak cocok dengan 一言.
              </span>
            `,
            1: `
              <strong>2. からあり</strong><br>
              <span>
                Tidak membentuk pola tata bahasa yang tepat dalam konteks ini.
              </span>
            `,
            2: `
              <strong>3. からとも</strong><br>
              <span>
                Tidak membentuk ekspresi 一言からとも.
                Struktur tersebut tidak memiliki fungsi yang dibutuhkan.
              </span>
            `,
            3: `
              <strong>4. たりとも</strong><br>
              <span>
                Benar. Digunakan setelah angka/jumlah kecil untuk menegaskan
                “bahkan satu pun tidak”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         8. ないものではない
      ===================================================== */
      {
        question: '事件を起こしたのは彼だが、私に責任が（ ）。',
        options: [
          '1 なしにはない',
          '2 なくしてはない',
          '3 ないものではない',
          '4 なくはない'
        ],
        correct: 2,

        explanation: {
          title: '～ないものではない',
          correct: `
            <p><strong>Jawaban benar: 3. ないものではない</strong></p>

            <p>
              <strong>～ないものではない</strong> memiliki makna
              <strong>“bukan berarti tidak ...”</strong> atau
              <strong>“memang ada kemungkinan / ada unsur ...”</strong>.
            </p>

            <p>
              <strong>私に責任がないものではない</strong>
              berarti:
              <strong>“Bukan berarti saya sama sekali tidak bertanggung jawab.”</strong>
            </p>

            <p>
              Nuansanya lebih formal dan lebih hati-hati daripada
              sekadar mengatakan 責任がある.
            </p>
          `,

          usage: `
            <p>
              Pola ini sering dipakai ketika pembicara
              tidak ingin membuat pernyataan terlalu mutlak.
            </p>

            <p>
              Contoh:
              彼の考えが間違っていないものではない。
            </p>
            <p>
              → Bukan berarti pemikirannya sepenuhnya salah.
            </p>
          `,

          options: {
            0: `
              <strong>1. なしにはない</strong><br>
              <span>
                Bentuk ini tidak merupakan konstruksi yang benar
                untuk menyatakan “bukan berarti tidak ada tanggung jawab”.
              </span>
            `,
            1: `
              <strong>2. なくしてはない</strong><br>
              <span>
                ～なくしては berarti “tanpa ...”, bukan bentuk double negative
                yang dibutuhkan di sini.
              </span>
            `,
            2: `
              <strong>3. ないものではない</strong><br>
              <span>
                Benar. Menyatakan “bukan berarti tidak ada” dengan
                nuansa hati-hati/formal.
              </span>
            `,
            3: `
              <strong>4. なくはない</strong><br>
              <span>
                Secara makna memang dekat dan secara tata bahasa bisa berarti
                “bukan berarti tidak ada”, tetapi soal ini menguji pola
                ～ないものではない yang lebih formal dan cocok dengan konteks
                pengakuan tanggung jawab secara hati-hati.
              </span>
            `
          }
        }
      },


      /* =====================================================
         9. なくして
      ===================================================== */
      {
        question: '住民の協力（ ）、ゴミの削減はできない。',
        options: [
          '1 にして',
          '2 ならでは',
          '3 なくして',
          '4 ないものを'
        ],
        correct: 2,

        explanation: {
          title: '～なくして',
          correct: `
            <p><strong>Jawaban benar: 3. なくして</strong></p>

            <p>
              <strong>～なくして</strong> berarti
              <strong>“tanpa ...”</strong> dengan nuansa yang kuat dan formal.
            </p>

            <p>
              <strong>住民の協力なくして、ゴミの削減はできない</strong>
              =
              “Tanpa kerja sama warga, pengurangan sampah tidak dapat dilakukan.”
            </p>

            <p>
              Biasanya menekankan bahwa sesuatu merupakan
              <strong>syarat penting yang tidak dapat dihilangkan</strong>.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>努力なくして成功はない。</p>
            <p>→ Tanpa usaha, tidak ada keberhasilan.</p>

            <p>
              Pola ini sangat umum pada tulisan formal,
              pidato, slogan, dan artikel.
            </p>
          `,

          options: {
            0: `
              <strong>1. にして</strong><br>
              <span>
                ～にして memiliki arti seperti “baru setelah menjadi ...”,
                “dalam keadaan ...”, atau fungsi lain. Tidak cocok dengan
                makna “tanpa kerja sama warga”.
              </span>
            `,
            1: `
              <strong>2. ならでは</strong><br>
              <span>
                ～ならでは berarti “khas ... / hanya bisa dilakukan oleh ...”.
                Tidak cocok dalam hubungan syarat mutlak.
              </span>
            `,
            2: `
              <strong>3. なくして</strong><br>
              <span>
                Benar. Menunjukkan bahwa pengurangan sampah tidak mungkin
                terjadi tanpa kerja sama warga.
              </span>
            `,
            3: `
              <strong>4. ないものを</strong><br>
              <span>
                ないものを bukan konstruksi yang tepat di sini.
                Kalimat membutuhkan pola yang bermakna “tanpa”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         10. ずくめ
      ===================================================== */
      {
        question: 'A社の今回の人事人は異例（ ）だった。',
        options: [
          '1 ずくめ',
          '2 まみれ',
          '3 ならでは',
          '4 ぐるみ'
        ],
        correct: 0,

        explanation: {
          title: '～ずくめ',
          correct: `
            <p><strong>Jawaban benar: 1. ずくめ</strong></p>

            <p>
              <strong>～ずくめ</strong> berarti
              <strong>“penuh dengan ...”, “semuanya ...”</strong>.
            </p>

            <p>
              <strong>異例ずくめ</strong> berarti
              <strong>“penuh dengan hal-hal yang tidak biasa”</strong>
              atau “serba tidak biasa”.
            </p>

            <p>
              ～ずくめ sering dipakai untuk sesuatu yang
              <strong>didominasi oleh satu karakteristik</strong>.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>今日はいいことずくめだった。</p>
            <p>→ Hari ini penuh dengan hal-hal baik.</p>

            <p>黒ずくめの服装</p>
            <p>→ Pakaian serba hitam.</p>
          `,

          options: {
            0: `
              <strong>1. ずくめ</strong><br>
              <span>
                Benar. 異例ずくめ berarti penuh dengan kejadian/personalia
                yang tidak biasa.
              </span>
            `,
            1: `
              <strong>2. まみれ</strong><br>
              <span>
                ～まみれ berarti “berlumuran/terlapisi sesuatu”,
                biasanya benda yang tidak menyenangkan seperti 泥まみれ.
                Tidak cocok dengan 異例.
              </span>
            `,
            2: `
              <strong>3. ならでは</strong><br>
              <span>
                ～ならでは berarti “khas ...”. Tidak cocok untuk
                menyatakan “penuh dengan kejadian tidak biasa”.
              </span>
            `,
            3: `
              <strong>4. ぐるみ</strong><br>
              <span>
                ～ぐるみ berarti “melibatkan seluruh kelompok/bagian”,
                seperti 家族ぐるみ. Tidak sesuai dengan 異例.
              </span>
            `
          }
        }
      },


      /* =====================================================
         11. にあって
      ===================================================== */
      {
        question: '国際化の時代（ ）、我が社の保守的なやり方は世界に通用しないのではないだろうか。',
        options: [
          '1 ですら',
          '2 にあって',
          '3 なみに',
          '4 なしに'
        ],
        correct: 1,

        explanation: {
          title: '～にあって',
          correct: `
            <p><strong>Jawaban benar: 2. にあって</strong></p>

            <p>
              <strong>～にあって</strong> berarti
              <strong>“dalam situasi/keadaan/era ...”</strong>.
            </p>

            <p>
              <strong>国際化の時代にあって</strong>
              berarti:
              “dalam era internasionalisasi seperti sekarang”.
            </p>

            <p>
              Ini adalah pola formal yang sering digunakan
              dalam esai, berita, laporan, dan tulisan akademik.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>厳しい経済状況にあって、会社は新しい戦略を考えた。</p>
            <p>
              → Dalam kondisi ekonomi yang sulit, perusahaan memikirkan
              strategi baru.
            </p>
          `,

          options: {
            0: `
              <strong>1. ですら</strong><br>
              <span>
                ですら berarti “bahkan”. Tidak dapat menyatakan
                “dalam era internasionalisasi”.
              </span>
            `,
            1: `
              <strong>2. にあって</strong><br>
              <span>
                Benar. Menunjukkan konteks atau kondisi yang menjadi
                latar belakang pernyataan.
              </span>
            `,
            2: `
              <strong>3. なみに</strong><br>
              <span>
                ～なみに biasanya berarti “setara/sebanding dengan ...”.
                Tidak cocok untuk 時代.
              </span>
            `,
            3: `
              <strong>4. なしに</strong><br>
              <span>
                ～なしに berarti “tanpa ...”.
                Tidak sesuai dengan makna konteks “dalam era ...”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         12. まみれ
      ===================================================== */
      {
        question: '試合中に大雨が降って泥（ ）になった。',
        options: [
          '1 ずくめ',
          '2 まみれ',
          '3 ぐるみ',
          '4 のだらけ'
        ],
        correct: 1,

        explanation: {
          title: '～まみれ',
          correct: `
            <p><strong>Jawaban benar: 2. まみれ</strong></p>

            <p>
              <strong>～まみれ</strong> berarti
              <strong>“berlumuran/tertutupi oleh ...”</strong>.
            </p>

            <p>
              <strong>泥まみれ</strong> berarti
              “berlumuran lumpur” atau “penuh lumpur”.
            </p>

            <p>
              Pola ini biasanya digunakan untuk benda/cairan yang
              menempel pada permukaan atau tubuh.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>汗まみれになる。</p>
            <p>→ Menjadi penuh dengan keringat.</p>

            <p>血まみれの服</p>
            <p>→ Pakaian yang berlumuran darah.</p>
          `,

          options: {
            0: `
              <strong>1. ずくめ</strong><br>
              <span>
                ずくめ berarti “serba/penuh dengan suatu karakteristik”,
                bukan tertutup oleh benda seperti lumpur.
              </span>
            `,
            1: `
              <strong>2. まみれ</strong><br>
              <span>
                Benar. Lumpur menempel di tubuh/pakaian sehingga
                digunakan 泥まみれ.
              </span>
            `,
            2: `
              <strong>3. ぐるみ</strong><br>
              <span>
                ぐるみ digunakan untuk kelompok atau keseluruhan,
                seperti 家族ぐるみ. Tidak cocok untuk lumpur.
              </span>
            `,
            3: `
              <strong>4. のだらけ</strong><br>
              <span>
                Pola yang benar adalah ～だらけ, bukan のだらけ
                dalam posisi ini. ～だらけ berarti penuh dengan sesuatu,
                tetapi 泥だらけ juga berbeda nuansanya dari 泥まみれ.
              </span>
            `
          }
        }
      },


      /* =====================================================
         13. ともなると
      ===================================================== */
      {
        question: '大企業（ ）、賃金が減らされるような状況だから、ボーナスのカットは避けられないだろう。',
        options: [
          '1 とあれば',
          '2 ともなると',
          '3 なりとも',
          '4 にして'
        ],
        correct: 1,

        explanation: {
          title: '～ともなると',
          correct: `
            <p><strong>Jawaban benar: 2. ともなると</strong></p>

            <p>
              Di sini <strong>大企業ともなると</strong> berarti
              “kalau sudah sampai pada tingkat sebuah perusahaan besar”.
            </p>

            <p>
              Pola ini menyiratkan:
              <strong>karena status/tingkatnya sudah besar, konsekuensinya juga besar.</strong>
            </p>

            <p>
              Jadi konteksnya adalah keadaan ekonomi yang sulit,
              bahkan perusahaan besar pun harus mengurangi upah,
              sehingga bonus juga kemungkinan akan dipotong.
            </p>
          `,

          usage: `
            <p>
              ～ともなると sangat sering digunakan untuk:
              usia, jabatan, ukuran, jumlah, tingkat, dan status.
            </p>
          `,

          options: {
            0: `
              <strong>1. とあれば</strong><br>
              <span>
                ～とあれば berarti “kalau memang ...”.
                Tidak menonjolkan perubahan akibat mencapai tingkat tertentu
                seperti ～ともなると.
              </span>
            `,
            1: `
              <strong>2. ともなると</strong><br>
              <span>
                Benar. Menunjukkan keadaan ketika sesuatu sudah mencapai
                tingkat/status tertentu.
              </span>
            `,
            2: `
              <strong>3. なりとも</strong><br>
              <span>
                ～なりとも berarti “walaupun hanya sedikit/setidaknya”.
                Tidak sesuai.
              </span>
            `,
            3: `
              <strong>4. にして</strong><br>
              <span>
                ～にして mempunyai fungsi lain dan tidak cocok untuk
                menyatakan “kalau sudah menjadi perusahaan besar”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         14. からする
      ===================================================== */
      {
        question: 'この時計が100万円（ ）なんて、信じられない。',
        options: [
          '1 とある',
          '2 ぐるみ',
          '3 からする',
          '4 ともあろう'
        ],
        correct: 2,

        explanation: {
          title: '～からする',
          correct: `
            <p><strong>Jawaban benar: 3. からする</strong></p>

            <p>
              <strong>～からする</strong> sering digunakan setelah angka
              atau nominal untuk menunjukkan
              <strong>harga/jumlah yang dimulai dari ... atau mencapai sekitar ...</strong>.
            </p>

            <p>
              <strong>100万円からする時計</strong>
              berarti:
              “jam tangan yang harganya mulai dari 1 juta yen”.
            </p>

            <p>
              Dalam konteks kalimat, pembicara terkejut karena
              harga tersebut sangat mahal.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>数十万円からする高級バッグ</p>
            <p>→ Tas mewah yang harganya mulai dari puluhan万円.</p>

            <p>100人からする大規模なイベント</p>
            <p>→ Acara besar yang melibatkan seratus orang atau lebih.</p>
          `,

          options: {
            0: `
              <strong>1. とある</strong><br>
              <span>
                とある berarti “tertentu” atau “sebut saja ...”
                dalam beberapa konteks. Tidak cocok untuk menyatakan
                nominal harga.
              </span>
            `,
            1: `
              <strong>2. ぐるみ</strong><br>
              <span>
                ぐるみ berarti “beserta seluruh kelompoknya”.
                Tidak memiliki hubungan dengan harga.
              </span>
            `,
            2: `
              <strong>3. からする</strong><br>
              <span>
                Benar. Menunjukkan nominal awal yang sangat besar,
                cocok untuk harga mahal.
              </span>
            `,
            3: `
              <strong>4. ともあろう</strong><br>
              <span>
                ～ともあろう digunakan untuk seseorang/entitas yang
                seharusnya memiliki status atau kemampuan tertentu,
                bukan untuk harga.
              </span>
            `
          }
        }
      },


      /* =====================================================
         15. なみ
      ===================================================== */
      {
        question: '彼はアマチュアだが、プロ（ ）の技術を持っている。',
        options: [
          '1 なみ',
          '2 ならでは',
          '3 ずくめ',
          '4 あって'
        ],
        correct: 0,

        explanation: {
          title: '～なみ',
          correct: `
            <p><strong>Jawaban benar: 1. なみ</strong></p>

            <p>
              <strong>～なみ</strong> berarti
              <strong>“setara dengan ...”, “selevel dengan ...”</strong>.
            </p>

            <p>
              <strong>プロなみの技術</strong>
              berarti:
              <strong>“kemampuan yang setara dengan seorang profesional.”</strong>
            </p>

            <p>
              Ini digunakan untuk membandingkan tingkat kemampuan,
              kualitas, jumlah, atau standar.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>彼の英語はネイティブなみだ。</p>
            <p>→ Bahasa Inggrisnya setara dengan penutur asli.</p>

            <p>プロなみの腕前</p>
            <p>→ Keahlian setingkat profesional.</p>
          `,

          options: {
            0: `
              <strong>1. なみ</strong><br>
              <span>
                Benar. プロなみ berarti setara dengan profesional.
              </span>
            `,
            1: `
              <strong>2. ならでは</strong><br>
              <span>
                ならでは berarti “khas / hanya bisa dilakukan oleh”.
                Bukan perbandingan tingkat kemampuan.
              </span>
            `,
            2: `
              <strong>3. ずくめ</strong><br>
              <span>
                ずくめ berarti “serba/penuh dengan”.
                Tidak cocok untuk perbandingan kemampuan.
              </span>
            `,
            3: `
              <strong>4. あって</strong><br>
              <span>
                ～あって dapat membentuk pola seperti ～あっての,
                tetapi hanya あって tidak berarti “setara dengan”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         16. SUSUNAN KATA — ものを
      ===================================================== */
      {
        question: '相談してくれれば _________ ★ _________ と言われても困る。',
        options: [
          '1 今頃',
          '2 何とかした',
          '3 何とかしてくれ',
          '4 ものを'
        ],

        // Urutan:
        // 今頃 → 何とかしてくれ → 何とかした → ものを
        // ★ berada pada posisi ke-3 -> 何とかした
        correct: 1,

        explanation: {
          title: '～ものを + susunan kata',
          correct: `
            <p><strong>Jawaban untuk posisi ★: 2. 何とかした</strong></p>

            <p>
              Urutan yang benar adalah:
            </p>

            <p>
              <strong>
                相談してくれれば、今頃、何とかしてくれと、
                何とかしたものを、と言われても困る。
              </strong>
            </p>

            <p>
              Namun secara struktur soal ini menguji hubungan:
              <strong>～ものを</strong>, yang menyatakan
              penyesalan, sesuatu yang sebenarnya seharusnya bisa terjadi,
              atau rasa “padahal ...”.
            </p>

            <p>
              Bagian <strong>何とかしたものを</strong>
              memiliki nuansa:
              <strong>“padahal saya sebenarnya bisa melakukan sesuatu”</strong>
              atau “seharusnya bisa ditangani”.
            </p>

            <p>
              Sementara <strong>何とかしてくれ</strong> adalah bentuk perintah:
              “tolong lakukan sesuatu”, sehingga tidak berada di posisi ★.
            </p>
          `,

          usage: `
            <p>
              <strong>～ものを</strong> sering muncul dalam bahasa formal/literer
              untuk mengungkapkan penyesalan atau keadaan yang sebenarnya
              bisa berbeda.
            </p>

            <p>
              もっと早く言ってくれれば、手伝ったものを。
            </p>

            <p>
              → Kalau kamu memberi tahu lebih awal, padahal saya bisa membantu.
            </p>
          `,

          options: {
            0: `
              <strong>1. 今頃</strong><br>
              <span>
                今頃 berarti “sekarang” atau “saat ini pada waktu seperti ini”.
                Ini dapat menjadi keterangan waktu, tetapi bukan bagian
                yang membentuk konstruksi inti ～ものを.
              </span>
            `,
            1: `
              <strong>2. 何とかした</strong><br>
              <span>
                Benar untuk posisi ★. Bentuk lampau 何とかした
                kemudian dapat diikuti oleh ものを untuk menyatakan
                sesuatu yang sebenarnya dapat/semestinya dilakukan.
              </span>
            `,
            2: `
              <strong>3. 何とかしてくれ</strong><br>
              <span>
                何とかしてくれ adalah perintah/permintaan kuat:
                “tolong lakukan sesuatu”. Secara fungsi berbeda dari
                bentuk yang diikuti ～ものを.
              </span>
            `,
            3: `
              <strong>4. ものを</strong><br>
              <span>
                ものを adalah bagian penutup dari pola,
                bukan posisi ★ dalam susunan ini.
              </span>
            `
          }
        }
      },


      /* =====================================================
         17. にあって / ないが
      ===================================================== */
      {
        question: '君の気持ちはわからなく _________ ★ _________ ことは認めたほうがいいだろう。',
        options: [
          '1 言いすぎた',
          '2 ないが',
          '3 この状況',
          '4 にあって'
        ],

        // Urutan:
        // ないが → この状況 → にあって → 言いすぎた
        // ★ = にあって
        correct: 3,

        explanation: {
          title: '～にあって',
          correct: `
            <p><strong>Jawaban untuk posisi ★: 4. にあって</strong></p>

            <p>
              Struktur yang dimaksud adalah:
              <strong>
                君の気持ちはわからなくないが、
                この状況にあって言いすぎたことは認めたほうがいいだろう。
              </strong>
            </p>

            <p>
              <strong>～にあって</strong> berarti
              “dalam situasi/kondisi ...”.
            </p>

            <p>
              <strong>この状況にあって</strong>
              berarti:
              “dalam situasi seperti ini”.
            </p>

            <p>
              Sedangkan <strong>わからなくないが</strong>
              berarti “bukan berarti saya tidak mengerti”.
            </p>
          `,

          usage: `
            <p>
              ～にあって merupakan pola formal.
              Sangat sering muncul di artikel, laporan,
              esai, dan bahasa tertulis.
            </p>

            <p>
              Contoh:
              厳しい状況にあっても、努力を続けた。
            </p>
            <p>
              → Bahkan dalam situasi yang sulit, dia tetap berusaha.
            </p>
          `,

          options: {
            0: `
              <strong>1. 言いすぎた</strong><br>
              <span>
                言いすぎた berarti “terlalu banyak berkata / berkata terlalu jauh”.
                Kata ini memang merupakan bagian akhir dari kalimat,
                tetapi bukan posisi ★.
              </span>
            `,
            1: `
              <strong>2. ないが</strong><br>
              <span>
                ないが membentuk わからなくないが,
                yang berarti “bukan berarti tidak mengerti”.
                Fungsinya berada lebih awal.
              </span>
            `,
            2: `
              <strong>3. この状況</strong><br>
              <span>
                この状況 berarti “situasi ini”.
                Kata ini harus diikuti にあって agar menjadi
                “dalam situasi ini”.
              </span>
            `,
            3: `
              <strong>4. にあって</strong><br>
              <span>
                Benar untuk posisi ★.
                この状況にあって = “dalam situasi seperti ini”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         18. 涙なしには
      ===================================================== */
      {
        question: 'その映画は、_________ ★ _________ ものだった。',
        options: [
          '1 涙なしには',
          '2 見られない',
          '3 とあって',
          '4 アカデミー賞候補'
        ],
        correct: 0,

        explanation: {
          title: '～なしには～ない',
          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. 涙なしには</strong></p>

            <p>
              Urutan yang benar:
              <strong>
                その映画は、アカデミー賞候補とあって、
                涙なしには見られないものだった。
              </strong>
            </p>

            <p>
              <strong>～なしには～ない</strong> berarti:
              <strong>“tidak dapat ... tanpa ...”</strong>.
            </p>

            <p>
              <strong>涙なしには見られない</strong>
              berarti:
              <strong>“tidak bisa ditonton tanpa menangis”</strong>,
              atau secara natural:
              <strong>“film yang sangat mengharukan sampai sulit ditonton tanpa menangis.”</strong>
            </p>

            <p>
              <strong>アカデミー賞候補とあって</strong> berarti
              “karena memang menjadi kandidat Academy Award”.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>努力なしには成功できない。</p>
            <p>→ Tidak bisa berhasil tanpa usaha.</p>
          `,

          options: {
            0: `
              <strong>1. 涙なしには</strong><br>
              <span>
                Benar. Membentuk pola ～なしには～ない dengan 見られない.
              </span>
            `,
            1: `
              <strong>2. 見られない</strong><br>
              <span>
                見られない merupakan bagian akhir dari pola tersebut,
                sehingga tidak berada di posisi ★.
              </span>
            `,
            2: `
              <strong>3. とあって</strong><br>
              <span>
                とあって digunakan setelah アカデミー賞候補 untuk
                menyatakan “karena memang menjadi kandidat”.
              </span>
            `,
            3: `
              <strong>4. アカデミー賞候補</strong><br>
              <span>
                Ini berada lebih awal dalam struktur:
                アカデミー賞候補とあって.
              </span>
            `
          }
        }
      },


      /* =====================================================
         19. 違って
      ===================================================== */
      {
        question: '人のことと _________ ★ _________ ができないものだ。',
        options: [
          '1 なると',
          '2 違って',
          '3 冷静な見方',
          '4 いざ自分のことと'
        ],

        // Urutan:
        // 違って → いざ自分のことと → 冷静な見方 → なると
        // ★ = 冷静な見方
        correct: 2,

        explanation: {
          title: '～と違って',
          correct: `
            <p><strong>Jawaban untuk posisi ★: 3. 冷静な見方</strong></p>

            <p>
              Struktur yang dimaksud:
              <strong>
                人のことと違って、
                いざ自分のこととなると、
                冷静な見方ができないものだ。
              </strong>
            </p>

            <p>
              <strong>～と違って</strong> berarti
              “berbeda dari ...”.
            </p>

            <p>
              <strong>いざ～となると</strong> berarti
              “ketika benar-benar sampai pada situasi ...”
              atau “kalau sudah menyangkut diri sendiri ...”.
            </p>

            <p>
              Jadi makna keseluruhan:
              <strong>
                “Berbeda ketika menyangkut orang lain,
                begitu menyangkut diri sendiri, kita tidak bisa melihat
                sesuatu dengan tenang.”
              </strong>
            </p>
          `,

          usage: `
            <p>
              いざ～となると digunakan ketika kondisi sebenarnya
              terasa berbeda setelah benar-benar menghadapinya.
            </p>

            <p>
              Contoh:
              いざ自分のこととなると、判断が難しくなる。
            </p>
            <p>
              → Kalau sudah menyangkut diri sendiri,
              mengambil keputusan menjadi sulit.
            </p>
          `,

          options: {
            0: `
              <strong>1. なると</strong><br>
              <span>
                なると merupakan bagian dari いざ自分のこととなると,
                sehingga posisinya berada setelah 自分のことと.
              </span>
            `,
            1: `
              <strong>2. 違って</strong><br>
              <span>
                違って harus langsung mengikuti 人のことと:
                人のことと違って = “berbeda dari urusan orang lain”.
              </span>
            `,
            2: `
              <strong>3. 冷静な見方</strong><br>
              <span>
                Benar untuk posisi ★ karena diikuti ができない:
                冷静な見方ができない.
              </span>
            `,
            3: `
              <strong>4. いざ自分のことと</strong><br>
              <span>
                Ini memulai pola いざ自分のこととなると,
                jadi masih harus diikuti なると.
              </span>
            `
          }
        }
      },


      /* =====================================================
         20. 比べものにならない
      ===================================================== */
      {
        question: 'ここの通勤ラッシュはすごい _________ ★ _________ と思う。',
        options: [
          '1 ととは',
          '2 比べものにならない',
          '3 東京',
          '4 といえども'
        ],

        correct: 1,

        explanation: {
          title: '～と比べものにならない',
          correct: `
            <p><strong>Jawaban untuk posisi ★: 2. 比べものにならない</strong></p>

            <p>
              Struktur yang dimaksud:
              <strong>
                東京といえども比べものにならない
              </strong>
              dalam konteks perbandingan tingkat kehebatan/ekstremnya.
            </p>

            <p>
              <strong>比べものにならない</strong> berarti:
              <strong>“tidak dapat dibandingkan karena perbedaannya terlalu besar”</strong>.
            </p>

            <p>
              Secara sederhana:
              “Bahkan kalau dibandingkan dengan Tokyo,
              kereta/kemacetan komuter di sini jauh lebih parah.”
            </p>

            <p>
              <strong>～といえども</strong> berarti
              “meskipun disebut ... / bahkan ... pun”.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>以前とは比べものにならないほど便利になった。</p>
            <p>→ Menjadi jauh lebih praktis sampai tidak bisa dibandingkan dengan sebelumnya.</p>
          `,

          options: {
            0: `
              <strong>1. ととは</strong><br>
              <span>
                Bentuk ini tidak membentuk konstruksi yang benar
                dalam kalimat tersebut.
              </span>
            `,
            1: `
              <strong>2. 比べものにならない</strong><br>
              <span>
                Benar untuk posisi ★ karena menjadi predikat utama
                yang berarti “tidak sebanding”.
              </span>
            `,
            2: `
              <strong>3. 東京</strong><br>
              <span>
                東京 berada lebih awal sebagai kata yang dibandingkan:
                東京といえども...
              </span>
            `,
            3: `
              <strong>4. といえども</strong><br>
              <span>
                といえども langsung mengikuti 東京:
                東京といえども.
                Jadi posisinya sebelum 比べものにならない.
              </span>
            `
          }
        }
      },


      /* =====================================================
         21. なんとかしたい
      ===================================================== */
      {
        question: '年とともにひどくなる体のたるさや疲れ、[ 21 ] ものだろうかとお思いではありませんか。',
        options: [
          '1 どうしようもない',
          '2 どうにもならない',
          '3 なんとかしたい',
          '4 なんとならない'
        ],
        correct: 2,

        explanation: {
          title: 'なんとかしたい',
          correct: `
            <p><strong>Jawaban benar: 3. なんとかしたい</strong></p>

            <p>
              <strong>なんとかしたい</strong> berarti
              <strong>“ingin melakukan sesuatu untuk mengatasinya”</strong>
              atau “ingin mencari cara agar kondisi ini membaik”.
            </p>

            <p>
              Kalimat ini merupakan gaya bahasa iklan:
              “Bukankah Anda berpikir, ‘Saya ingin mengatasi rasa lelah
              dan kendurnya tubuh yang semakin parah seiring bertambah usia’?”
            </p>

            <p>
              Karena ada <strong>ものだろうかとお思いではありませんか</strong>,
              pembicara sedang menggugah perasaan pembaca:
              <strong>“Apakah Anda tidak berpikir ingin melakukan sesuatu terhadapnya?”</strong>
            </p>
          `,

          usage: `
            <p>
              <strong>なんとか</strong> = dengan cara tertentu / bagaimanapun caranya.
            </p>

            <p>
              <strong>なんとかしたい</strong> = ingin mengatasi keadaan dengan cara apa pun.
            </p>

            <p>Contoh:</p>
            <p>この問題をなんとかしたい。</p>
            <p>→ Saya ingin entah bagaimana menyelesaikan masalah ini.</p>
          `,

          options: {
            0: `
              <strong>1. どうしようもない</strong><br>
              <span>
                Berarti “tidak ada yang bisa dilakukan / tidak berdaya”.
                Maknanya justru pesimistis dan bertentangan dengan
                konteks iklan yang mengajak mencari solusi.
              </span>
            `,
            1: `
              <strong>2. どうにもならない</strong><br>
              <span>
                Berarti “tidak dapat diperbaiki/diselesaikan”.
                Ini juga bertentangan dengan ide bahwa pembaca
                masih ingin mengatasi masalah tersebut.
              </span>
            `,
            2: `
              <strong>3. なんとかしたい</strong><br>
              <span>
                Benar. Mengungkapkan keinginan untuk mencari cara
                mengatasi keluhan tersebut.
              </span>
            `,
            3: `
              <strong>4. なんとならない</strong><br>
              <span>
                Bentuk ini tidak merupakan ungkapan standar
                yang digunakan dalam konteks ini.
              </span>
            `
          }
        }
      },


      /* =====================================================
         22. ともなく
      ===================================================== */
      {
        question: '年齢のせいにして家で何を [ 22 ] ほーっとテレビを見て過ごす毎日をもったいないです。',
        options: [
          '1 するではなく',
          '2 するともなく',
          '3 しなくもなく',
          '4 しないではなく'
        ],
        correct: 1,

        explanation: {
          title: '～ともなく',
          correct: `
            <p><strong>Jawaban benar: 2. するともなく</strong></p>

            <p>
              <strong>何をするともなく</strong> berarti:
              <strong>“tanpa melakukan sesuatu secara khusus”</strong>
              atau “tidak jelas melakukan apa”.
            </p>

            <p>
              <strong>家で何をするともなく、ほーっとテレビを見て過ごす</strong>
              menggambarkan seseorang yang hanya menghabiskan waktu di rumah
              tanpa tujuan yang jelas.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>何をするともなく一日を過ごした。</p>
            <p>→ Saya menghabiskan hari tanpa melakukan sesuatu secara khusus.</p>
          `,

          options: {
            0: `
              <strong>1. するではなく</strong><br>
              <span>
                Tidak membentuk pola tata bahasa yang diperlukan.
                Bentuk ではなく berarti “bukan”, sedangkan konteks
                membutuhkan pola tanpa tujuan tertentu.
              </span>
            `,
            1: `
              <strong>2. するともなく</strong><br>
              <span>
                Benar. 何をするともなく adalah pola tetap.
              </span>
            `,
            2: `
              <strong>3. しなくもなく</strong><br>
              <span>
                Ini tidak membentuk konstruksi yang sesuai dengan
                makna “tidak melakukan sesuatu secara khusus”.
              </span>
            `,
            3: `
              <strong>4. しないではなく</strong><br>
              <span>
                Struktur ini berarti “bukan tidak melakukan ...”
                dan tidak cocok dengan konteks.
              </span>
            `
          }
        }
      },


      /* =====================================================
         23. ならではの
      ===================================================== */
      {
        question: '本日は長年の実績のある当社 [ 23 ] 商品をご紹介したいと思います。',
        options: [
          '1 ならではの',
          '2 なみの',
          '3 ともなる',
          '4 からする'
        ],
        correct: 0,

        explanation: {
          title: '～ならではの',
          correct: `
            <p><strong>Jawaban benar: 1. ならではの</strong></p>

            <p>
              <strong>～ならではの</strong> berarti:
              <strong>“khas ...”, “unik untuk ...”, “sesuatu yang hanya bisa dihasilkan oleh ...”</strong>.
            </p>

            <p>
              <strong>当社ならではの商品</strong>
              berarti:
              <strong>“produk yang menjadi ciri khas perusahaan kami”</strong>.
            </p>

            <p>
              Pola ini sering digunakan dalam promosi,
              presentasi, iklan, dan tulisan yang menekankan
              keunikan suatu produk atau organisasi.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>京都ならではの文化。</p>
            <p>→ Budaya yang khas Kyoto.</p>

            <p>専門店ならではの品質。</p>
            <p>→ Kualitas yang hanya bisa ditawarkan toko spesialis.</p>
          `,

          options: {
            0: `
              <strong>1. ならではの</strong><br>
              <span>
                Benar. Menunjukkan keunikan produk yang menjadi ciri khas
                perusahaan.
              </span>
            `,
            1: `
              <strong>2. なみの</strong><br>
              <span>
                なみの berarti “setara dengan ...”.
                Tidak cocok untuk menunjukkan ciri khas.
              </span>
            `,
            2: `
              <strong>3. ともなる</strong><br>
              <span>
                ～ともなる berarti “kalau sudah menjadi/ mencapai tingkat”.
                Tidak digunakan untuk membentuk ～ならではの.
              </span>
            `,
            3: `
              <strong>4. からする</strong><br>
              <span>
                ～からする digunakan untuk angka/harga/jumlah.
                Tidak cocok untuk menyatakan ciri khas.
              </span>
            `
          }
        }
      },


      /* =====================================================
         24. 多少なりとも
      ===================================================== */
      {
        question: 'ファンにとっても、力士たちの白熱した取組を見る [ 24 ]、日々のストレスや疲れが吹き飛ぶ思いがするものだ。',
        options: [
          '1 多少なりとも',
          '2 多少たりとも',
          '3 1日なりとも',
          '4 1日たりとも'
        ],
        correct: 0,

        explanation: {
          title: '多少なりとも',
          correct: `
            <p><strong>Jawaban benar: 1. 多少なりとも</strong></p>

            <p>
              <strong>多少なりとも</strong> berarti
              <strong>“sedikit banyak”, “walaupun hanya sedikit”</strong>.
            </p>

            <p>
              Dalam konteks ini, maksudnya adalah bahwa menyaksikan
              pertandingan sumo yang sengit memberi efek positif,
              setidaknya dalam kadar tertentu, terhadap stres dan kelelahan.
            </p>

            <p>
              <strong>～なりとも</strong> menekankan bahwa meskipun jumlahnya
              kecil, tetap ada efek atau nilai.
            </p>

            <p>
              <strong>Catatan penting:</strong>
              kalimat yang Anda kirim secara literal berbunyi
              「取組を見る多少なりとも」. Bentuk yang lebih alami
              biasanya membutuhkan penghubung seperti 「と」 atau koma:
              「取組を見ると、多少なりとも...」.
              Jadi pada data ini saya mempertahankan jawaban yang tampaknya
              dimaksud oleh soal aslinya: <strong>多少なりとも</strong>.
            </p>
          `,

          usage: `
            <p>Contoh:</p>
            <p>多少なりともお役に立てれば幸いです。</p>
            <p>→ Saya senang kalau bisa membantu walaupun sedikit.</p>
          `,

          options: {
            0: `
              <strong>1. 多少なりとも</strong><br>
              <span>
                Benar. Ini adalah ekspresi standar yang berarti
                “sedikit banyak / walaupun sedikit”.
              </span>
            `,
            1: `
              <strong>2. 多少たりとも</strong><br>
              <span>
                たりとも biasanya digunakan setelah jumlah kecil untuk
                menekankan “bahkan satu pun tidak”. Ekspresi tetap yang
                dibutuhkan di sini adalah 多少なりとも.
              </span>
            `,
            2: `
              <strong>3. 1日なりとも</strong><br>
              <span>
                1日なりとも berarti “meskipun hanya satu hari”.
                Konteksnya tidak sedang membicarakan durasi satu hari.
              </span>
            `,
            3: `
              <strong>4. 1日たりとも</strong><br>
              <span>
                1日たりとも berarti “bahkan satu hari pun”.
                Biasanya digunakan bersama bentuk negatif atau
                larangan, sehingga tidak cocok dengan konteks ini.
              </span>
            `
          }
        }
      },


      /* =====================================================
         25. とあって
      ===================================================== */
      {
        question: 'さて、気になるお値段の方ですが、この不況下 [ 25 ] お客様にあまりご負担をおかけするわけには参りません。',
        options: [
          '1 とあって',
          '2 ですら',
          '3 なりとも',
          '4 あっての'
        ],
        correct: 0,

        explanation: {
          title: '～とあって',
          correct: `
            <p><strong>Jawaban benar: 1. とあって</strong></p>

            <p>
              <strong>～とあって</strong> berarti:
              <strong>“karena memang kondisinya ...”</strong>
              atau “dengan keadaan seperti itu”.
            </p>

            <p>
              <strong>この不況下とあって</strong>
              berarti:
              <strong>“karena sedang berada dalam kondisi resesi seperti ini”</strong>.
            </p>

            <p>
              Kemudian muncul kesimpulan:
              <strong>
                お客様にあまりご負担をおかけするわけには参りません
              </strong>
              =
              “kami tidak dapat membuat pelanggan menanggung beban biaya yang terlalu besar.”
            </p>
          `,

          usage: `
            <p>
              ～とあって sering digunakan ketika keadaan khusus
              menyebabkan sebuah tindakan, keputusan, atau hasil tertentu.
            </p>

            <p>Contoh:</p>
            <p>人気店とあって、大勢の人が並んでいた。</p>
            <p>→ Karena memang itu restoran populer, banyak orang mengantre.</p>
          `,

          options: {
            0: `
              <strong>1. とあって</strong><br>
              <span>
                Benar. Menghubungkan kondisi “resesi” dengan keputusan
                untuk tidak membebani pelanggan terlalu besar.
              </span>
            `,
            1: `
              <strong>2. ですら</strong><br>
              <span>
                ですら berarti “bahkan”. Tidak menyatakan hubungan sebab
                seperti yang diperlukan kalimat ini.
              </span>
            `,
            2: `
              <strong>3. なりとも</strong><br>
              <span>
                なりとも berarti “walaupun hanya sedikit”.
                Tidak cocok dengan 不況下.
              </span>
            `,
            3: `
              <strong>4. あっての</strong><br>
              <span>
                あっての digunakan dalam pola seperti
                お客様あっての商売, yang berarti bisnis ada berkat pelanggan.
                Struktur ini berbeda dari kalimat soal.
              </span>
            `
          }
        }
      }

    ]
  }
};