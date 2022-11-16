const Pi = Math.PI
var R = 5
// V và S đều đc làm tròn 2 chữ số sau dấu phẩy 
var V = Number(4 * Pi * Math.pow(R, 3) / 3).toFixed(2)
var S = Number(4 * Pi * Math.pow(R, 2)).toFixed(2)
console.log('Thể tích hình cầu: ' + V)
console.log('Thể tích hình cầu: ' + S)