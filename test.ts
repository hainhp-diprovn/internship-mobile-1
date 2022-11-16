console.log('PT bac 1');
var ptBac1 = (a: number, b: number, c: number, d: number, e: number, f: number) => {
    const dinhthuc = a*e - d*b
    const dx = c*e - f*b 
    const dy = a*f - d*c 
    if(dinhthuc != 0){
        let x1 = dx/dinhthuc
        let x2 = dy/dinhthuc
        console.log('Nghiem x1 = ',x1);
        console.log('Nghiem x1 = ',x2);
    }else if (dx !=0) {
        console.log('Phuong trinh vo nghiem');
    }else {
        console.log('Phuong trinh vo dinh');
        
    }
}
ptBac1(3,10,1,5,6,-2)

console.log('Tinh tien dien');
var tienDien = (hoDan: string, oldNumber: number, newNumber: number) => {
    let kWhdm, kWhvuot, tienDM, tienVuot, totalTien : number
    const dmHoDan = 60
    const dmHoCanBo = 90
    const dmHoKinhDoanh = 200
    const dmHoSanXuat = 450
    const dongiaDM = 1000
    const giangoaiDM = 2000
    const kWhTT = newNumber - oldNumber
    switch(hoDan) {
        case 'dan' :
            kWhdm = dmHoDan
            break;
        case 'canbo': 
            kWhdm = dmHoCanBo
            break;
        case 'kinhdoanh' :
            kWhdm = dmHoKinhDoanh
            break;
        case 'sanxuat': 
            kWhdm = dmHoSanXuat
            break;
        }
        if(kWhTT < kWhdm) {
            tienDM = kWhTT*dongiaDM
            tienVuot = 0
            console.log(`Tien Dinh Muc = ${tienDM} va tien vuot = ${tienVuot}`)
    }else {
        tienDM = kWhTT*giangoaiDM
        tienVuot = (kWhTT - kWhdm) *giangoaiDM
        totalTien = tienDM + tienVuot
        console.log(`So tien phai tra ${totalTien}VND` )

    }
}
tienDien("kinhdoanh",150,450)


console.log('Phuong trinh trung phuong');
var ptTrungPhuong = (a: number, b: number, c: number) => {
    const denTa = b*b - 4*a*c
    let i = 0
    if(denTa > 0){
         i = 1
    }else if(denTa < 0){
         i = 2
    }else {
         i = 3
    }
    switch(i){
        case 1: {
            let y1 = (-b + Math.sqrt(denTa))/(2*a)
            let y2 = (-b - Math.sqrt(denTa))/(2*a)
            if(y1 > 0){
                let x1 = Math.sqrt(y1);
                let x2 = -x1
                console.log('Nghiem x1 = ',x1)
                console.log('Nghiem x2 = ',x2)
            }
            if(y2 > 0){
                let x3 = Math.sqrt(y2);
                let x4 = -x3
                console.log('Nghiem x3 = ',x3)
                console.log('Nghiem x4 = ',x4)
            }
        }
        break;
        case 2 : 
            console.log('Phuong trinh trung phuong vo nghiem');
            break;
        case 3 :{
            let y1 = -b/(2*a)
            console.log('Phuong trinh trung phuong co nghiem kep');
            if (y1 > 0) {
                let x1 = Math.sqrt(y1)
                let x2 = -x1
                console.log('Phuong trinh trung phuong co nghiem x1 = ',x1)
                console.log('Phuong trinh trung phuong co nghiem x2 = ',x2)
            }
        }
        break; 
    }
}
ptTrungPhuong(1,-5,4)