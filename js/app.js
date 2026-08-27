const courseData = {
    week1: {
        title: "第1週 努力してこそ合格できる",
        days: {
            day1: window.W1H1, day2: window.W1H2, day3: window.W1H3,
            day4: window.W1H4, day5: window.W1H5, day6: window.W1H6, day7: window.W1H7
        }
    }
};

// Data Dummy untuk minggu 2 - 8
for (let w = 2; w <= 8; w++) {
    courseData[`week${w}`] = { title: `第${w}週 (Belum Tersedia)`, days: {} };
    for (let d = 1; d <= 7; d++) {
        courseData[`week${w}`].days[`day${d}`] = {
            title: `Hari ${d} (Materi Kosong)`, grammar: [],
            exam: { type: "html", content: `<p><i class="bi bi-info-circle"></i> Materi Ujian Minggu ${w} Hari ${d} akan segera ditambahkan.</p>` }
        };
    }
}

let activeWeek = 'week1';
let activeDay = 'day1';
let openWeek = 'week1';

const sidebarContainer = document.getElementById('filterContainer');
const grammarCards = document.getElementById('grammarCards');
const miniExam = document.getElementById('miniExam');
const examContent = document.getElementById('examContent');
const headerBanner = document.querySelector('.header-banner');
const searchInput = document.getElementById('searchInput');

function renderSidebar() {
    sidebarContainer.innerHTML = '';
    Object.keys(courseData).forEach(wKey => {
        const wData = courseData[wKey];
        const group = document.createElement('div');
        group.className = 'week-group';
        
        const wBtn = document.createElement('button');
        wBtn.className = `week-btn ${openWeek === wKey ? 'open' : ''}`;
        wBtn.innerHTML = `<i class="bi bi-journal-bookmark-fill"></i> Week ${wKey.replace('week','')}<i class="bi bi-chevron-down chevron"></i>`;
        
        const daysContainer = document.createElement('div');
        daysContainer.className = `days-container ${openWeek === wKey ? 'show' : ''}`;

        wBtn.onclick = () => {
            openWeek = openWeek === wKey ? null : wKey;
            renderSidebar(); 
        };
        group.appendChild(wBtn);

        Object.keys(wData.days).forEach(dKey => {
            const dBtn = document.createElement('button');
            dBtn.className = `day-btn ${wKey === activeWeek && dKey === activeDay ? 'active' : ''}`;
            
            const isExam = dKey === 'day7';
            const icon = isExam ? '<i class="bi bi-trophy"></i>' : '<i class="bi bi-record-circle"></i>';
            const text = isExam ? 'Hari 7 (Exam)' : `Hari ${dKey.replace('day','')}`;
            
            dBtn.innerHTML = `${icon} ${text}`;
            dBtn.onclick = () => {
                searchInput.value = '';
                loadContent(wKey, dKey);
            };
            daysContainer.appendChild(dBtn);
        });

        group.appendChild(daysContainer);
        sidebarContainer.appendChild(group);
    });
}

function createCardHTML(item, index) {
    const savedStatus = localStorage.getItem(`status_${item.id}`) || '0';
    
    const examplesHTML = item.examples.map(ex => 
        `<div class="example-box"><i class="bi bi-caret-right-fill"></i> ${ex}</div>`
    ).join('');
    
    return `
        <div class="card card-animate" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <span class="grammar-rule">${item.rule}</span>
                ${item.formal ? '<span class="badge-formal">硬 (Formal)</span>' : ''}
            </div>
            <div class="card-body">
                <div class="section-title">Arti & Makna</div>
                <div class="lang-id">${item.meaning.id}</div>
                <div class="lang-en">${item.meaning.en}</div>
                <div class="lang-cn">${item.meaning.cn}</div>
                
                <div class="section-title">Penjelasan / Formula</div>
                <div class="explanation-text">${item.explanation}</div>
                
                <div class="section-title">Contoh Kalimat</div>
                ${examplesHTML}
            </div>
            <div class="card-footer">
                <button class="status-btn btn-0 ${savedStatus === '0' ? 'active' : ''}" onclick="updateStatus('${item.id}', '0', this)"><i class="bi bi-x-circle"></i> Belum</button>
                <button class="status-btn btn-1 ${savedStatus === '1' ? 'active' : ''}" onclick="updateStatus('${item.id}', '1', this)"><i class="bi bi-exclamation-triangle"></i> Agak</button>
                <button class="status-btn btn-2 ${savedStatus === '2' ? 'active' : ''}" onclick="updateStatus('${item.id}', '2', this)"><i class="bi bi-check-circle"></i> Hafal</button>
            </div>
        </div>
    `;
}

