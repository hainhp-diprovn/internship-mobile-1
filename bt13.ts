console.log('BCNN')
var BCNN = (x1: number, x2: number) => {
    let stem: number 
    if(x1 > x2){
        stem = x1
    }else{
        stem = x2
    }
    for(let i = stem; i <= x1*x2 ; i += stem) {
        if( i % x1 == 0 && i % x2 == 0) {
            return i
        }
    }
}
console.log('BCNN = ',BCNN(7,6))
