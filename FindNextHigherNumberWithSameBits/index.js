/*
    Your task is to find the next higher number (int) with same '1'- Bits.

    I.e. as much 1 bits as before and output next higher than input. 
    Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...

    Some easy examples:
    Input: 129  => Output: 130 (10000001 => 10000010)
    Input: 127 => Output: 191 (01111111 => 10111111)
    Input: 1 => Output: 2 (01 => 10)
    Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
    First some static tests, later on many random tests too;-)!
*/

// v2
const nextHigher = n => {
    const bit = n.toString(2).split("");
    const bitCount = bit.filter(x => x === "1").length;

    do {
        n++;
        const newBit = n.toString(2).split("");
        const newBitCount = newBit.filter(x => x === "1").length;

        if (newBitCount === bitCount) {
            return parseInt(newBit.join(""), 2);
        }
    } while (true);
};

// v1
const nextHigher = n => {
    const byte = n.toString(2).split("");
    const byte1Count = byte.filter(x => x === "1").length;
    let newNum = n + 1;

    while (true) {
        const newByte = newNum.toString(2).split("");
        const newByte1Count = newByte.filter(x => x === "1").length;

        if (newByte1Count === byte1Count) {
            return parseInt(newByte.join(""), 2);
        }

        newNum++;
    }
};
