console.log('BT9: Cuu Chuong')

var cuuChuong = () => {
    for (let i = 2 ; i <= 9; i++){
        console.log(`Ban Cuu Chuong ${i}`)
        for (let j: number = 1; j <= 10 ; j++) {
            const declare: number = i * j
            console.log(` ${i} x ${j} = ${declare}`)
        }
    }
}
cuuChuong()