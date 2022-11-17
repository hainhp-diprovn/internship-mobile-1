console.log('Mang bai 3 , baiTap17----------------------------------------------------------------')
var sapXep = () => {
    const arr: Array<number> = [5,3,7,15,20,25,30]
    let mix = 1
    for(let i: number = 1 ; i < arr.length; i++){
            if (arr[i] % 5 == 0 && arr[i] % 2 == 0){
                let tg = arr[i]
                arr[i] = arr[mix]
                arr[mix] = tg
                mix++
            } 
        }
    for(let i = mix ; i <= arr.length; i++) {
        if(arr[i] % 5 == 0 && arr[i] % 2 == 1){
                let tg = arr[i]
                arr[i] = arr[mix]
                arr[mix] = tg
                mix++
            }
    }
    for(let j = arr.length; j >= 1 ; j--){
        console.log(arr[j])
    }  

}
sapXep()