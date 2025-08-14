// ฟีเจอร์: เปลี่ยนโหมด Dark/Light
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ฟีเจอร์: ตรวจสอบฟอร์มก่อนส่ง
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    alert("ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับโดยเร็วที่สุด");

    // ล้างฟอร์ม
    document.getElementById("contactForm").reset();
});

// ฟีเจอร์: เพิ่มข้อมูลผลงานแบบ Dynamic
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

window.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector(".project-table tbody");

    projects.forEach(project => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = project.name;

        const tdDesc = document.createElement("td");
        tdDesc.textContent = project.description;

        tr.appendChild(tdName);
        tr.appendChild(tdDesc);

        tbody.appendChild(tr);
    });
});

// ฟีเจอร์: เปลี่ยนข้อความใต้รูปภาพเมื่อชี้เมาส์
const profileImg = document.querySelector(".profile-img");
const figcaption = document.getElementById("profile-caption");

profileImg.addEventListener("mouseover", () => {
    figcaption.textContent = "เป้าหมายของผมคือการเป็นนักพัฒนาเว็บไซต์มืออาชีพ";
});

profileImg.addEventListener("mouseout", () => {
    figcaption.textContent = "รูปภาพโปรไฟล์ของผมเอง";
});
