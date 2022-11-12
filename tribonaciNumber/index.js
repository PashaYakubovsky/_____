const tribonacci = n => {
    const tribonacciList = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            tribonacciList[i] = 0;
            continue;
        }
        if (i === 1 || i === 2) {
            tribonacciList[i] = 1;
            continue;
        }
        tribonacciList[i] = tribonacciList[i - 1] + tribonacciList[i - 2] + tribonacciList[i - 3];
    }

    return tribonacciList[n];
};