// Render Sistem Ujian Interaktif
function renderExam(examData) {
    if (!examData) {
        miniExam.classList.add('hidden');
        return;
    }

    miniExam.classList.remove('hidden');
    miniExam.classList.remove('fade-in');
    void miniExam.offsetWidth; 
    miniExam.classList.add('fade-in');

    // Jika tipe ujian adalah HTML mentah (seperti pesan kosong)
    if (examData.type === 'html') {
        examContent.innerHTML = examData.content;
        return;
    }

    // Jika tipe ujian adalah Quiz Interaktif (Array of Questions)
    let output = `<div class="quiz-container">`;
    let totalScore = 0;

    examData.questions.forEach((q, qIndex) => {
        output += `
            <div class="exam-q" id="question-${qIndex}">
                <p><strong>Pertanyaan ${qIndex + 1}:</strong> ${q.question}</p>
                <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
        `;

        q.options.forEach((opt, optIndex) => {
            output += `
                <button class="exam-opt-btn" onclick="checkAnswer(${qIndex}, ${optIndex}, ${q.correct}, this)" style="padding: 0.6rem 1rem; text-align: left; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-color); cursor: pointer; font-weight: 600;">
                    ${optIndex + 1}. ${opt}
                </button>
            `;
        });

        output += `</div><div class="exam-feedback" id="feedback-${qIndex}" style="margin-top: 0.5rem; font-weight: bold; font-size: 0.9rem;"></div></div><hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 1rem 0;">`;
    });

    output += `<button id="submitExamBtn" onclick="evaluateExam(${examData.questions.length})" style="background: var(--primary); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 1rem;"><i class="bi bi-send-check"></i> Selesai & Lihat Skor</button>`;
    output += `<div id="examResultSummary" style="margin-top: 1rem; font-size: 1.2rem; font-weight: bold;"></div>`;
    output += `</div>`;

    examContent.innerHTML = output;
}

// Logika Pengecekan Jawaban Per Soal
window.userAnswers = {};
window.checkAnswer = function(qIndex, optIndex, correctOpt, btnElement) {
    const parentContainer = btnElement.parentElement;
    const buttons = parentContainer.querySelectorAll('button');
    
    // Nonaktifkan semua tombol di soal ini setelah dipilih
    buttons.forEach(b => b.disabled = true);
    
    window.userAnswers[qIndex] = optIndex;

    if (optIndex === correctOpt) {
        btnElement.style.background = '#2a9d8f';
        btnElement.style.color = 'white';
        document.getElementById(`feedback-${qIndex}`).innerHTML = `<span style="color: #2a9d8f;"><i class="bi bi-check-circle-fill"></i> Benar!</span>`;
    } else {
        btnElement.style.background = '#ef233c';
        btnElement.style.color = 'white';
        buttons[correctOpt].style.background = '#2a9d8f';
        buttons[correctOpt].style.color = 'white';
        document.getElementById(`feedback-${qIndex}`).innerHTML = `<span style="color: #ef233c;"><i class="bi bi-x-circle-fill"></i> Kurang tepat. Jawaban benar ada di nomor ${correctOpt + 1}.</span>`;
    }
}

