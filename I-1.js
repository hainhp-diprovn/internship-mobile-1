const pi = Math.PI
const r = 5
// v và s đều đc làm tròn 2 chữ số sau dấu phẩy 
const v = Number(4 * pi * Math.pow(r, 3) / 3).toFixed(2)
const s = Number(4 * pi * Math.pow(r, 2)).toFixed(2)
console.log('Thể tích hình cầu: ' + v)
console.log('Thể tích hình cầu: ' + s)