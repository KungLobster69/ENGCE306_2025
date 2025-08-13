// ===== 1. สลับโหมด Dark/Light =====
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'สลับโหมด';
toggleBtn.style.marginTop = '10px';
document.querySelector('header').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ===== 2. จัดการฟอร์มติดต่อ =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการ reload หน้า

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    } else {
        alert('ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับโดยเร็วที่สุด');
        contactForm.reset(); // ล้างข้อมูลในฟอร์ม
    }
});

// ===== 3. เพิ่มข้อมูลผลงานลงตารางแบบ Dynamic =====
const projects = [
    {
        name: 'เเข่งพูด English',
        description: 'ประกวดเเข่งการพูดภาษาอังกฤษ'
    },
    {
        name: 'Security',
        description: 'เเข่งขันในการเจาะระบบ'
    },
   
    
];

window.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#portfolio tbody');
    tbody.innerHTML = ''; // ล้างข้อมูลเดิมออก

    projects.forEach(project => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdDesc = document.createElement('td');

        tdName.textContent = project.name;
        tdDesc.textContent = project.description;

        tr.appendChild(tdName);
        tr.appendChild(tdDesc);
        tbody.appendChild(tr);
    });
});

// ===== 4. เปลี่ยนข้อความ figcaption เมื่อ mouseover / mouseout =====
const profileImg = document.querySelector('#about img');
const figcaption = document.querySelector('#about figcaption');
const originalText = figcaption.textContent;

profileImg.addEventListener('mouseover', () => {
    figcaption.textContent = 'เป้าหมายของผมคือการเป็นนักพัฒนาเว็บไซต์มืออาชีพ';
});

profileImg.addEventListener('mouseout', () => {
    figcaption.textContent = originalText;
});
