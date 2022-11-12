var restoreString = function (s, indices) {
    const model = [];

    for (let i = 0; i < s.length; i++) {
        model.push({ char: s[i], index: indices[i] });
    }

    return model
        .sort((a, b) => a.index - b.index)
        .map(model => model.char)
        .join("");
};
// const s = "codeleet";
// const indices = [4, 5, 6, 7, 0, 2, 1, 3];

// restoreString(s, indices);

var areNumbersAscending = function (s) {
    const tokens = s.split(" ").filter(word => Number.isInteger(+word));
    let isIncreasing = true;

    for (let i = 0; i < tokens.length; i++) {
        if (tokens.length - 1 === i) {
            continue;
        }
        if (+tokens[i] >= +tokens[i + 1]) {
            isIncreasing = false;
        }
    }

    return isIncreasing;
};
const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
areNumbersAscending(s);
