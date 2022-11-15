console.log('max duong cheo')
var baiTap19 = (arr: number[][]) => {
    let indexMax = 1
    for(let row = 0; row < arr.length; row++) {
        let max = 0 
        let currRow = arr[row]
        for(let col = 0; col < currRow.length; col++){
            if(currRow[col] > max){
                max = currRow[col]
                indexMax = col
            }
        }
        arr[row][indexMax] = arr[row][row]
        arr[row][row] = max
    }
    console.log('arr',arr)
}
baiTap19([[1,5,7],
    [2,0,6],
    [7,8,3]])