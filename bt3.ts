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