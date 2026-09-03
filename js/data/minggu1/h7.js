window.W1H7 = {
  title: '７日目 実戦問題 (第1週テスト)',

  grammar: [],

  exam: {
    type: 'quiz',

    questions: [

      /* =====================================================
         1
      ===================================================== */
      {
        question: '彼のゴルフの腕はなかなかのものだが、プロの（ ）、まだまだだ。',

        options: [
          '1 私が言うのは',
          '2 私から言わせれば',
          '3 私に言われると',
          '4 私から言っては'
        ],

        correct: 1,

        explanation: {
          title: '～から言わせれば',

          correct: `
            <p><strong>Jawaban benar: 2. 私から言わせれば</strong></p>

            <p>
              <strong>～から言わせれば</strong> berarti
              “kalau dilihat dari sudut pandang saya”,
              “menurut saya”, atau “kalau saya yang menilai”.
            </p>

            <p>
              Kalimat ini berarti:
              <strong>“Kemampuan golfnya lumayan, tetapi kalau saya yang menilai dibandingkan dengan kemampuan profesional, masih jauh.”</strong>
            </p>

            <p>
              Pola ini biasanya digunakan ketika pembicara menyampaikan
              penilaian berdasarkan sudut pandangnya sendiri.
            </p>
          `,

          usage: `
            <p><strong>Rumus:</strong> 人 ＋ から言わせれば</p>

            <p>Contoh:</p>

            <p>私から言わせれば、まだ努力が足りない。</p>

            <p>
              → Kalau menurut saya, usahanya masih kurang.
            </p>
          `,

          options: {
            0: `
              <strong>1. 私が言うのは</strong><br>
              <span>
                私が言うのは berarti “hal yang saya katakan adalah...”
                dan tidak membentuk ungkapan penilaian dari sudut pandang.
              </span>
            `,

            1: `
              <strong>2. 私から言わせれば</strong><br>
              <span>
                Benar. ～から言わせれば berarti “kalau dilihat
                dari sudut pandang saya / menurut penilaian saya”.
              </span>
            `,

            2: `
              <strong>3. 私に言われると</strong><br>
              <span>
                Berarti “ketika diberitahu/dikatakan oleh saya”.
                Fokusnya bukan sudut pandang atau penilaian.
              </span>
            `,

            3: `
              <strong>4. 私から言っては</strong><br>
              <span>
                Bentuk ini tidak membentuk pola ～から言わせれば
                dan tidak cocok dengan struktur kalimat.
              </span>
            `
          }
        }
      },


      /* =====================================================
         2
      ===================================================== */
      {
        question: 'まじめな彼女（ ）、無断で休むということはないでしょう。',

        options: [
          '1 としているから',
          '2 としたところで',
          '3 に言わせれば',
          '4 のことだから'
        ],

        correct: 3,

        explanation: {
          title: '～のことだから',

          correct: `
            <p><strong>Jawaban benar: 4. のことだから</strong></p>

            <p>
              <strong>～のことだから</strong> digunakan ketika kita
              membuat suatu perkiraan berdasarkan sifat, karakter,
              atau kebiasaan seseorang.
            </p>

            <p>
              <strong>まじめな彼女のことだから</strong>
              berarti:
              “Karena dia orang yang serius/disiplin, ...”
            </p>

            <p>
              Jadi pembicara menyimpulkan bahwa orang tersebut
              kemungkinan besar tidak akan bolos tanpa izin.
            </p>
          `,

          usage: `
            <p>
              Pola ini sangat sering muncul ketika karakter seseorang
              menjadi dasar prediksi.
            </p>

            <p>
              彼のことだから、きっと約束を守るだろう。
            </p>

            <p>
              → Karena dia orang seperti itu, dia pasti akan menepati janji.
            </p>
          `,

          options: {
            0: `
              <strong>1. としているから</strong><br>
              <span>
                Tidak membentuk struktur yang tepat setelah まじめな彼女.
              </span>
            `,

            1: `
              <strong>2. としたところで</strong><br>
              <span>
                ～としたところで berarti “sekalipun ...”.
                Bukan untuk membuat prediksi berdasarkan karakter seseorang.
              </span>
            `,

            2: `
              <strong>3. に言わせれば</strong><br>
              <span>
                ～に言わせれば berarti “menurut ...” atau
                “kalau ditanyakan kepada ...”.
                Struktur maknanya berbeda.
              </span>
            `,

            3: `
              <strong>4. のことだから</strong><br>
              <span>
                Benar. Menjadikan sifat seseorang sebagai dasar
                perkiraan terhadap perilakunya.
              </span>
            `
          }
        }
      },


      /* =====================================================
         3
      ===================================================== */
      {
        question: 'ぼくの貯金は（ ）、増えることはない。',

        options: [
          '1 減るることにして',
          '2 減らずとみえて',
          '3 減ることのないように',
          '4 減りこそすれ'
        ],

        correct: 3,

        explanation: {
          title: '～こそあれ / ～こそすれ',

          correct: `
            <p><strong>Jawaban benar: 4. 減りこそすれ</strong></p>

            <p>
              <strong>～こそすれ</strong> digunakan untuk menegaskan
              bahwa hanya keadaan A yang mungkin terjadi,
              sedangkan keadaan yang berlawanan tidak terjadi.
            </p>

            <p>
              <strong>減りこそすれ、増えることはない</strong>
              berarti:
              “Kalau bukan berkurang, tidak mungkin bertambah.”
            </p>

            <p>
              Dalam konteks ini maknanya lebih natural:
              <strong>“Tabungan saya malah berkurang; bertambah sama sekali tidak.”</strong>
            </p>
          `,

          usage: `
            <p>
              Pola ～こそすれ sering digunakan untuk menekankan
              kontras yang kuat.
            </p>

            <p>
              悪くなりこそすれ、よくなることはない。
            </p>

            <p>
              → Bukannya membaik, malah memburuk.
            </p>
          `,

          options: {
            0: `
              <strong>1. 減るることにして</strong><br>
              <span>
                Selain ada kesalahan bentuk 「減るる」,
                ～ことにして berarti “memutuskan untuk ...”.
                Tidak sesuai konteks.
              </span>
            `,

            1: `
              <strong>2. 減らずとみえて</strong><br>
              <span>
                Berarti kira-kira “tampaknya tidak berkurang”.
                Ini bertentangan dengan 増えることはない.
              </span>
            `,

            2: `
              <strong>3. 減ることのないように</strong><br>
              <span>
                Berarti “agar tidak berkurang”.
                Kalau dipasang di sini maknanya bertentangan
                dengan pernyataan bahwa tabungan tidak bertambah.
              </span>
            `,

            3: `
              <strong>4. 減りこそすれ</strong><br>
              <span>
                Benar. ～こそすれ menegaskan bahwa kondisi yang pertama
                terjadi, sedangkan kondisi sebaliknya tidak.
              </span>
            `
          }
        }
      },


      /* =====================================================
         4
      ===================================================== */
      {
        question: '無駄な道路工事をする（ ）減税してほしい。',

        options: [
          '1 くらいなら',
          '2 ものならば',
          '3 とみると',
          '4 こそあれ'
        ],

        correct: 0,

        explanation: {
          title: '～くらいなら',

          correct: `
            <p><strong>Jawaban benar: 1. くらいなら</strong></p>

            <p>
              <strong>～くらいなら</strong> berarti
              “kalau pilihannya sampai harus melakukan A,
              lebih baik B”.
            </p>

            <p>
              <strong>無駄な道路工事をするくらいなら、減税してほしい</strong>
              berarti:
              “Daripada melakukan pembangunan jalan yang tidak perlu,
              lebih baik pajaknya dikurangi.”
            </p>
          `,

          usage: `
            <p>
              Pola ini menunjukkan preferensi:
              <strong>A lebih buruk, jadi saya lebih memilih B.</strong>
            </p>

            <p>
              嘘をつくくらいなら、何も言わないほうがいい。
            </p>

            <p>
              → Daripada berbohong, lebih baik tidak mengatakan apa-apa.
            </p>
          `,

          options: {
            0: `
              <strong>1. くらいなら</strong><br>
              <span>
                Benar. Menunjukkan pilihan alternatif:
                daripada melakukan pembangunan yang tidak perlu,
                pembicara lebih menginginkan pengurangan pajak.
              </span>
            `,

            1: `
              <strong>2. ものならば</strong><br>
              <span>
                ～ものなら berarti “kalau memang bisa ...”
                atau dalam bentuk tertentu “kalau sampai ...”.
                Tidak cocok dengan hubungan pilihan A atau B.
              </span>
            `,

            2: `
              <strong>3. とみると</strong><br>
              <span>
                Tidak cocok secara struktur maupun makna.
              </span>
            `,

            3: `
              <strong>4. こそあれ</strong><br>
              <span>
                ～こそあれ berarti “memang ada A, tetapi bukan B”
                atau menunjukkan kontras tertentu.
                Tidak cocok dengan ～くらいなら.
              </span>
            `
          }
        }
      },


      /* =====================================================
         5
      ===================================================== */
      {
        question: '練習（ ）、どんなスポーツも上達することはない。',

        options: [
          '1 することなしに',
          '2 しなかったことにして',
          '3 するとみえずに',
          '4 しないところを'
        ],

        correct: 0,

        explanation: {
          title: '～ことなしに',

          correct: `
            <p><strong>Jawaban benar: 1. することなしに</strong></p>

            <p>
              <strong>～ことなしに</strong> berarti
              <strong>“tanpa melakukan ...”</strong>
              dan merupakan bentuk yang cukup formal.
            </p>

            <p>
              <strong>練習することなしに上達することはない</strong>
              berarti:
              “Tidak mungkin menjadi mahir tanpa latihan.”
            </p>
          `,

          usage: `
            <p>
              Pola ini banyak ditemukan dalam tulisan formal,
              artikel, esai, dan bahasa akademik.
            </p>

            <p>
              努力することなしに成功することはできない。
            </p>

            <p>
              → Tidak mungkin sukses tanpa berusaha.
            </p>
          `,

          options: {
            0: `
              <strong>1. することなしに</strong><br>
              <span>
                Benar. Menyatakan “tanpa melakukan latihan”.
              </span>
            `,

            1: `
              <strong>2. しなかったことにして</strong><br>
              <span>
                ～ことにして berarti “menganggap/mengubah seolah-olah”.
                Tidak bermakna “tanpa”.
              </span>
            `,

            2: `
              <strong>3. するとみえずに</strong><br>
              <span>
                Tidak membentuk pola yang sesuai.
              </span>
            `,

            3: `
              <strong>4. しないところを</strong><br>
              <span>
                ところを memiliki fungsi seperti “padahal sedang ...”
                atau “meskipun ...”, bukan “tanpa”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         6
      ===================================================== */
      {
        question: '今年は消費税の値上げはない（ ）が、来年あたりはあるかもしれない。',

        options: [
          '1 とされている',
          '2 とさせられている',
          '3 ものになっている',
          '4 ものだとしたところ'
        ],

        correct: 0,

        explanation: {
          title: '～とされている',

          correct: `
            <p><strong>Jawaban benar: 1. とされている</strong></p>

            <p>
              <strong>～とされている</strong> berarti
              “dianggap”, “ditetapkan”, atau “dinyatakan secara umum”.
            </p>

            <p>
              Kalimat ini berarti:
              “Tahun ini dianggap/dinyatakan bahwa tidak akan ada
              kenaikan pajak konsumsi, tetapi mungkin tahun depan ada.”
            </p>

            <p>
              Pola ini sering digunakan untuk informasi yang berasal
              dari keputusan, kebijakan, aturan, atau pandangan umum.
            </p>
          `,

          usage: `
            <p>Contoh:</p>

            <p>この方法が最も効果的だとされている。</p>

            <p>→ Metode ini dianggap sebagai yang paling efektif.</p>
          `,

          options: {
            0: `
              <strong>1. とされている</strong><br>
              <span>
                Benar. Menyatakan bahwa sesuatu telah dianggap,
                ditetapkan, atau dinyatakan demikian.
              </span>
            `,

            1: `
              <strong>2. とさせられている</strong><br>
              <span>
                Memiliki nuansa “dipaksa untuk menganggap/membuat”.
                Tidak cocok dengan pernyataan kebijakan umum.
              </span>
            `,

            2: `
              <strong>3. ものになっている</strong><br>
              <span>
                Menunjukkan sesuatu telah berubah menjadi suatu keadaan.
                Tidak cocok dengan ～ない yang berupa pernyataan umum.
              </span>
            `,

            3: `
              <strong>4. ものだとしたところ</strong><br>
              <span>
                Tidak sesuai dengan struktur dan makna.
              </span>
            `
          }
        }
      },


      /* =====================================================
         7
      ===================================================== */
      {
        question: 'その会社は業績が悪い（ ）、あちこちの支店を閉店した。',

        options: [
          '1 とみえて',
          '2 とみられて',
          '3 とさせて',
          '4 とさせられて'
        ],

        correct: 0,

        explanation: {
          title: '～とみえて',

          correct: `
            <p><strong>Jawaban benar: 1. とみえて</strong></p>

            <p>
              <strong>～とみえて</strong> berarti
              “kelihatannya ...”, “tampaknya ...”,
              berdasarkan tanda atau keadaan yang terlihat.
            </p>

            <p>
              <strong>業績が悪いとみえて</strong>
              berarti:
              “Kelihatannya kinerja perusahaannya buruk,
              sehingga banyak cabang ditutup.”
            </p>

            <p>
              Pola ini menunjukkan dugaan pembicara berdasarkan
              bukti atau situasi yang terlihat.
            </p>
          `,

          usage: `
            <p>Contoh:</p>

            <p>疲れているとみえて、彼は早く帰った。</p>

            <p>→ Kelihatannya dia lelah, jadi dia pulang lebih awal.</p>
          `,

          options: {
            0: `
              <strong>1. とみえて</strong><br>
              <span>
                Benar. Menunjukkan dugaan berdasarkan kondisi yang terlihat.
              </span>
            `,

            1: `
              <strong>2. とみられて</strong><br>
              <span>
                ～とみられている berarti “diperkirakan/dipandang secara umum”.
                Di sini kalimat membutuhkan dugaan langsung berdasarkan
                tindakan perusahaan.
              </span>
            `,

            2: `
              <strong>3. とさせて</strong><br>
              <span>
                Berasal dari させる, “membuat/memaksa”.
                Tidak cocok.
              </span>
            `,

            3: `
              <strong>4. とさせられて</strong><br>
              <span>
                Berarti “dipaksa untuk ...”.
                Tidak sesuai konteks.
              </span>
            `
          }
        }
      },


      /* =====================================================
         8
      ===================================================== */
      {
        question: '仕事といっても、月に２、３回（ ）ところです。',

        options: [
          '1 ぐらいなら',
          '2 とみる',
          '3 こソの',
          '4 という'
        ],

        correct: 3,

        explanation: {
          title: '～というところだ',

          correct: `
            <p><strong>Jawaban benar: 4. という</strong></p>

            <p>
              <strong>～というところだ</strong> berarti
              “kira-kira ...”, “paling-paling ...”,
              atau “kurang lebih sampai pada tingkat ...”.
            </p>

            <p>
              <strong>月に２、３回というところです</strong>
              berarti:
              “Kira-kira dua atau tiga kali sebulan.”
            </p>
          `,

          usage: `
            <p>
              Digunakan untuk memperkirakan jumlah, durasi,
              tingkat, atau keadaan secara kasar.
            </p>

            <p>
              参加者は100人というところだ。
            </p>

            <p>
              → Pesertanya kira-kira sekitar 100 orang.
            </p>
          `,

          options: {
            0: `
              <strong>1. ぐらいなら</strong><br>
              <span>
                ～くらいなら digunakan untuk perbandingan pilihan,
                bukan perkiraan jumlah dalam konteks ini.
              </span>
            `,

            1: `
              <strong>2. とみる</strong><br>
              <span>
                Tidak cocok dengan struktur 「２、３回とみるところ」.
              </span>
            `,

            2: `
              <strong>3. こソの</strong><br>
              <span>
                Bentuk ini bukan konstruksi tata bahasa yang benar.
              </span>
            `,

            3: `
              <strong>4. という</strong><br>
              <span>
                Benar. Membentuk 「月に２、３回というところです」,
                yaitu “sekitar dua atau tiga kali sebulan”.
              </span>
            `
          }
        }
      },


      /* =====================================================
         9
      ===================================================== */
      {
        question: 'このきゅうりは、（ ）味は抜群にいい。',

        options: [
          '1 形が悪いこそあれ',
          '2 形の悪さこそすれ',
          '3 形こそ悪いが',
          '4 形こそ悪さあれ'
        ],

        correct: 2,

        explanation: {
          title: '～こそ～が',

          correct: `
            <p><strong>Jawaban benar: 3. 形こそ悪いが</strong></p>

            <p>
              <strong>～こそ～が</strong> menegaskan suatu hal,
              lalu menghubungkannya dengan fakta yang berlawanan.
            </p>

            <p>
              <strong>形こそ悪いが、味は抜群にいい</strong>
              berarti:
              “Memang bentuknya jelek, tetapi rasanya sangat enak.”
            </p>
          `,

          usage: `
            <p>
              Digunakan untuk membuat kontras:
              “memang A, tetapi B”.
            </p>

            <p>
              値段こそ高いが、品質はすばらしい。
            </p>

            <p>
              → Memang harganya mahal, tetapi kualitasnya luar biasa.
            </p>
          `,

          options: {
            0: `
              <strong>1. 形が悪いこそあれ</strong><br>
              <span>
                ～こそあれ mempunyai struktur berbeda dan biasanya
                berarti “memang ada A, tetapi ...”.
                Bentuk yang paling natural untuk kalimat ini adalah
                形こそ悪いが.
              </span>
            `,

            1: `
              <strong>2. 形の悪さこそすれ</strong><br>
              <span>
                ～こそすれ tidak cocok dengan predikat berikutnya
                dalam struktur ini.
              </span>
            `,

            2: `
              <strong>3. 形こそ悪いが</strong><br>
              <span>
                Benar. Menegaskan “memang bentuknya buruk”,
                kemudian dikontraskan dengan kualitas rasa.
              </span>
            `,

            3: `
              <strong>4. 形こそ悪さあれ</strong><br>
              <span>
                「悪さあれ」 tidak membentuk pola yang benar.
              </span>
            `
          }
        }
      },


      /* =====================================================
         10
      ===================================================== */
      {
        question: 'この仕組みを（ ）無駄だよ。この会社は君が思う以上に保守的だから。',

        options: [
          '1 変えようとしたって',
          '2 変えようとみると',
          '3 変えることなしに',
          '4 変えるとされても'
        ],

        correct: 0,

        explanation: {
          title: '～ようとしたって',

          correct: `
            <p><strong>Jawaban benar: 1. 変えようとしたって</strong></p>

            <p>
              <strong>～たって</strong> dalam bahasa percakapan
              merupakan bentuk dari ～ても dan berarti
              “meskipun ...”.
            </p>

            <p>
              <strong>変えようとしたって無駄だ</strong>
              berarti:
              <strong>“Sekalipun kamu mencoba mengubah sistem ini,
              tetap percuma.”</strong>
            </p>
          `,

          usage: `
            <p>
              ～たって sering digunakan dalam percakapan informal
              untuk menunjukkan bahwa hasilnya tidak berubah
              walaupun suatu usaha dilakukan.
            </p>

            <p>
              いくら説明したって、彼は納得しない。
            </p>

            <p>
              → Sekalipun dijelaskan berkali-kali,
              dia tidak akan puas.
            </p>
          `,

          options: {
            0: `
              <strong>1. 変えようとしたって</strong><br>
              <span>
                Benar. “Meskipun mencoba mengubahnya, tetap percuma.”
              </span>
            `,

            1: `
              <strong>2. 変えようとみると</strong><br>
              <span>
                Tidak merupakan bentuk tata bahasa yang tepat.
              </span>
            `,

            2: `
              <strong>3. 変えることなしに</strong><br>
              <span>
                Berarti “tanpa mengubah”.
                Tidak sesuai dengan makna bahwa usaha mengubah
                tetap percuma.
              </span>
            `,

            3: `
              <strong>4. 変えるとされても</strong><br>
              <span>
                Berarti sesuatu seperti “meskipun dianggap akan mengubah”.
                Struktur dan maknanya tidak sesuai.
              </span>
            `
          }
        }
      },


      /* =====================================================
         11
      ===================================================== */
      {
        question: '今時、こんな古い洗濯機を使っているのは、うち（ ）。',

        options: [
          '1 ぐらいのところだ',
          '2 ぐらいのものだ',
          '3 ぐらいだとしている',
          '4 ぐらいだとされている'
        ],

        correct: 1,

        explanation: {
          title: '～ぐらいのものだ',

          correct: `
            <p><strong>Jawaban benar: 2. ぐらいのものだ</strong></p>

            <p>
              <strong>～ぐらいのものだ</strong> digunakan untuk
              menyatakan jumlah/kelompok yang sangat terbatas:
              <strong>“hanya sekitar ... saja”</strong>.
            </p>

            <p>
              <strong>うちぐらいのものだ</strong>
              berarti:
              “Mungkin hanya rumah kami saja yang masih memakai
              mesin cuci setua ini.”
            </p>
          `,

          usage: `
            <p>Contoh:</p>

            <p>彼に反対するのは私ぐらいのものだ。</p>

            <p>
              → Yang menentangnya mungkin cuma saya.
            </p>
          `,

          options: {
            0: `
              <strong>1. ぐらいのところだ</strong><br>
              <span>
                ～のところだ lebih sering berarti “sampai pada sekitar
                tingkat/jumlah ...”. Tidak pas untuk menyatakan
                “hanya kami saja”.
              </span>
            `,

            1: `
              <strong>2. ぐらいのものだ</strong><br>
              <span>
                Benar. Menekankan bahwa hanya sedikit pihak yang
                berada dalam keadaan tersebut.
              </span>
            `,

            2: `
              <strong>3. ぐらいだとしている</strong><br>
              <span>
                Tidak alami dan tidak memiliki fungsi yang dibutuhkan.
              </span>
            `,

            3: `
              <strong>4. ぐらいだとされている</strong><br>
              <span>
                ～とされている berarti “dianggap/dinyatakan”.
                Tidak sesuai konteks.
              </span>
            `
          }
        }
      },


      /* =====================================================
         12
      ===================================================== */
      {
        question: '高速料金の割引で、今度の連休は例年以上に渋滞する（ ）。',

        options: [
          '1 ものとしている',
          '2 ところだとみえる',
          '3 とみられている',
          '4 としたところだ'
        ],

        correct: 2,

        explanation: {
          title: '～とみられている',

          correct: `
            <p><strong>Jawaban benar: 3. とみられている</strong></p>

            <p>
              <strong>～とみられている</strong> berarti
              “diperkirakan”, “dipandang”, atau
              “diprediksi secara umum”.
            </p>

            <p>
              <strong>渋滞するとみられている</strong>
              berarti:
              “diperkirakan akan terjadi kemacetan.”
            </p>

            <p>
              Pola ini sangat umum dalam berita,
              laporan, analisis, dan bahasa formal.
            </p>
          `,

          usage: `
            <p>
              事故の影響で電車は遅れるとみられている。
            </p>

            <p>
              → Diperkirakan kereta akan terlambat karena kecelakaan.
            </p>
          `,

          options: {
            0: `
              <strong>1. ものとしている</strong><br>
              <span>
                Biasanya berarti memperlakukan sesuatu sebagai asumsi/ketetapan.
                Tidak cocok untuk prediksi berita.
              </span>
            `,

            1: `
              <strong>2. ところだとみえる</strong><br>
              <span>
                Struktur ini tidak cocok dengan konteks prediksi resmi.
              </span>
            `,

            2: `
              <strong>3. とみられている</strong><br>
              <span>
                Benar. Menunjukkan prediksi atau penilaian yang
                dianggap umum berdasarkan data/keadaan.
              </span>
            `,

            3: `
              <strong>4. としたところだ</strong><br>
              <span>
                Tidak sesuai dengan makna perkiraan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         13
      ===================================================== */
      {
        question: '契約書は双方がそれぞれ保管する（ ）。',

        options: [
          '1 ようとする',
          '2 ものとする',
          '3 ぐらいになる',
          '4 こととみる'
        ],

        correct: 1,

        explanation: {
          title: '～ものとする',

          correct: `
            <p><strong>Jawaban benar: 2. ものとする</strong></p>

            <p>
              <strong>～ものとする</strong> adalah pola formal
              yang berarti:
              <strong>“ditetapkan bahwa ...”</strong>,
              “dianggap/diberlakukan sebagai ...”.
            </p>

            <p>
              Dalam kontrak atau peraturan, pola ini sangat penting.
            </p>

            <p>
              <strong>双方がそれぞれ保管するものとする</strong>
              berarti:
              “Kedua pihak ditetapkan untuk menyimpan dokumen tersebut
              masing-masing.”
            </p>
          `,

          usage: `
            <p>
              Pola ini sering digunakan dalam:
              kontrak, peraturan, dokumen resmi, dan ketentuan.
            </p>

            <p>Contoh:</p>

            <p>支払いは月末までに行うものとする。</p>

            <p>
              → Pembayaran ditetapkan harus dilakukan paling lambat akhir bulan.
            </p>
          `,

          options: {
            0: `
              <strong>1. ようとする</strong><br>
              <span>
                ～ようとする berarti “mencoba/berniat melakukan”.
                Tidak cocok untuk isi kontrak.
              </span>
            `,

            1: `
              <strong>2. ものとする</strong><br>
              <span>
                Benar. Menetapkan suatu aturan atau ketentuan secara formal.
              </span>
            `,

            2: `
              <strong>3. ぐらいになる</strong><br>
              <span>
                Berarti “menjadi sekitar ...”.
                Sama sekali tidak cocok.
              </span>
            `,

            3: `
              <strong>4. こととみる</strong><br>
              <span>
                Tidak merupakan pola standar yang digunakan
                untuk menetapkan aturan kontrak.
              </span>
            `
          }
        }
      },


      /* =====================================================
         14
      ===================================================== */
      {
        question: '過去の失敗は過ぎたものとして（ ）。',

        options: [
          '1 どうしても覚えているものだ',
          '2 思い出そうとしても思い出せない',
          '3 思い出さずにはいられない',
          '4 忘れてしまうほうがいい'
        ],

        correct: 3,

        explanation: {
          title: '～ものとして',

          correct: `
            <p><strong>Jawaban benar: 4. 忘れてしまうほうがいい</strong></p>

            <p>
              <strong>～ものとして</strong> dapat berarti
              “anggap sebagai ...”, “diperlakukan sebagai ...”.
            </p>

            <p>
              <strong>過ぎたものとして</strong>
              berarti:
              “anggap saja itu sudah berlalu”.
            </p>

            <p>
              Karena itu, kesimpulan yang cocok adalah:
              <strong>“Sebaiknya melupakan kegagalan masa lalu dan menganggapnya sebagai sesuatu yang sudah berlalu.”</strong>
            </p>
          `,

          usage: `
            <p>Contoh:</p>

            <p>そのことはなかったものとして扱おう。</p>

            <p>
              → Mari anggap saja hal itu tidak pernah terjadi.
            </p>
          `,

          options: {
            0: `
              <strong>1. どうしても覚えているものだ</strong><br>
              <span>
                Berarti “tetap mengingatnya bagaimanapun juga”,
                bertentangan dengan ide menganggap kegagalan itu sudah berlalu.
              </span>
            `,

            1: `
              <strong>2. 思い出そうとしても思い出せない</strong><br>
              <span>
                Berarti “meskipun mencoba mengingat, tidak bisa ingat”.
                Tidak berhubungan langsung dengan ～ものとして.
              </span>
            `,

            2: `
              <strong>3. 思い出さずにはいられない</strong><br>
              <span>
                Berarti “tidak bisa tidak mengingat”.
                Justru bertentangan dengan saran untuk meninggalkannya
                sebagai masa lalu.
              </span>
            `,

            3: `
              <strong>4. 忘れてしまうほうがいい</strong><br>
              <span>
                Benar. “Lebih baik melupakannya” sesuai dengan
                過ぎたものとして.
              </span>
            `
          }
        }
      },


      /* =====================================================
         15
      ===================================================== */
      {
        question: '寝ないでやったところで、（ ）。',

        options: [
          '1 疲れすぎて熟睡できないだろう',
          '2 それを完成させるのは不可能だろう',
          '3 もう少し長く続けることができるだろう',
          '4 なんとかそれを仕上げることができるだろう'
        ],

        correct: 1,

        explanation: {
          title: '～たところで',

          correct: `
            <p><strong>Jawaban benar: 2. それを完成させるのは不可能だろう</strong></p>

            <p>
              <strong>～たところで</strong> berarti
              <strong>“sekalipun melakukan ... hasilnya tetap tidak berubah”</strong>.
            </p>

            <p>
              <strong>寝ないでやったところで</strong>
              berarti:
              “Sekalipun mengerjakannya tanpa tidur ...”
            </p>

            <p>
              Hasil yang paling tepat adalah:
              <strong>“tetap tidak mungkin menyelesaikannya.”</strong>
            </p>
          `,

          usage: `
            <p>
              Nuansanya cukup negatif/pesimistis.
              Usaha dilakukan, tetapi hasil yang diharapkan
              tetap tidak tercapai.
            </p>

            <p>
              今から急いだところで、間に合わない。
            </p>

            <p>
              → Sekalipun terburu-buru mulai sekarang,
              tetap tidak akan sempat.
            </p>
          `,

          options: {
            0: `
              <strong>1. 疲れすぎて熟睡できないだろう</strong><br>
              <span>
                Tidak berhubungan langsung dengan usaha mengerjakan tugas.
              </span>
            `,

            1: `
              <strong>2. それを完成させるのは不可能だろう</strong><br>
              <span>
                Benar. ～たところで menekankan bahwa usaha tersebut
                tidak akan menghasilkan hasil yang diharapkan.
              </span>
            `,

            2: `
              <strong>3. もう少し長く続けることができるだろう</strong><br>
              <span>
                Ini justru menunjukkan hasil positif, bertentangan
                dengan nuansa ～たところで dalam kalimat.
              </span>
            `,

            3: `
              <strong>4. なんとかそれを仕上げることができるだろう</strong><br>
              <span>
                Juga menunjukkan keberhasilan, padahal ～たところで
                biasanya menunjukkan bahwa hasil tetap tidak memadai.
              </span>
            `
          }
        }
      },


      /* =====================================================
         16
      ===================================================== */
      {
        question: '外食した ___ ___ ★ ___ とすれば かなりの額になるだろう。',

        options: [
          '1 その分を貯めた',
          '2 ことにして',
          '3 とすれば',
          '4 外食した'
        ],

        correct: 0,

        fullSentence:
          '外食した【 2 ことにして 】【 1★ その分を貯めた 】【 3 とすれば 】かなりの額になるだろう。',

        explanation: {
          title: '～ことにして + ～とすれば',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 1. その分を貯めた</strong></p>

            <p>
              Susunan yang benar:
              <strong>
                外食したことにして、その分を貯めたとすれば、
                かなりの額になるだろう。
              </strong>
            </p>

            <p>
              <strong>～ことにして</strong> berarti
              “menganggap/berpura-pura memutuskan bahwa ...”.
            </p>

            <p>
              <strong>その分を貯めたとすれば</strong>
              berarti:
              “kalau seandainya uang sebesar itu ditabung...”
            </p>
          `,

          usage: `
            <p>
              ～とすれば berarti “kalau diasumsikan ...”,
              sedangkan ～ことにして berarti “dengan menganggap ...”.
            </p>
          `,

          options: {
            0: `
              <strong>1. その分を貯めた</strong><br>
              <span>
                Benar untuk posisi ★.
                その分を貯めたとすれば adalah struktur yang alami.
              </span>
            `,

            1: `
              <strong>2. ことにして</strong><br>
              <span>
                Harus berada setelah 外食した:
                外食したことにして.
              </span>
            `,

            2: `
              <strong>3. とすれば</strong><br>
              <span>
                Menjadi penutup klausa asumsi:
                その分を貯めたとすれば.
              </span>
            `,

            3: `
              <strong>4. 外食した</strong><br>
              <span>
                Berada di awal dan menjadi pasangan dengan
                ことにして.
              </span>
            `
          }
        }
      },


      /* =====================================================
         17
      ===================================================== */
      {
        question: 'その政治家は、国民の信頼を ___ ___ ★ ___ ことを約束した。',

        options: [
          '1 ことの',
          '2 裏切ったりする',
          '3 心がける',
          '4 ないように'
        ],

        correct: 3,

        fullSentence:
          'その政治家は、国民の信頼を【 2 裏切ったりする 】【 1 ことの 】【 4★ ないように 】心がける ことを約束した。',

        explanation: {
          title: '～ことのないように',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 4. ないように</strong></p>

            <p>
              Struktur:
              <strong>
                国民の信頼を裏切ったりすることのないように
              </strong>
              berarti:
              “agar tidak melakukan hal seperti mengkhianati kepercayaan rakyat.”
            </p>

            <p>
              <strong>～ことのないように</strong> digunakan untuk
              mencegah suatu hal yang tidak diinginkan terjadi.
            </p>
          `,

          usage: `
            <p>
              忘れることのないように、メモしておいてください。
            </p>

            <p>
              → Tolong catat agar tidak lupa.
            </p>
          `,

          options: {
            0: `
              <strong>1. ことの</strong><br>
              <span>
                Harus berada sebelum ない:
                ことのないように.
              </span>
            `,

            1: `
              <strong>2. 裏切ったりする</strong><br>
              <span>
                Menjadi isi tindakan yang ingin dihindari.
              </span>
            `,

            2: `
              <strong>3. 心がける</strong><br>
              <span>
                Berarti “berusaha memperhatikan/berupaya”.
                Berada setelah ～ないように.
              </span>
            `,

            3: `
              <strong>4. ないように</strong><br>
              <span>
                Benar untuk posisi ★ karena melengkapi
                pola ことのないように.
              </span>
            `
          }
        }
      },


      /* =====================================================
         18
      ===================================================== */
      {
        question: '彼は簡単だと ___ ___ ★ ___ 言わせれば、不可能としか思えない。',

        options: [
          '1 言うが',
          '2 私に',
          '3 やったことがない',
          '4 言わせれば'
        ],

        correct: 3,

        fullSentence:
          '彼は簡単だと【 1 言うが 】【 3 やったことがない 】【 2 私に 】【 4★ 言わせれば 】、不可能としか思えない。',

        explanation: {
          title: '～に言わせれば',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 4. 言わせれば</strong></p>

            <p>
              Struktur:
              <strong>
                彼は簡単だと言うが、やったことがない私に言わせれば、
                不可能としか思えない。
              </strong>
            </p>

            <p>
              <strong>～に言わせれば</strong> berarti
              “kalau ditanya kepada ...” atau
              “menurut penilaian ...”.
            </p>

            <p>
              Di sini pembicara mengatakan:
              <strong>“Kalau menurut saya yang belum pernah melakukannya,
              saya hanya bisa menganggapnya mustahil.”</strong>
            </p>
          `,

          usage: `
            <p>
              Pola ini sering digunakan ketika pembicara ingin
              menekankan sudut pandang orang tertentu.
            </p>
          `,

          options: {
            0: `
              <strong>1. 言うが</strong><br>
              <span>
                Harus berada setelah 彼は簡単だと.
              </span>
            `,

            1: `
              <strong>2. 私に</strong><br>
              <span>
                Harus menjadi pasangan dengan 言わせれば:
                私に言わせれば.
              </span>
            `,

            2: `
              <strong>3. やったことがない</strong><br>
              <span>
                Menjelaskan 私:
                “saya yang belum pernah melakukannya”.
              </span>
            `,

            3: `
              <strong>4. 言わせれば</strong><br>
              <span>
                Benar untuk posisi ★. Membentuk ～に言わせれば.
              </span>
            `
          }
        }
      },


      /* =====================================================
         19
      ===================================================== */
      {
        question: '留学生の多くが、程度の違い ___ ___ ★ ___ とみえる。',

        options: [
          '1 とみえる',
          '2 に悩まされている',
          '3 言葉の問題',
          '4 こそあれ'
        ],

        correct: 1,

        fullSentence:
          '留学生の多くが、程度の違い【 4 こそあれ 】【 3 言葉の問題 】【 2★ に悩まされている 】とみえる。',

        explanation: {
          title: '～こそあれ',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 2. に悩まされている</strong></p>

            <p>
              Struktur:
              <strong>
                程度の違いこそあれ、言葉の問題に悩まされている
              </strong>
              berarti:
              “Walaupun tingkatnya berbeda-beda,
              mereka tetap menghadapi masalah bahasa.”
            </p>

            <p>
              <strong>悩まされる</strong> berarti
              “dibuat menderita/terganggu oleh sesuatu”.
            </p>
          `,

          usage: `
            <p>
              ～こそあれ digunakan untuk mengakui adanya perbedaan
              pada hal pertama, tetapi keadaan utama tetap sama.
            </p>

            <p>
              程度の差こそあれ、誰でも経験することだ。
            </p>

            <p>
              → Meskipun tingkatnya berbeda, semua orang mengalaminya.
            </p>
          `,

          options: {
            0: `
              <strong>1. とみえる</strong><br>
              <span>
                Harus berada paling akhir sebagai kesimpulan:
                ～とみえる.
              </span>
            `,

            1: `
              <strong>2. に悩まされている</strong><br>
              <span>
                Benar untuk posisi ★ karena membentuk:
                言葉の問題に悩まされている.
              </span>
            `,

            2: `
              <strong>3. 言葉の問題</strong><br>
              <span>
                Harus berada sebelum に悩まされている.
              </span>
            `,

            3: `
              <strong>4. こそあれ</strong><br>
              <span>
                Berada setelah 程度の違い:
                程度の違いこそあれ.
              </span>
            `
          }
        }
      },


      /* =====================================================
         20
      ===================================================== */
      {
        question: 'うちの息子は ___ ___ ★ ___ 気が失せる ようで困ったものだ。',

        options: [
          '1 天気が悪い',
          '2 気が失せる',
          '3 とみると',
          '4 学校へ行く'
        ],

        correct: 3,

        fullSentence:
          'うちの息子は【 1 天気が悪い 】【 3 とみると 】【 4★ 学校へ行く 】気が失せる ようで困ったものだ。',

        explanation: {
          title: '～とみると',

          correct: `
            <p><strong>Jawaban untuk posisi ★: 4. 学校へ行く</strong></p>

            <p>
              Struktur yang diberikan adalah:
              <strong>
                天気が悪いとみると学校へ行く気が失せる
              </strong>.
            </p>

            <p>
              <strong>～とみると</strong> berarti:
              “begitu melihat/menganggap bahwa ...”.
            </p>

            <p>
              Namun, kalimat asli terlihat agak janggal secara semantis.
              Secara struktur, ★ berada pada <strong>学校へ行く</strong>
              karena membentuk <strong>学校へ行く気が失せる</strong>.
            </p>
          `,

          usage: `
            <p>
              気が失せる berarti “kehilangan keinginan/semangat
              untuk melakukan sesuatu”.
            </p>

            <p>
              仕事をする気が失せた。
            </p>

            <p>
              → Saya kehilangan semangat untuk bekerja.
            </p>
          `,

          options: {
            0: `
              <strong>1. 天気が悪い</strong><br>
              <span>
                Berada di awal sebagai klausa kondisi.
              </span>
            `,

            1: `
              <strong>2. 気が失せる</strong><br>
              <span>
                Menjadi bagian akhir dan menjelaskan hilangnya
                keinginan untuk pergi ke sekolah.
              </span>
            `,

            2: `
              <strong>3. とみると</strong><br>
              <span>
                Harus mengikuti 天気が悪い.
              </span>
            `,

            3: `
              <strong>4. 学校へ行く</strong><br>
              <span>
                Benar untuk posisi ★ karena membentuk:
                学校へ行く気が失せる.
              </span>
            `
          }
        }
      },


      /* =====================================================
         21
      ===================================================== */
      {
        question: '相撲の世界は大変厳しいものである。日本古来の伝統を重んじる縦社会の中で、しきたりを学びながら激しい稽古を積む [ 21 ]、上に上がっていくことはできない。',

        options: [
          '1 ことなしには',
          '2 ことにすると',
          '3 ことなく',
          '4 こととて'
        ],

        correct: 0,

        explanation: {
          title: '～ことなしには～ない',

          correct: `
            <p><strong>Jawaban benar: 1. ことなしには</strong></p>

            <p>
              <strong>～ことなしには～ない</strong> berarti
              “tidak mungkin ... tanpa ...”.
            </p>

            <p>
              <strong>激しい稽古を積むことなしには、上に上がっていくことはできない</strong>
              berarti:
              “Tanpa menjalani latihan keras, seseorang tidak bisa naik ke tingkat yang lebih tinggi.”
            </p>
          `,

          usage: `
            <p>
              Pola ini merupakan versi formal dari
              ～ないでは / ～なくしては.
            </p>

            <p>
              努力することなしには成功できない。
            </p>

            <p>
              → Tanpa usaha, tidak mungkin berhasil.
            </p>
          `,

          options: {
            0: `
              <strong>1. ことなしには</strong><br>
              <span>
                Benar. Menunjukkan syarat yang mutlak diperlukan.
              </span>
            `,

            1: `
              <strong>2. ことにすると</strong><br>
              <span>
                Berarti “kalau memutuskan untuk ...”.
                Tidak cocok dengan makna syarat.
              </span>
            `,

            2: `
              <strong>3. ことなく</strong><br>
              <span>
                Berarti “tanpa melakukan ...”, tetapi struktur
                pada soal membutuhkan pola yang diikuti oleh
                上に上がっていくことはできない.
                ことなしには lebih tepat untuk struktur ini.
              </span>
            `,

            3: `
              <strong>4. こととて</strong><br>
              <span>
                ～こととて adalah bentuk formal/literer untuk alasan
                seperti “karena ...”. Tidak cocok di sini.
              </span>
            `
          }
        }
      },


      /* =====================================================
         22
      ===================================================== */
      {
        question: 'しかし、全体で700人ほどいる力士の中で、幕内と呼ばれる上位42人に残れるのはごくわずかな人間だけである。毎日のように厳しい稽古に耐え抜いた [ 22 ]、けがや不振に泣く力士も少なくない。',

        options: [
          '1 ものだから',
          '2 ものの',
          '3 ものとする',
          '4 ものの、それから'
        ],

        correct: 1,

        explanation: {
          title: '～ものの',

          correct: `
            <p><strong>Jawaban benar: 2. ものの</strong></p>

            <p>
              <strong>～ものの</strong> berarti
              <strong>“meskipun ... / walaupun ...”</strong>.
            </p>

            <p>
              Struktur kalimatnya:
              <strong>
                厳しい稽古に耐え抜いたものの、けがや不振に泣く力士も少なくない。
              </strong>
            </p>

            <p>
              Artinya:
              “Meskipun telah mampu bertahan melalui latihan keras,
              tidak sedikit pegulat yang tetap menderita karena cedera
              atau performa buruk.”
            </p>
          `,

          usage: `
            <p>
              ～ものの merupakan pola pertentangan formal,
              mirip dengan ～が atau ～けれども,
              tetapi lebih sering muncul dalam tulisan.
            </p>

            <p>
              買ったものの、ほとんど使っていない。
            </p>

            <p>
              → Meskipun sudah membeli, hampir tidak pernah digunakan.
            </p>
          `,

          options: {
            0: `
              <strong>1. ものだから</strong><br>
              <span>
                ～ものだから berarti “karena ...” dan biasanya
                digunakan untuk memberikan alasan/penjelasan.
                Bukan pertentangan.
              </span>
            `,

            1: `
              <strong>2. ものの</strong><br>
              <span>
                Benar. Menyatakan kontras antara latihan keras
                dan hasil yang tetap belum memuaskan.
              </span>
            `,

            2: `
              <strong>3. ものとする</strong><br>
              <span>
                Berarti “menetapkan/menganggap”.
                Tidak cocok.
              </span>
            `,

            3: `
              <strong>4. ものの、それから</strong><br>
              <span>
                Struktur tidak alami dan tidak dibutuhkan.
              </span>
            `
          }
        }
      },


      /* =====================================================
         23
      ===================================================== */
      {
        question: 'ある力士は、「若いころは無理をしても体がついてきたが、この年齢 [ 23 ]、無理がきかなくなってきた」と語る。',

        options: [
          '1 くらいなら',
          '2 こそあれ',
          '3 とあって',
          '4 ともなると'
        ],

        correct: 3,

        explanation: {
          title: '～ともなると',

          correct: `
            <p><strong>Jawaban benar: 4. ともなると</strong></p>

            <p>
              <strong>～ともなると</strong> berarti:
              “ketika sudah mencapai usia/tahap tertentu”.
            </p>

            <p>
              <strong>この年齢ともなると</strong>
              berarti:
              “kalau sudah mencapai usia seperti ini”.
            </p>

            <p>
              Kalimat ini menunjukkan bahwa ketika seseorang sudah
              mencapai usia tertentu, kondisi fisiknya berubah.
            </p>
          `,

          usage: `
            <p>
              Pola ini sering dipakai bersama:
              usia, jabatan, tingkat, jumlah, ukuran, dan tahap.
            </p>

            <p>
              大学生ともなると、自分で判断することが求められる。
            </p>

            <p>
              → Kalau sudah menjadi mahasiswa, seseorang dituntut
              mampu mengambil keputusan sendiri.
            </p>
          `,

          options: {
            0: `
              <strong>1. くらいなら</strong><br>
              <span>
                Menunjukkan preferensi “daripada ...”.
                Tidak cocok.
              </span>
            `,

            1: `
              <strong>2. こそあれ</strong><br>
              <span>
                Menunjukkan konsesi/perbedaan.
                Tidak berhubungan dengan pencapaian usia tertentu.
              </span>
            `,

            2: `
              <strong>3. とあって</strong><br>
              <span>
                Berarti “karena kondisinya demikian”.
                Meskipun dekat secara makna, soal ini menekankan
                “ketika mencapai usia tertentu”, sehingga ともなると paling tepat.
              </span>
            `,

            3: `
              <strong>4. ともなると</strong><br>
              <span>
                Benar. Menunjukkan perubahan yang terjadi
                setelah mencapai tahap/usia tertentu.
              </span>
            `
          }
        }
      },


      /* =====================================================
         24
      ===================================================== */
      {
        question: 'ファンにとっても、力士たちの白熱した取組を見る [ 24 ]、日々のストレスや疲れが吹き飛ぶ思いがするものだ。',

        options: [
          '1 ものの',
          '2 ことなしに',
          '3 とあれば',
          '4 とすると'
        ],

        correct: 0,

        explanation: {
          title: '～ものの',

          correct: `
            <p><strong>Jawaban benar: 1. ものの</strong></p>

            <p>
              Namun, perlu dicatat bahwa teks soal ini tampaknya
              mengalami penghilangan bagian kalimat.
            </p>

            <p>
              <strong>～ものの</strong> sendiri berarti “meskipun ...”,
              tetapi struktur:
              <strong>取組を見るものの、ストレスや疲れが吹き飛ぶ</strong>
              tidak memiliki pertentangan yang jelas.
            </p>

            <p>
              Jadi jawaban ini mengikuti kunci yang diberikan,
              tetapi teks soal sebaiknya diperiksa kembali dari sumber aslinya.
            </p>
          `,

          usage: `
            <p>
              ～ものの digunakan ketika A benar,
              tetapi kenyataannya B menjadi kontras.
            </p>
          `,

          options: {
            0: `
              <strong>1. ものの</strong><br>
              <span>
                Sesuai dengan pola pertentangan ～ものの,
                dan mengikuti kunci yang diberikan pada data.
              </span>
            `,

            1: `
              <strong>2. ことなしに</strong><br>
              <span>
                Berarti “tanpa ...”. Tidak sesuai dengan struktur.
              </span>
            `,

            2: `
              <strong>3. とあれば</strong><br>
              <span>
                Berarti “kalau memang demikian”.
                Biasanya diikuti akibat atau keputusan tertentu.
              </span>
            `,

            3: `
              <strong>4. とすると</strong><br>
              <span>
                Berarti “kalau demikian/kalau diasumsikan”.
                Tidak cocok dengan struktur kalimat ini.
              </span>
            `
          }
        }
      },


      /* =====================================================
         25
      ===================================================== */
      {
        question: '勝負の世界の厳しさと美しさが共存する相撲は、これからも多くの人々を魅了し続ける [ 25 ]。',

        options: [
          '1 ことだろう',
          '2 べきではない',
          '3 にちがいない',
          '4 ほかはない'
        ],

        correct: 2,

        explanation: {
          title: '～に違いない',

          correct: `
            <p><strong>Jawaban benar: 3. にちがいない</strong></p>

            <p>
              <strong>～に違いない</strong> berarti:
              <strong>“pasti”, “tidak diragukan lagi”, “tentu ...”</strong>.
            </p>

            <p>
              <strong>魅了し続けるに違いない</strong>
              berarti:
              <strong>“pasti akan terus memikat banyak orang.”</strong>
            </p>

            <p>
              Pola ini menunjukkan keyakinan kuat berdasarkan
              alasan atau bukti yang dimiliki pembicara.
            </p>
          `,

          usage: `
            <p>
              彼はきっと成功するに違いない。
            </p>

            <p>
              → Dia pasti akan berhasil.
            </p>
          `,

          options: {
            0: `
              <strong>1. ことだろう</strong><br>
              <span>
                Berarti “mungkin/kemungkinan besar akan ...”.
                Bisa secara umum digunakan, tetapi kunci soal
                menekankan keyakinan yang lebih kuat dengan に違いない.
              </span>
            `,

            1: `
              <strong>2. べきではない</strong><br>
              <span>
                Berarti “tidak seharusnya ...”.
                Bertentangan dengan makna kalimat.
              </span>
            `,

            2: `
              <strong>3. にちがいない</strong><br>
              <span>
                Benar. Menunjukkan keyakinan kuat bahwa sumo
                akan terus memikat banyak orang.
              </span>
            `,

            3: `
              <strong>4. ほかはない</strong><br>
              <span>
                Berarti “tidak ada pilihan lain”.
                Tidak sesuai konteks prediksi.
              </span>
            `
          }
        }
      }

    ]
  }
};