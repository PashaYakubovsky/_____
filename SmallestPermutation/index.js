function minPermutation(n) {
  let arr = n
    .toString()
    .split("")
    .sort((a, b) => {
      if (!isFinite(a) || !isFinite(b)) {
        return 0;
      }

      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });

  let zeros = arr.filter((item) => item == 0);

  if (arr[0] == "-") {
    arr = (+arr.join("") + "").split("");
    let result = [].concat(arr.slice(0, 2), zeros, arr.slice(2));
    return +result.join("");
  } else {
    arr = (+arr.join("") + "").split("");
    let result = [].concat(arr.slice(0, 1), zeros, arr.slice(1));
    return +result.join("");
  }
}

// Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.

// (https://www.codewars.com/kata/5fefee21b64cc2000dbfa875)
