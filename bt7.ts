console.log('BT7: Tim gia tri lon nhat')
var maxMim = (a: number, b: number, c: number, d: number) => {
    let max: number = a;
    if (max < b) {
        max = b
    } 
    if (max < c) {
        max = c 
    }
    if (max < d) {
        max = d 
    }
    console.log(`Gia tri max la ${max}`)
}
maxMim(2,5,8,3)