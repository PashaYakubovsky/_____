const deepCount = (a) => {
  let deepLength = 0;

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      deepLength += deepCount(a[i]);
    }
  }

  deepLength += a.length;
  return deepLength;
};

// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);
// >>>>> 3
// deepCount(["x", "y", ["z"]]);
// >>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// >>>>> 7
// The input will always be an array.

// (https://www.codewars.com/kata/596f72bbe7cd7296d1000029)
