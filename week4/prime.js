"use strict";
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let n = 29;
if (isPrime(n)) {
    console.log(n + " is a Prime Number");
}
else {
    console.log(n + " is Not a Prime Number");
}
