// Nhập vào 3 cạnh của tam giác, tính 3 góc của tam giác đó
"use strict"
const pi = Math.PI
const [a, b, c] = [4, 2, 5]
let cos, gocA, gocB, gocC, tg, goc
//tính góc A
cos = (b * b + c * c - a * a) / (2 * b * c)
if (cos == 0) {
    goc = pi / 2
} else {
    tg = Math.sqrt(1 - cos * cos) / cos
    goc = Math.atan(tg)
    if (goc < 0) {
        goc = pi / 2 - goc
    }
    gocA = goc
}
// tình góc B
cos = (a * a + c * c - b * b) / (2 * a * c)
if (cos == 0) {
    goc = pi / 2
} else if (cos == -1) {
    goc = pi
}
else {
    tg = Math.sqrt(1 - cos * cos) / cos
    goc = Math.atan(tg)
    if (goc < 0) {
        goc = pi / 2 - goc
    }
    gocB = goc
}

console.log("Tam giác ABC có các góc")
console.log("góc A: " + Number(180 * gocA / pi).toFixed(2))
console.log("góc B: " + Number(180 * gocB / pi).toFixed(2))
console.log("góc C: " + Number(180 - 180 * gocA / pi - 180 * gocB / pi).toFixed(2))