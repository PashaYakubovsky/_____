/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

const findUniq = arr => {
    return arr.reduce((acc, cur) => {
        const length = acc.filter(x => x === cur).length;
        if (length > 1) {
            return acc.filter(v => v !== cur);
        }

        return acc;
    }, arr)[0];
};

findUniq([1, 1, 1, 2, 1, 1]);
