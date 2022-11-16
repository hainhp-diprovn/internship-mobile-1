console.log('Tinh bieu thuc')
var calculation = (x: number) => {
    let p = Math.round(((9*x*x + 15)/(7*Math.sqrt(x*x)))*100)/100
    console.log('Gia tri = ',p);  
}
calculation(10)