const letterFrequency = text => {
    const listLetterCount = Object.entries(
        text.split("").reduce((acc, cur) => {
            const serializeLetter = cur.toLowerCase();

            if (/[a-zA-Z]/gi.test(serializeLetter)) {
                return {
                    ...acc,
                    [serializeLetter]: acc[serializeLetter] ? acc[serializeLetter] + 1 : 1,
                };
            }
            return acc;
        }, {})
    ).sort((a, b) => b[1] - a[1]);

    const length = listLetterCount.length;
    const part1 = [];
    const part2 = [];

    for (let i = 0; i < length; i++) {
        const [letter, count] = listLetterCount[i];

        if (i !== length - 1) {
            const [nLetter, nCount] = listLetterCount[i + 1];
            const [index, nIndex] = [text.indexOf(letter), text.indexOf(nLetter)];

            if (count === nCount) {
                listLetterCount[i + 1] = [letter, count];
                listLetterCount[i] = [nLetter, nCount];
                i -= 1;
            }
        }
    }

    return listLetterCount;
};

letterFrequency("wklv lv d vhfuhw phvvdjh");
