var calculationSH = (x: number) => {
    const p = (Math.exp(x) - 1/(Math.exp(x)))/2
    console.log('SH() = ', p);
}
calculationSH(4)