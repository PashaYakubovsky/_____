const sumSquareEvenRootOdd = (ns) => {
  let arr = ns.slice();

  for (let i = 0; i < ns.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] *= arr[i];
    } else {
      arr[i] = Math.sqrt(arr[i]);
    }
  }

  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });

  return +sum.toFixed(2);
};

// Complete the function that takes a list of numbers(nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd.
// Take this new list and return the sum of it, rounded to two decimal places.
// The list will never be empty and will only contain values that are greater than or equal to zero.

// (https://www.codewars.com/kata/5a4b16435f08299c7000274f)
