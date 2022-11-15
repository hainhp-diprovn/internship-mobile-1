console.log('Khoang cach')

var baiTap17 = (arr: number[]) => {
    arr.sort((a,b) => {
        return a - b
    })
    let newArr = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] - arr[i] > 1){
            newArr += (arr[i+1] - arr[i]) - 1
        }
    }
    return newArr
}
baiTap17([2,7,1,8,9])