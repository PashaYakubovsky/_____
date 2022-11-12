/*
https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

const findUniq = (arr = arr.map(x => x.toLowerCase())) => {
    const uniqLetter = Object.entries(
        arr.reduce((acc, cur) => {
            const noDuplicates = Array.from(new Set(cur.split("")));

            const lettersCount = noDuplicates.reduce((acc2, letter) => {
                const value = acc[letter] || 0;

                return { ...acc2, [letter]: value + 1 };
            }, {});

            return { ...acc, ...lettersCount };
        }, {})
    ).find(x => x[1] === 1)[0];

    return arr.find(word => word.includes(uniqLetter));
};

console.log(findUniq(["  asdasd  ", "a", "asdasd "]));
