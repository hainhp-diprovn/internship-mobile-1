var baiTap4 = (x: number) => {
    const ch: number = (Math.exp(x) + 1/Math.exp(x))/2
    const roundCh: number = Math.round(ch*100)/100
    return (roundCh)
}
console.log('Gia tri cua ch = ', baiTap4(4))