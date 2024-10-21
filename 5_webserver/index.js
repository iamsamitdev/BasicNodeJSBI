// import express
const express = require('express')

// Import URL Router
const urlRouter = require('./routes/url')

// Create express ojbect
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static('assets'))

// เรียกใช้ Routes
app.use('', urlRouter)

// Start Server
app.listen(3000, function(){
  console.log('Express running at http://localhost:3000')
})