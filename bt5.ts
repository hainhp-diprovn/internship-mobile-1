console.log('BT5: Phuong trinh bat 2')

var ptb2 = (a: number, b: number,c: number) => {
    let denta: number = b*b - 4*a*c
    if (denta < 0) {
        console.log('Chuong trinh vo nghiem')
    }else if (denta == 0) {
        let nghiemKep: number = (-b/2*a)
        console.log('Phuong trinh co nghiem kep x1,x2 =', nghiemKep)
    }else {
        let x1: number = (-b - Math.sqrt(denta))/ 2*a
        let x2: number = (-b + Math.sqrt(denta))/ 2*a
        console.log(`Phuong trinh co 2 nghiem x1 = ${x1} va x2 = ${x2}`)
    }
}
ptb2(2,5,1)