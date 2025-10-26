const mongoose = require('mongoose'); // นำเข้า Mongoose

// สร้างฟังก์ชัน async/await เพื่อจัดการกับการเชื่อมต่อ
const connectDB = async () => {
    try {
        // พยายามเชื่อมต่อไปยัง URI ที่ตั้งใน .env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // แสดง log ของ host ที่เชื่อมต่อ
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // ถ้าเกิดข้อผิดพลาด จะแสดงให้โปรแกรมหยุดทำงาน
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; // Export ฟังก์ชันนี้ไปใช้ที่อื่น
