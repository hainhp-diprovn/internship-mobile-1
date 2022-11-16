"use strict"
// giải phương trình bậc 2
const [a, b, c] = [1, 4, 3]
let delta = b * b - 4 * a * c
if (delta < 0) {
    console.log('Phương trình vô nghiệm')
}

else if (delta == 0) {
    console.log('Phương trình có nghiệm kép')
    console.log('x1 = x2 =' + Number(-b / (2 * a)).toFixed(2))
}
else {
    console.log('Phương trình có 2 nghiệm')
    console.log('x1 = ' + Number((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2))
    console.log('x1 = ' + Number((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2))
}

