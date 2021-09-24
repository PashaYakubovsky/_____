function greatestCommonFactor(array) {
  let int = 0;
  function nod(a, b) {
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    return a + b;
  }

  for (let i = 0, n = array.length - 1; i < n; i++) {
    if (int != 0) {
      int = nod(int, array[i + 1]);
    } else {
      int = nod(array[i], array[i + 1]);
    }
  }
  return int;
}

// Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.
// greatestCommonFactor([46, 14, 20, 88]); // --> 2

// (https://www.codewars.com/kata/5849169a6512c5964000016e)
