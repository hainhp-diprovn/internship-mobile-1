console.log('CHƯƠNG 1 TÍNH TOÁN CÁC BIỂU THỨC')
console.log('BT1: tính V, S hình tròn')
var baiTap1 = function (r: number) {
    const s : number = Math.round((4* Math.PI*r*r)*100)/100
    const v: number = Math.round((4* Math.PI*r*r*r/3)*100)/100
    console.log('Dien tich hinh tron =', s)
    console.log('The tich hinh tron =', v)
}
baiTap1(2)