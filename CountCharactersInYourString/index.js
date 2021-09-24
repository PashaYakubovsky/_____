function count(string) {
  let x = {};

  for (let char of string.split("")) {
    if (x[char]) {
      x[char]++;
    } else {
      x[char] = 1;
    }
  }
  return x;
}

// The main idea is to count all the occurring characters in a string. If you have a string like aba,
// then the result should be { 'a': 2, 'b': 1 }.
// What if the string is empty? Then the result should be empty object literal, {}.

// (https://www.codewars.com/kata/52efefcbcdf57161d4000091)
