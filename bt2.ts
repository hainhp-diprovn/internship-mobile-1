console.log('BT2: Nhập 2 số thực x,y và tính hàm')
var baiTap2 = function(x: number, y: number) {
    const tu: number = Math.log(Math.abs(x*x - y*y))/ Math.log(5) + Math.atan(x+y)
    const mau: number = Math.exp(x) + Math.cos(x+y)
    const F: number = Math.round((tu/mau)*100)/100
    return F
}
console.log('Gia tri la cua ham =',baiTap2(2,3))