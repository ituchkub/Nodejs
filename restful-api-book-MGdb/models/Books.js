// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/AllBooks'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ Schema
let BooksSchema = mongoose.Schema({
    name:String,
    price:Number

})

// สร้างโมเดล
let Books = mongoose.model("Books",BooksSchema)

// ส่งออกโมเดล
module.exports = Books

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveBooks=function(model,data){
    model.save(data)
}