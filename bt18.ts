console.log('Mang 2 chieu')
var baiTap18 = (arr: number[][]) => {
    let sum = 0;
    for(let row = 0; row < arr.length; row++) {
        let currRow = arr[row];
        for(let col = 0; col < currRow.length; col++) {
            if(arr[row][col] != 0){
                sum += currRow[col];
            }
        }
    }
    return sum;
}
baiTap18([ [0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]])