/*
    https://www.codewars.com/kata/55a29405bc7d2efaff00007c/train/javascript
    Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

    To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:

    1.0000989217538616 will be truncated to 1.000098
    1.2125000000000001 will be truncated to 1.2125
*/

const getRange = n => Array.from(Array(n).keys()).map(x => x + 1);

const factorial = n => getRange(n).reduce((acc, cur) => acc * cur, 1);

const going = n => {
    const factorialValue = factorial(n);

    const factor = +(1 / factorialValue).toFixed(6);

    const sumOfFactorials = getRange(n - 1).map(x => factorial(x));

    return factor * sumOfFactorials;
};

console.log(going(5));
