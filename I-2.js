const x = 2
const y = 3
const tu = Math.log(Math.abs(x * x - y * y) / Math.log(5) + Math.atan(x + y))
const mau = Math.exp(x) + Math.cos(x + y)
console.log('Kết quả: ' + Number(tu / mau).toFixed(2))
