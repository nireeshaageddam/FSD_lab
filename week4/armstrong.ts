function isArmstrong(num: number): boolean {
    let original = num;
    let sum = 0;

    let digits = num.toString().length;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

let  n = 153;

if (isArmstrong(n)) {
    console.log(n + " is an Armstrong Number");
} else {
    console.log(n + " is not an Armstrong Number");
}