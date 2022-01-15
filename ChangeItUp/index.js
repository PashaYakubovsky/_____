/*
    https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
    Create a function that takes a string as a parameter and does the following, in this order:

    Replaces every letter with the letter following it in the alphabet (see note below)
    Makes any vowels capital
    Makes any consonants lower case
    Note: the alphabet should wrap around, so Z becomes A

    So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

const changer = str =>
    str.split("").reduce((acc, cur) => {
        if (cur !== "" && +cur >= 0) return acc + cur;
        let [nextLetterASCII, nextLetter] = [cur.charCodeAt(), ""];

        nextLetter = String.fromCharCode(nextLetterASCII + 1);

        if (nextLetterASCII === 90) {
            nextLetter = String.fromCharCode(nextLetterASCII - 25);
        }

        if (nextLetterASCII === 122) {
            nextLetter = String.fromCharCode(nextLetterASCII - 57);
        }

        return (
            acc + nextLetter[`to${/[a,o,e,u,i]/gi.test(nextLetter) ? "Upper" : "Lower"}Case`]()
        );
    }, "");

changer("Cat30");
