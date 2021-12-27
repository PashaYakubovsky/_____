/*
    Pair of gloves
    Winter is coming, you must prepare your ski holidays. 
    The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

    A pair of gloves is constituted of two gloves of the same color.
    You are given an array containing the color of each glove.
    You must return the number of pair you can constitute.
    You must not change the input array.
*/

const numberOfPairs = gloves => {
    const result = gloves.reduce(
        (acc, cur) => {
            const lengthIn = acc.gloves.filter(x => x === cur).length + 1;

            if (lengthIn % 2 === 0 && lengthIn !== 0) {
                return { count: acc.count + 1, gloves: [...acc.gloves, cur] };
            }

            return { ...acc, gloves: [...acc.gloves, cur] };
        },
        { count: 0, gloves: [] }
    );

    return result.count;
};

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
