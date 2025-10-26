import React, { useState, useEffect } from "react";
import "./port_03_66143206027-4.css";

export default function App() {
  // --- State ---
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState([
    { name: "แข่งพูด English", description: "ประกวดแข่งการพูดภาษาอังกฤษ" },
    { name: "Security", description: "แข่งขันในการเจาะระบบ" },
  ]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [figText, setFigText] = useState("รูปภาพโปรไฟล์ของผมเอง");

  // --- Event Handlers ---
  const toggleMode = () => setDarkMode(!darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    } else {
      alert("ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับโดยเร็วที่สุด");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // --- Render ---
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <header id="main-header">
        <h1>ปราบเซียน หน่อหล้า</h1>
        <p>ชอบดูหนังเเละเรียนรู้จากสิ่งต่างๆ</p>
        <button onClick={toggleMode}>สลับโหมด</button>
      </header>

      <nav>
        <ul>
          <li><a href="#about">เกี่ยวกับฉัน</a></li>
          <li><a href="#portfolio">ผลงาน</a></li>
          <li><a href="#skills">ทักษะ</a></li>
          <li><a href="#contact">ติดต่อ</a></li>
        </ul>
      </nav>

      <main>
        {/* เกี่ยวกับฉัน */}
        <section id="about">
          <h2>เกี่ยวกับฉัน</h2>
          <figure>
            <img
              src="game.jpg"
              alt="รูปภาพของ ปราบเซียน หน่อหล้า"
              onMouseOver={() => setFigText("เป้าหมายของผมคือการเป็นนักพัฒนาเว็บไซต์มืออาชีพ")}
              onMouseOut={() => setFigText("รูปภาพโปรไฟล์ของผมเอง")}
            />
            <figcaption>{figText}</figcaption>
          </figure>
          <p>ผม นายปราบเซียน หน่อหล้า ชอบในการเขียนโปรเเกรมเเละระบบรักษาความปลอดภัย</p>
          <p>ชอบใช้เวลาในการเรียนรู้สิ่งใหม่ๆเเละศึกษาจากสิ่งต่างๆ</p>
        </section>

        {/* ผลงาน */}
        <section id="portfolio">
          <h2>ผลงานที่เคยทำ</h2>
          <table>
            <thead>
              <tr>
                <th>ชื่อผลงาน</th>
                <th>คำอธิบายสั้นๆ</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr key={i}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ทักษะ */}
        <section id="skills">
          <h2>ทักษะที่มี</h2>
          <ul>
            <li>English</li>
            <li>Java</li>
            <li>Network</li>
            <li>การออกแบบ</li>
          </ul>
        </section>

        {/* แผนที่ */}
        <section>
          <h2>แผนที่มหาวิทยาลัย</h2>
          <iframe
            src="https://maps.app.goo.gl/c9VN4KnrmSD8B7Yx8"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        {/* ฟอร์มติดต่อ */}
        <section id="contact">
          <h2>ติดต่อ</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label>ชื่อ:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label>อีเมล:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label>ข้อความ:</label>
              <textarea
                rows="4"
                cols="50"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <div>
              <button type="submit">ส่งข้อความ</button>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; ปราบเซียน หน่อหล้า</p>
      </footer>
    </div>
  );
}
