console.log('Tinh chu ki dao dong con lac don')
var daoDong = (l: number) => {
    let g = 9.18
    let t = Math.round((2*Math.PI*Math.sqrt(l/g))*100)/100
    // return t
    console.log('t',t)
}
daoDong(15)