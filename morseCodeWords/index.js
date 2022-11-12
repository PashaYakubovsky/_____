const alpha = [
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

const morseAlpha = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
];

const uniqueMorseRepresentations = words => {
    const uniqMorseMutation = [];
    const morseWords = words.flatMap(word => {
        const letters = word.split("");
        let morseWord = "";

        for (const letter of letters) {
            morseWord += morseAlpha[alpha.findIndex(a => a === letter)];
        }

        if (uniqMorseMutation.includes(morseWord)) {
            return [];
        }

        uniqMorseMutation.push(morseWord);

        return [morseWord];
    });

    return uniqMorseMutation.length;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
