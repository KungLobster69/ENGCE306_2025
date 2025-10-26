import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [figText, setFigText] = useState("รูปภาพโปรไฟล์ของผมเอง");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    // โหลดผลงานเริ่มต้น
    setProjects([
      { name: "ประกวดเครื่องล้างแผงโซล่าเซลล์", description: "ประกวดเครื่องล้างแผงโซล่าเซลล์อัตโนมัติ" },
      
    ]);
  }, []);

  // ✅ เพิ่ม: บันทึกธีมใน localStorage เพื่อให้จำค่าได้หลังรีเฟรช
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMode = () => setDarkMode(!darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    } else {
      alert("ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับโดยเร็วที่สุด");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <h1>นายกัมปนาท ใหม่นา</h1>
        <p>ชอบในการเรียนรู้สิ่งใหม่ๆ ไม่ชอบความจำเจ</p>
        <button onClick={toggleMode} className="toggle-btn">
          {darkMode ? "☀️ โหมดสว่าง" : "🌙 โหมดมืด"}
        </button>
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
              src="/ok.jpg" // ✅ ใส่รูปใน public/ok.jpg
              alt="รูปโปรไฟล์"
              onMouseOver={() =>
                setFigText("จะตั้งใจทำงาน")
              }
              onMouseOut={() => setFigText("รูปภาพโปรไฟล์ของผมเอง")}
            />
            <figcaption>{figText}</figcaption>
          </figure>
          <p>
            ชอบในการเรียนรู้สิ่งใหม่ๆ ไม่ชอบความจำเจ
          </p>
         
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
              {projects.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ทักษะ */}
        <section id="skills">
          <h2>ทักษะที่มี</h2>
          <ul>
            <li>ทักษะติดตั้งงานไฟฟ้า</li>
            <li>Network</li>
      
          </ul>
        </section>

        {/* แผนที่ */}
        <section>
          <h2>แผนที่มหาวิทยาลัย</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.705493424696!2d100.531!3d13.736717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed6330a74ff%3A0xb6f77d5d4b2e78e7!2sBangkok!5e0!3m2!1sth!2sth!4v1680000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="map"
          ></iframe>
        </section>

        {/* ติดต่อ */}
        <section id="contact">
          <h2>ติดต่อ</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>ชื่อ:</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label>อีเมล:</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label>ข้อความ:</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit">ส่งข้อความ</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; นายกัมปนาท ใหม่นา</p>
      </footer>
    </div>
  );
}

export default App;
