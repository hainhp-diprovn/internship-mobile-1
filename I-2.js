var x = 2
var y = 3
var tu = Math.log(Math.abs(x * x - y * y) / Math.log(5) + Math.atan(x + y))
var mau = Math.exp(x) + Math.cos(x + y)
var F = Number(tu / mau).toFixed(2) // làm tròn 2 chữ số sau dấu phẩy 
console.log(F)