window.evaluateExam = function(totalQuestions) {
    let score = 0;
    let answeredCount = Object.keys(window.userAnswers).length;

    if (answeredCount < totalQuestions) {
        alert("Harap jawab semua pertanyaan terlebih dahulu!");
        return;
    }

    // Hitung skor berdasarkan soal yang benar
    // (Akan dievaluasi secara dinamis berdasarkan state tombol atau simpanan)
    let currentDayData = courseData[activeWeek]?.days[activeDay];
    if(currentDayData && currentDayData.exam && currentDayData.exam.questions) {
        currentDayData.exam.questions.forEach((q, idx) => {
            if (window.userAnswers[idx] === q.correct) {
                score++;
            }
        });
    }

    const percentage = (score / totalQuestions) * 100;
    const summaryEl = document.getElementById('examResultSummary');
    summaryEl.innerHTML = `Skor Anda: ${score} / ${totalQuestions} (${percentage}%) - ${percentage >= 70 ? '🎉 Luar Biasa!' : '💪 Ayo belajar lagi!'}`;
}

function loadContent(week, day) {
    activeWeek = week; activeDay = day;
    window.userAnswers = {}; // Reset jawaban ujian saat pindah halaman
    renderSidebar();

    headerBanner.classList.remove('fade-in');
    void headerBanner.offsetWidth; 
    headerBanner.classList.add('fade-in');

    const targetDay = courseData[week]?.days[day];
    document.getElementById('weekTitle').innerHTML = `<i class="bi bi-book"></i> ${courseData[week].title}`;
    document.getElementById('dayTitle').innerText = targetDay ? targetDay.title : '';

    grammarCards.innerHTML = '';

    if (!targetDay || (!targetDay.grammar.length && !targetDay.exam)) {
        grammarCards.innerHTML = '<p style="color: var(--text-sub);"><i class="bi bi-info-circle"></i> Data materi kosong.</p>';
        miniExam.classList.add('hidden');
        return;
    }

    targetDay.grammar.forEach((item, index) => {
        grammarCards.insertAdjacentHTML('beforeend', createCardHTML(item, index));
    });

    if (targetDay.exam) {
        renderExam(targetDay.exam);
    } else {
        miniExam.classList.add('hidden');
    }
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        loadContent(activeWeek, activeDay);
        return;
    }
    
    let results = [];
    Object.keys(courseData).forEach(wKey => {
        Object.keys(courseData[wKey].days).forEach(dKey => {
            const dayData = courseData[wKey].days[dKey];
            if (dayData.grammar) {
                dayData.grammar.forEach(item => {
                    if (
                        item.rule.toLowerCase().includes(query) || 
                        item.meaning.id.toLowerCase().includes(query) ||
                        item.meaning.en.toLowerCase().includes(query)
                    ) {
                        results.push(item);
                    }
                });
            }
        });
    });

    document.getElementById('weekTitle').innerHTML = `<i class="bi bi-search"></i> Hasil Pencarian`;
    document.getElementById('dayTitle').innerText = `Menemukan ${results.length} tata bahasa untuk: "${query}"`;
    
    grammarCards.innerHTML = '';
    miniExam.classList.add('hidden');

    if (results.length === 0) {
        grammarCards.innerHTML = '<p style="color: var(--text-sub);"><i class="bi bi-search"></i> Tidak ada hasil yang ditemukan.</p>';
        return;
    }

    results.forEach((item, index) => {
        grammarCards.insertAdjacentHTML('beforeend', createCardHTML(item, index));
    });
});

window.updateStatus = function(id, statusVal, btn) {
    localStorage.setItem(`status_${id}`, statusVal);
    const parent = btn.parentElement;
    parent.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
};

document.getElementById('langToggle').addEventListener('change', (e) => {
    document.body.className = document.body.className.replace(/lang-show-\w+/g, '');
    document.body.classList.add(`lang-show-${e.target.value}`);
});

document.getElementById('memoToggle').addEventListener('click', (e) => {
    const isMemo = document.body.classList.toggle('memo-mode');
    const btn = e.currentTarget;
    btn.innerHTML = isMemo ? '<i class="bi bi-brain"></i> Mode Hafal: ON' : '<i class="bi bi-brain"></i> Mode Hafal: OFF';
    btn.style.background = isMemo ? "var(--color-hafal)" : "rgba(255,255,255,0.9)";
    btn.style.color = isMemo ? "white" : "var(--primary)";
});

document.getElementById('themeToggle').addEventListener('click', (e) => {
    const isDark = document.body.classList.toggle('dark-mode');
    e.currentTarget.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
});

// App Initialize
renderSidebar();
loadContent('week1', 'day1');