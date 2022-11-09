console.log('BT3: Tính biểu thức')
var BT3 = (x: number) => {
    let S: number = (9*x*x + 15) / (7*Math.sqrt(x*x + 15))
    let roundS: number = Math.round(S*100)/100
    return roundS
}
console.log('Gia tri cua S = ', BT3(5))
