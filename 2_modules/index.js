// วิธี import แบบที่ 1
const utils = require('./utils')

// วิธี import แบบที่ 2
const { calculateVat } = require('./utils')

console.log(utils.calculateVat(2000, 7)) // 140
utils.sayHello() // Hello

console.log(calculateVat(1000, 7)) // 70