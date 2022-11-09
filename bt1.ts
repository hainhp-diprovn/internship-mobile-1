console.log('CHƯƠNG 1 TÍNH TOÁN CÁC BIỂU THỨC')
console.log('BT1: tính V, S hình tròn')
var BT1 = function (r: number) {
    let S : number = Math.round((4* Math.PI*r*r)*100)/100
    let V: number = Math.round((4* Math.PI*r*r*r/3)*100)/100
    console.log('Dien tich hinh tron =', S)
    console.log('The tich hinh tron =', V)
}
BT1(2)