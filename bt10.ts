console.log('BT10: Lap Bang')

var lapBang = () => {
    for (let i: number = 0 ; i <= 100 ; i++){
        if (i % 10 == 0) {
            console.log(`${i} \n .`)
        }else{
            console.log(`${i}`)
        }
    }
}
lapBang()