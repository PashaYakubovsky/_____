/*
    https://www.codewars.com/kata/5b4fd549bdd074f9a200005f/train/javascript
    Every possible sum of two digits
    Given a long number, return all the possible sum of two digits of it.

    For example, 12345: all possible sum of two digits from that number are:

    [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
    Therefore the result must be:

    [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

const number = n => {
    let sums = [];

    for (let i = 0; i < n.length; i++) {
        const slice = n.slice(i + 1);

        const transform = slice.map(x => x + n[i]);
        sums = [...sums, ...transform];
    }

    return sums.reduce((acc, cur) => acc + cur, 0);
};

console.log(number([9, 13, 17, 14, 6, 10, 7, 14, 11, 15]));

/*
    assert.strictEqual( number([ 6, 7, 11 ]), 156 );
    assert.strictEqual( number([ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]), 81596 );
    assert.strictEqual( number([ 11, 8, 5, 13, 10, 7 ]), 3852 );
    assert.strictEqual( number([ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]), 3264128 );
    assert.strictEqual( number([ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]), 999999 );
*/
