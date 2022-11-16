console.log('so n! nho nhat > m');
const minNumber = (m: number) => {
    let gt = 1
    let i = 0
    do{
        i++;
        gt *= i
    }while (gt <= m)
    console.log('So n nho nhat cua giai thua lon nhat',i)
    console.log('Giai thua =',i,gt)
}
minNumber(10)