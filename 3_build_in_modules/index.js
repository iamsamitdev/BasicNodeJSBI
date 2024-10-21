// อ่าน path ของโปรเจ็กต์
const path = require('path')

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

// อ่านไฟล์ (fs)
const fs = require('fs')

// Readfile
console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'))

// Writefile
fs.appendFileSync(path.join(__dirname, 'data.txt'), '\nWelcome')

// Operating System (os)
const os = require('os')

console.log(os.cpus())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.platform())
console.log(os.arch())
console.log(os.networkInterfaces())
console.log(os.networkInterfaces()['Wi-Fi'][1].address)
