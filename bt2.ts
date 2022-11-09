console.log('BT2: Nhập 2 số thực x,y và tính hàm')
var BT2 = function(x: number, y: number) {
    let tu: number = Math.log(Math.abs(x*x - y*y))/ Math.log(5) + Math.atan(x+y)
    let mau: number = Math.exp(x) + Math.cos(x+y)
    let F: number = Math.round((tu/mau)*100)/100
    return F
}
console.log('Gia tri la cua ham =',BT2(2,3))