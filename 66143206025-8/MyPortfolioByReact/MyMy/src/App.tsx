import React, { useState } from "react";
import "./App.css";

interface Project {
  name: string;
  desc: string;
  link: string;
}

interface Contact {
  name: string;
  email: string;
  message: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    { name: "โปรเจกต์ที่ 1", desc: "HTML 1", link: "LAB02_01_66143206025-8.html" },
    { name: "โปรเจกต์ที่ 2", desc: "HTML 2", link: "LAB02_02_66143206025-8.html" },
    { name: "โปรเจกต์ที่ 3", desc: "HTML 3", link: "LAB02_03_66143206025-8.html" },
  ]);
  const [newProject, setNewProject] = useState<Project>({ name: "", desc: "", link: "" });
  const [contact, setContact] = useState<Contact>({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleShowMore = () => setShowMore(!showMore);
  const toggleAddProject = () => setShowAddProject(!showAddProject);

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newProject.name || !newProject.desc || !newProject.link) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    setProjects([...projects, newProject]);
    setNewProject({ name: "", desc: "", link: "" });
    setShowAddProject(false);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    setContactStatus("ส่งข้อความเรียบร้อยแล้ว ขอบคุณครับ!");
    setContact({ name: "", email: "", message: "" });
    setTimeout(() => setContactStatus(""), 3000);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <header>
        <h1>นาย น่านฟ้า วงค์กาศ</h1>
        <p>การยอมรับความจริงเป็นสิ่งที่เราทำได้ดีที่สุดในสถานการณ์ที่เปลี่ยนเเปลงอะไรไม่ได้เเล้ว</p>
        <nav>
          <a href="#about">เกี่ยวกับฉัน</a>
          <a href="#projects">ผลงาน</a>
          <a href="#contact">ติดต่อ</a>
        </nav>
      </header>

      <main className="container">
        {/* About */}
        <section id="about">
          <h2>เกี่ยวกับฉัน</h2>
          <figure>
            <img src="IM/MEMEME.png" alt="ภาพของเจ้าของ Portfolio" width="400" />
            <figcaption>รูปภาพตัวแทนของฉัน</figcaption>
          </figure>
          <p>สวัสดีครับ</p>
          <p>ผมคนดีนะ</p>
          <button onClick={toggleShowMore}> {showMore ? "ซ่อน ข้อมูลเพิ่มเติม" : "แสดง ข้อมูลเพิ่มเติม"} </button>
          {showMore && (
            <div style={{ marginTop: "15px" }}>
              <p>ข้อมูลเพิ่มเติม: ผมชอบเขียนโค้ดและเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ</p>
            </div>
          )}
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>ผลงานของฉัน</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>ชื่อผลงาน</th>
                <th>คำอธิบายสั้นๆ</th>
                <th>ลิ้งค์สำหรับดูผลงาน</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.name}</td>
                  <td>{p.desc}</td>
                  <td><a href={p.link} target="_blank" rel="noopener noreferrer">ดูผลงาน</a></td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={toggleAddProject} style={{ marginTop: "10px" }}>เพิ่มผลงานใหม่</button>

          {showAddProject && (
            <form onSubmit={handleAddProject} style={{ marginTop: "10px" }}>
              <input type="text" name="name" placeholder="ชื่อผลงาน" value={newProject.name} onChange={handleProjectChange} required /><br /><br />
              <input type="text" name="desc" placeholder="คำอธิบายสั้นๆ" value={newProject.desc} onChange={handleProjectChange} required /><br /><br />
              <input type="url" name="link" placeholder="https://..." value={newProject.link} onChange={handleProjectChange} required /><br /><br />
              <button type="submit">เพิ่มผลงาน</button>
              <button type="button" onClick={toggleAddProject}>ยกเลิก</button>
            </form>
          )}
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>ทักษะที่มี</h2>
          <ul>
            <li>HTML</li>
            <li>Python</li>
            <li>JAVA</li>
          </ul>
        </section>

        {/* Video */}
        <section id="video">
          <h2>วิดีโอที่น่าสนใจ</h2>
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/leihudXxqAY?si=roY5YlEslrj_RF71"
            title="YouTube video player" frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>ติดต่อฉัน</h2>
          <form onSubmit={handleContactSubmit}>
            <input type="text" name="name" placeholder="ชื่อ" value={contact.name} onChange={handleContactChange} required /><br /><br />
            <input type="email" name="email" placeholder="อีเมล" value={contact.email} onChange={handleContactChange} required /><br /><br />
            <textarea name="message" placeholder="ข้อความ" rows={5} value={contact.message} onChange={handleContactChange} required></textarea><br /><br />
            <button type="submit">ส่งข้อความ</button>
          </form>
          {contactStatus && <p style={{ color: "green", marginTop: "10px" }}>{contactStatus}</p>}
        </section>

        {/* Map */}
        <section id="map">
          <h2>แผนที่มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงราย</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1878.3419589097578!2d99.72583269839475!3d19.683486000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7728be0e04759%3A0xadb9be50f31a0e11!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lii4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4Lil4LmJ4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C4o-C4suC4og!5e0!3m2!1sth!2sth!4v1752590164756!5m2!1sth!2sth"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 น่านฟ้า วงค์กาศ</p>
        <button onClick={toggleDarkMode} style={{ marginLeft: "20px", padding: "6px 12px", cursor: "pointer" }}>
          {darkMode ? "โหมดสว่าง" : "โหมดกลางคืน"}
        </button>
      </footer>
    </div>
  );
};

export default App;
