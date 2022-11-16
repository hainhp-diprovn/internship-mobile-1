console.log('Bai toan Ga Cho');
const chickenDog = () => {
    for(let x = 1; x <= 36 ; x++){
        for(let y = 1 ; y <= 36 ; y++){
            if((2*x + 4*y == 100)&&( x+y == 36)){
                console.log(`So Ga = ${x} , Cho = ${y}`);
                
            }
        }
    }
}
chickenDog()