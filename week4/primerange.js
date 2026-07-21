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
function generatePrimes(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
generatePrimes(1, 50);
