// giải hệ phương trình 2 ẩn
"use strict"
const [a, b, c, d, e, f] = [1, 2, 3, 1, 1, 1]
const dinhthuc = a * e - d * b
const dx = c * e - f * b
const dy = a * f - d * c
if (dinhthuc != 0) {
    console.log('x = ' + Number(dx / dinhthuc).toFixed(2))
    console.log('y = ' + Number(dy / dinhthuc).toFixed(2))
} else if (dx != 0) {
    console.log('Hệ phương trình vô nghiệm')
} else {
    console.log('Hệ phương trình vô định')
}