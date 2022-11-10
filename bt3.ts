console.log('BT3: Tính biểu thức')
var baiTap3 = (x: number) => {
    const s: number = (9*x*x + 15) / (7*Math.sqrt(x*x + 15))
    const roundS: number = Math.round(s*100)/100
    return roundS
}
console.log('Gia tri cua S = ', baiTap3(5))
