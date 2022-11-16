// kiểm tra có phải là tam giác hay không nếu đúng thì nó là tam giác loại gì
"use strict"
const [a, b, c] = [1, 2, 3]
if ((a + b) > c && (a + c) > b && (b + c) > a && a > 0 && b > 0 && c > 0) {
    console.log('Đây là tam giác')
    if (a == b || b == c || a == c) {
        console.log('Đây là tam giác cân')
    } else if ((c * c + b * b == a * a && c == b) || (c * c + a * a == b * b && c == a)
        || (b * b + a * a == c * c && b == a)) {
        console.log('Tam giác vuông cân')
    } else if ((c * c + b * b == a * a) || (c * c + a * a == b * b) || (b * b + a * a == c * c)) {
        console.log('Tam giác vuông')
    }
    else {
        console.log('Tam giác thường')
    }
} else {
    console.log('Đây không phải là tam giác')
}