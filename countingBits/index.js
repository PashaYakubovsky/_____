const countBits = n => {
    const bits = [];

    for (let i = 0; i <= n; i++) {
        const currentNumberBits = (i >>> 0).toString(2);
        const countBitsInCurrentNumber = currentNumberBits
            .split("")
            .reduce((acc, cur) => +cur + acc, 0);
        bits.push(countBitsInCurrentNumber);
    }

    return bits;
};

countBits(2);

console.log("12321323");
