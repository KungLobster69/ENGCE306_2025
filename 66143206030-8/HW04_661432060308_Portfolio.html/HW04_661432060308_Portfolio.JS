// สลับโหมด Dark/Light
document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// ตรวจสอบฟอร์มติดต่อ
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    } else {
        alert('ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับโดยเร็วที่สุด');
        this.reset();
    }
});

// ข้อมูลผลงาน
const projects = [
    {
        name: 'เว็บไซต์ชมรมถ่ายภาพ',
        description: 'เว็บไซต์สำหรับแสดงผลงานภาพถ่ายของสมาชิกชมรม สร้างด้วย HTML และ CSS'
    },
    {
        name: 'โปรเจกต์เครื่องคิดเลขอย่างง่าย',
        description: 'เครื่องคิดเลขบนเว็บที่สามารถบวกลบคูณหารได้ พัฒนาด้วย JavaScript'
    },
    {
        name: 'เกมทายคำศัพท์ (ใหม่)',
        description: 'เกมทายคำศัพท์ภาษาอังกฤษอย่างง่ายที่สร้างขึ้นเพื่อฝึกฝนการใช้ DOM Manipulation'
    }
];

// สร้างแถวผลงานในตาราง
window.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('.project-table tbody');
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

// เปลี่ยนข้อความเมื่อ hover รูปภาพ
const profileImg = document.querySelector('.profile-img');
const caption = document.getElementById('profile-caption');

profileImg.addEventListener('mouseover', function () {
    caption.textContent = 'เป้าหมายของผมคือการเป็นนักพัฒนาเว็บไซต์มืออาชีพ';
});

profileImg.addEventListener('mouseout', function () {
    caption.textContent = 'รูปภาพโปรไฟล์ของผมเอง';
});
