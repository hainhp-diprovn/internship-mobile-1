console.log('Tinh tong, tich cac chu so voi n cho truoc')
var sumProduct = (n: number) => {
    let sum: number = 0
    let product: number = 1 
    do{
        sum += Math.ceil(n%10)
        product *= Math.ceil(n%10)
        console.log(`Sum ${sum}`)
        console.log(`Product ${product}`)
        n = Math.floor(n/10)
        console.log(`Gia tri ${n}`)
    }while(n > 0)
    console.log(`sum = ${sum} va tich = ${product}`)
}
sumProduct(456)