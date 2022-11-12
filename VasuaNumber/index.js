/*
    A = X + x1 + x2 + x3 + x4...
    B = X - x1 - x2- x3 - x4...

    ---> 3 number separated by ,
    <--- YES or NO
*/

const checkNumber = (a, b, n) => {
    if (a < b) return "NO";
    let [A, B] = [n, n];

    for (let i = 0; A < a || B < b; i++) {
        if (A < a) {
            A += n;
        }

        if (B < b) {
            B += n;
        }
    }

    return A === a && B === b ? "YES" : "NO";
};

return checkNumber(9, 6, 2);
