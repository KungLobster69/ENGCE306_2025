// รอ DOM โหลดก่อน
document.addEventListener("DOMContentLoaded", () => {
  // ปุ่ม แสดง/ซ่อน ข้อมูลเพิ่มเติมใน section about
  const btnToggleMore = document.getElementById("btnToggleMore");
  const moreAbout = document.getElementById("moreAbout");

  btnToggleMore.addEventListener("click", () => {
    if (moreAbout.style.display === "none" || moreAbout.style.display === "") {
      moreAbout.style.display = "block";
      btnToggleMore.textContent = "ซ่อน ข้อมูลเพิ่มเติม";
    } else {
      moreAbout.style.display = "none";
      btnToggleMore.textContent = "แสดง ข้อมูลเพิ่มเติม";
    }
  });

  // การจัดการฟอร์มติดต่อ
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    // ดึงค่าข้อมูลจากฟอร์ม
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // ตรวจสอบเบื้องต้น (ถ้ามีค่าหรือไม่)
    if (name === "" || email === "" || message === "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // สามารถเพิ่มโค้ดส่งข้อมูลฟอร์มไป server ได้ตรงนี้
    // เช่น ใช้ fetch API, XMLHttpRequest, หรือฟังก์ชันอื่น ๆ

    // แสดงข้อความส่งสำเร็จและเคลียร์ฟอร์ม
    formStatus.style.display = "block";
    formStatus.textContent = "ส่งข้อความเรียบร้อยแล้ว ขอบคุณครับ!";
    contactForm.reset();

    // ซ่อนข้อความหลัง 3 วินาที
    setTimeout(() => {
      formStatus.style.display = "none";
    }, 3000);
  });
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "โหมดสว่าง";
  } else {
    darkModeToggle.textContent = "โหมดกลางคืน";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ...โค้ดเดิมของคุณ...

  // จัดการเพิ่มผลงานใหม่
  const showAddProjectFormBtn = document.getElementById("showAddProjectForm");
  const addProjectForm = document.getElementById("addProjectForm");
  const cancelAddProjectBtn = document.getElementById("cancelAddProject");
  const tbodyProjects = document.querySelector("#projects tbody");

  showAddProjectFormBtn.addEventListener("click", () => {
    addProjectForm.style.display = "block";
    showAddProjectFormBtn.style.display = "none";
  });

  cancelAddProjectBtn.addEventListener("click", () => {
    addProjectForm.reset();
    addProjectForm.style.display = "none";
    showAddProjectFormBtn.style.display = "inline-block";
  });

  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("newProjectName").value.trim();
    const desc = document.getElementById("newProjectDesc").value.trim();
    const link = document.getElementById("newProjectLink").value.trim();

    if (name === "" || desc === "" || link === "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // สร้างแถวใหม่
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${desc}</td>
      <td><a href="${link}" target="_blank">ดูผลงาน</a></td>
    `;

    tbodyProjects.appendChild(newRow);

    // รีเซ็ตฟอร์มและซ่อน
    addProjectForm.reset();
    addProjectForm.style.display = "none";
    showAddProjectFormBtn.style.display = "inline-block";
  });
});


