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
            exam: `<p>Materi Ujian Minggu ${w} Hari ${d} akan segera ditambahkan.</p>`
        };
    }
}

let activeWeek = 'week1';
let activeDay = 'day1';
let openWeek = 'week1'; // Menyimpan state accordion mana yang terbuka

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
        
        // Tombol Week (Accordion Toggle)
        const wBtn = document.createElement('button');
        wBtn.className = `week-btn ${openWeek === wKey ? 'open' : ''}`;
        wBtn.innerHTML = `<i class="bi bi-journal-bookmark-fill"></i> Week ${wKey.replace('week','')}<i class="bi bi-chevron-down chevron"></i>`;
        
        // Container Hari (Accordion Content)
        const daysContainer = document.createElement('div');
        daysContainer.className = `days-container ${openWeek === wKey ? 'show' : ''}`;

        wBtn.onclick = () => {
            // Jika diklik minggu yang sama, tutup. Jika beda, buka yang baru.
            openWeek = openWeek === wKey ? null : wKey;
            renderSidebar(); 
        };
        group.appendChild(wBtn);

        // Render tombol hari di dalam container
        Object.keys(wData.days).forEach(dKey => {
            const dBtn = document.createElement('button');
            dBtn.className = `day-btn ${wKey === activeWeek && dKey === activeDay ? 'active' : ''}`;
            
            const isExam = dKey === 'day7';
            const icon = isExam ? '<i class="bi bi-trophy"></i>' : '<i class="bi bi-record-circle"></i>';
            const text = isExam ? 'Hari 7 (Exam)' : `Hari ${dKey.replace('day','')}`;
            
            dBtn.innerHTML = `${icon} ${text}`;
            dBtn.onclick = () => {
                searchInput.value = ''; // Reset pencarian jika klik menu samping
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
    
    // Render Contoh Kalimat dengan ikon Bootstrap pengganti emoji
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

function loadContent(week, day) {
    activeWeek = week; activeDay = day;
    renderSidebar();

    // Trigger Animasi Header
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
        miniExam.classList.remove('hidden');
        miniExam.classList.remove('fade-in');
        void miniExam.offsetWidth; 
        miniExam.classList.add('fade-in');
        examContent.innerHTML = targetDay.exam;
    } else {
        miniExam.classList.add('hidden');
    }
}

// ---------------------------
// FITUR PENCARIAN (SEARCH)
// ---------------------------
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    // Jika input kosong, kembalikan ke tampilan default hari yang sedang aktif
    if (query === '') {
        loadContent(activeWeek, activeDay);
        return;
    }
    
    let results = [];
    
    // Looping melalui seluruh data course
    Object.keys(courseData).forEach(wKey => {
        Object.keys(courseData[wKey].days).forEach(dKey => {
            const dayData = courseData[wKey].days[dKey];
            if (dayData.grammar) {
                dayData.grammar.forEach(item => {
                    // Cari berdasarkan Grammar Rule atau Artinya
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

    // Tampilkan Hasil Pencarian
    document.getElementById('weekTitle').innerHTML = `<i class="bi bi-search"></i> Hasil Pencarian`;
    document.getElementById('dayTitle').innerText = `Menemukan ${results.length} tata bahasa untuk: "${query}"`;
    
    grammarCards.innerHTML = '';
    miniExam.classList.add('hidden'); // Sembunyikan ujian saat mode search

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