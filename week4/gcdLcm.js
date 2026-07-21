"use strict";
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
let num1 = 12;
let num2 = 18;
console.log("GCD =", gcd(num1, num2));
console.log("LCM =", lcm(num1, num2));
