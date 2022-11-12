const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const decodeMessage = (key, message) => {
    const salt = key
        .replaceAll(" ", "")
        .split("")
        .reduce((acc, cur) => {
            if (acc.includes(cur)) {
                return acc;
            }
            return [...acc, cur];
        }, []);

    const words = message.split(" ");
    let resultValue = "";

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const saltLetterIndex = salt.findIndex(letter => letter === words[i][j]);
            resultValue += alphabet[saltLetterIndex] ?? words[i][j];
        }
        if (i !== words.length - 1) resultValue += " ";
    }

    return resultValue;
};

decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv");
