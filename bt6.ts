console.log('BT6: Tinh aˆn')

var baiTap6 = (a: number, n: number) => {
    if (a < 0) {
        console.log('Khong co gia tri')
    } else {
        const x: number = Math.exp(n*Math.log(a));
        return x
    }
}
console.log('Gia tri cua bieu thuc la', baiTap6(2,3))
