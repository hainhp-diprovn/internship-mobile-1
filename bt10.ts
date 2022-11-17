console.log('Fibonacci Mang 1 chieu');
const fibonacci = (n: number) => {
    let fibo :Array<number> = [0,1];
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        console.log(fibo[i]);
    }
}
fibonacci(10)