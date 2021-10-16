/*
  !uncompleted :(
  https://www.codewars.com/kata/526d84b98f428f14a60008da
  A Hamming number is a positive integer of the form 2^i 3^j 5^k, for some non-negative integers i, j, and k.

  Write a function that computes the nth smallest Hamming number.

  Specifically:

  The first smallest Hamming number is 1 = 2^0 3^0 5^0
  The second smallest Hamming number is 2 = 2^1 3^0 5^0 
  The third smallest Hamming number is 3 = 2^0 3^1 5^0 
  The fourth smallest Hamming number is 4 = 2^2 3^0 5^0 
  The fifth smallest Hamming number is 5 = 2^0 3^0 5^1 
  The 20 smallest Hamming numbers are given in example test fixture.

  Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.
*/

const hamming = n => {
    const hammingNum = [];

    for (let i = 0; i < n; i++) {
        hammingNum.push(2 ** i);
    }

    for (let i = 0; i < n; i++) {
        hammingNum.push(3 ** i);
    }

    for (let i = 0; i < n; i++) {
        hammingNum.push(5 ** i);
    }

    console.log(new Set(hammingNum.sort((a, b) => a - b)));
};

console.log(hamming(10));

/*
  hamming(1) == 1, should be 1
  hamming(2) == 2, should be 2
  hamming(3) == 3, should be 3
  hamming(4) == 4, should be 4
  hamming(5) == 5, should be 5
  hamming(6) == 6, should be 6
  hamming(7) == 8, should be 8
  hamming(8) == 9, should be 9
  hamming(9) == 10, should be 10
  hamming(10) == 12, should be 12
  hamming(11) == 15, should be 15
  hamming(12) == 16, should be 16
  hamming(13) == 18, should be 18
  hamming(14) == 20, should be 20
  hamming(15) == 24, should be 24
  hamming(16) == 25, should be 25
  hamming(17) == 27, should be 27
  hamming(18) == 30, should be 30
  hamming(19) == 32, should be 32
*/
