/*
    UNCOMPLETED
    https://www.codewars.com/kata/57c535f82b8520076700017d/train/javascript
    Description
    Give you a matrix(2D array, rows === columns). The matrix contains only 0 and 1 . 
    Please find out the largest sub matrix(2D array, rows === columns) that contains same numbers of 0 and 1.

    Task
    Complete function findMatrixIn() that accepts a argument matrix: An 2D array that contains 0 and 1.
    Returns the largest sub matrix in this matrix(the smallest square is a 1x1 matrix). 
    If there are multiple optional results, which has smaller row and column index should be returned. 
    If no sub matrix is found, return []
    Note: Please pay attention to performance ;-)
*/

const findMatrixIn = matrix => {
    let slice = matrix.slice();
    let { t, r, b, l } = { t: 0, r: null, b: null, l: null };

    while (true) {
        const count = slice.reduce(
            (acc, cur) => {
                let [one, zero] = [0, 0];
                for (let c of cur) {
                    c === 0 ? (one += 1) : (zero += 1);
                }

                return { zero: acc.zero + +zero, one: acc.one + +one };
            },
            { one: 0, zero: 0 }
        );

        if (count.one === count.zero) {
            return slice;
        }

        if (t === 0) {
            if (slice.length === 1) {
                t = 1;
                r = 0;
                slice = matrix.slice();
                continue;
            }

            slice = slice.slice(0, slice.length - 1).map(x => x.slice(0, x.length - 1));
        }

        if (r === 0) {
            if (slice.length === 1) {
                r = 1;
                b = 0;
                slice = matrix.slice();
                continue;
            }

            slice = slice.slice(1).map(x => x.slice(0, x.length - 1));
        }

        if (b === 0) {
            if (slice.length === 1) {
                b = 1;
                l = 0;
                slice = matrix.slice();
                continue;
            }

            slice = slice.slice(1).map(x => x.slice(1));
        }

        if (l === 0) {
            if (slice.length === 1) {
                return [];
            }

            slice = slice.slice(0, slice.length - 1).map(x => x.slice(1));
        }
    }
};

console.log(
    findMatrixIn([
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    ])
);

/*
matrix=[
    [1,1,1],
    [0,0,0],
    [1,1,1]
    ]
    findMatrixIn(matrix)  should return:
    [
    [1,1],
    [0,0]
    ]

    matrix=[
    [1,1,1,0],
    [0,0,0,1],
    [1,1,1,0],
    [0,0,0,1]
    ]
    findMatrixIn(matrix)  should return:
    [
    [1,1,1,0],
    [0,0,0,1],
    [1,1,1,0],
    [0,0,0,1]
    ]
    (the matrix self)

    matrix=[
    [1,1,0,1,0],
    [1,0,1,0,1],
    [1,1,0,1,0],
    [1,0,1,0,1],
    [1,1,1,1,1]
    ]
    findMatrixIn(matrix)  should return:
    [
    [1,0,1,0],
    [0,1,0,1],
    [1,0,1,0],
    [0,1,0,1]
    ]

    matrix=[
    [1,1,1],
    [0,1,0],
    [1,1,1]
    ]
    findMatrixIn(matrix)  should return:[]
*/
