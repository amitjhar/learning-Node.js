const fs = require('fs')

// fs.writeFileSync('./amitt.txt','welcome to new browser' , {flag:'a'})
const a = fs.readFileSync('./files/amit.txt','utf-8')
console.log(a)