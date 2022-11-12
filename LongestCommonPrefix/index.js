var longestCommonPrefix = function (strs) {
    let pattern = "";
    const length = Math.min(...strs.reduce((acc, cur) => [...acc, cur.length], []));

    for (let k = 0; k < length; k++) {
        const letter = strs[0][k];

        if (letter) {
            const isPartInEveryStrings = strs.every(item => (item[k] || "") === letter);

            if (isPartInEveryStrings) {
                pattern += letter;
            } else {
                return pattern;
            }
        }
    }

    return pattern;
};

longestCommonPrefix(["cir", "car"]);
