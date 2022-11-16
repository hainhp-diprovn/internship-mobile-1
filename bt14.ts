console.log('Day so Fibonacci')
var fibonacci = (n: number) => {
    let x1: number = 0
    let x2: number = 1
    let nextValue: number 
    console.log(x1)
    console.log(x2)
    for(let i = 0; i <= n ; i++){
        nextValue = x1 + x2
        x1 = x2
        x2 = nextValue
        console.log(nextValue)
    }
}
fibonacci(5)