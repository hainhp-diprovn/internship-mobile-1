var baiTap16 = () => {
    const arr: Array<number> = [7,2,5,1,6,9]
    let j : number = arr.length - 1 
    let tong : number = 0
    let tich : number = 1
    let doi: number
    console.log('Dao mang')
    for( let i = j + 1 ; i >= 0 ; i-- ){
        console.log('Mang Dao: ', arr[i])
    }
    for (let i = 1 ; i <=  j ; i++){
        tong += arr[i]
        tich *= arr[i]
    }
    console.log(` Gia tri Tong ${tong} va Tich ${tich}`)
    
    for (let i = 0 ; i <= j; i++){
        for ( let h = i + 1; h <= j; h++ ){
            if( arr[i] < arr[h]) {
                doi = arr[i]
                arr[i] = arr[h]
                arr[h] = doi
            }
        }
        console.log('sx mang',arr[i])
    }
}
baiTap17()