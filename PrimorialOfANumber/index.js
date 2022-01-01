/*
    https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/javascript
    Definition (Primorial Of a Number)
    Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
    only prime numbers are multiplied to calculate the primorial of a number. 
    It's denoted with P# and it is the product of the first n prime numbers.
*/

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
};

// const numPrimorial = n => {
//     const primes = [];
//     for (let i = 0; primes.length < n; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     return primes.reduce((acc, cur) => acc * cur, 1);
// };

const numPrimorial = n => {
    const primes = [];
    for (let i = 0; ; i++) {
        isPrime(i) && primes.push(i);

        if (primes.length === n) {
            return primes.reduce((acc, cur) => acc * cur, 1);
        }
    }
};

console.log(numPrimorial(4));
console.log(numPrimorial(5));
console.log(numPrimorial(3));
console.log(numPrimorial(8));
console.log(numPrimorial(9));
