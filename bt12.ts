console.log('UCLN')
const uocChung = (a: number, b: number) => {
    if (a == 0 || b == 0) {
        return a+b
    }
    while( a!=b ){
        if( a > b){
            a -= b
        }else{
            b -= a
        }
    }
    return a
}
console.log('UCLN la: ',uocChung(6,24))