"use strict"
// cho 2 điểm tọa độ A, B tính góc AOB
const pi = Math.PI
const A = [2, 2]
const B = [3, 2]
const OA = Math.sqrt(A[0] * A[0] + A[1] * A[1])
const OB = Math.sqrt(B[0] * B[0] + B[1] * B[1])
const cos = (A[0] * B[0] + A[1] * B[1]) / (OA * OB)
let goc
if (cos == 1) {
    goc = 0
} else if (cos == -1) {
    goc = pi
} else if (cos == 0) {
    goc = pi / 2
} else {
    const tg = Math.sqrt(1 - cos * cos) / cos
    goc = Math.atan(tg)
    if (goc < 0) {
        goc = pi / 2 - goc
    }
}
console.log('Góc AOB tính theo độ ' + Number(goc * 180 / pi).toFixed(2))
