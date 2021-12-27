/*
    A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then 
    the cards in the two halves are perfectly interwoven, 
    such that the original bottom card is still on the bottom and the original top card is still on top.
    For example, faro shuffling the list

    ['ace', 'two', 'three', 'four', 'five', 'six']
    gives

    ['ace', 'four', 'two', 'five', 'three', 'six' ]
    If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.

    Write a function that takes an integer n and returns an integer representing
    the number of faro shuffles it takes to restore a deck of n cards to its original order.

    Assume n is an even number between 2 and 2000.
*/

const makeRange = n => {
    const range = [];
    for (let i = 1; i <= n; i++) {
        range.push(i);
    }

    return range;
};

const faroShuffle = range => {
    const half1 = range.slice(0, Math.floor(range.length / 2));
    const half2 = range.slice(Math.floor(range.length / 2));
    const newRange = [];

    for (let i = 0; i < Math.ceil(range.length) / 2; i++) {
        newRange.push(half1[i], half2[i]);
    }

    return newRange;
};

const faroCount = n => {
    const rangeCards = makeRange(n);
    let shuffle = faroShuffle(rangeCards);
    let count = 1;

    while (true) {
        if (shuffle + "" === rangeCards + "") {
            return count;
        }

        count++;
        shuffle = faroShuffle(shuffle);
    }
};

console.log(faroCount(52));

/*
    Test.assertEquals(faroCount(52), 8);
    Test.assertEquals(faroCount(2), 1);
    Test.assertEquals(faroCount(30), 28);
*/
