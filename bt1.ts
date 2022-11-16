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