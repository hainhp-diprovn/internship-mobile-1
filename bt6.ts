console.log('BT6: Tinh aˆn')

var BT6 = (a: number, n: number) => {
    if (a < 0) {
        console.log('Khong co gia tri')
    } else {
        let x: number = Math.exp(n*Math.log(a));
        return x
    }
}
console.log('Gia tri cua bieu thuc la', BT6(2,3))
