var BT4 = (x: number) => {
    let ch: number = (Math.exp(x) + 1/Math.exp(x))/2
    let roundCh: number = Math.round(ch*100)/100
    return (roundCh)
}
console.log('Gia tri cua ch = ', BT4(4))