const mongoose = require('mongoose');


// 1. กำหนด Schema (โครงสร้างของข้อมูล)
const productSchema = mongoose.Schema({
    // field 'name' ต้องเป็น String และบังคับให้กรอก
    name: { type: String, required: true },
    // field 'price' ต้องเป็น Number, มีค่าเริ่มต้นเป็น 0
    price: { type: Number, required: true, default: 0 },
    // field 'stock' ต้องเป็น Number, มีค่าเริ่มต้นเป็น 0
    stock: { type: Number, required: true, default: 0 }
}, {
    // timestamps: ให้ Mongoose เพิ่ม field createdAt และ updatedAt อัตโนมัติ
    timestamps: true
});


// 2. สร้าง Model จาก Schema
// Mongoose จะสร้าง Collection ชื่อ 'products' (พหูพจน์) ใน DB ให้เอง
const Product = mongoose.model('Product', productSchema);
module.exports = Product; // Export Model ไปใช้
