console.log('Nhap 3 canh tinh S');
var triangleArea = (a: number,b: number, c: number) => {
     const p = (a + b + c) / 2
     const s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
     console.log('dien tich tam giac', s);
     
    }
triangleArea(3,3,5)