console.log('So tuyet hao');
const soTuyetHao = (n: number) => {
    for(let i = 1; i < n; i++){
        let sum = 0
        for(let j = 1; j <= i-1; j++){
            if(i%j == 0){
                sum += j
                if(sum == i){
                    console.log('So tuyet hao la:', i)
                    console.log('Cac uoc so la');
                    for(let j = 1; j < i - 1; j++){
                        if(i%j == 0){
                            console.log(j);
                            
                        }
                    }
                }
            }
        }
    }
}
soTuyetHao(100)
