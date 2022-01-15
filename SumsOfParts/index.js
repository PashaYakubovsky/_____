/*
    https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
    Let us consider this example (array written in general format):
    ls = [0, 1, 3, 6, 10]

    Its following parts:
    ls = [0, 1, 3, 6, 10]
    ls = [1, 3, 6, 10]
    ls = [3, 6, 10]
    ls = [6, 10]
    ls = [10]
    ls = []
    The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

    The function parts_sums (or its variants in other languages) 
    will take as parameter a list ls and return a list of the sums of its parts as defined above.
*/

const partsSums = ls => {
    const sums = [];
    let list = ls.slice();

    for (let i = 0; ; i++) {
        if (list.length === 0) {
            return sums;
        }
        sums.push(list.reduce((acc, cur) => acc + cur, 0));
        list = list.slice(1);
    }
};
console.log(partsSums([19, 16, 13, 19, 11, 9, 41, 7, 26, 13, 8, 39, 31, 19, 14, 9, 6, 9]));
