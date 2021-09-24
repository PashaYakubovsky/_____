function maxSumBetweenTwoNegatives(a) {
  let flag = false,
    sum = 0,
    sumArr = [];

  if (a.length == 0) {
    return -1;
  }

  let copy = a.slice(),
    countNegative = 0,
    countPositive = 0;

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] < 0) {
      countNegative++;
    } else {
      countPositive++;
    }
  }

  if (countNegative == 1 && countPositive == 1) {
    return -1;
  } else if (countPositive == 0 && countNegative > 1) {
    return 0;
  } else if (countNegative == 0 && countPositive > 0) {
    return -1;
  } else if (countNegative == 1 && countPositive > 0) {
    return -1;
  } else if (countNegative == 0 && countPositive == 1) {
    return 0;
  } else if (countNegative == 1 && countPositive == 1) {
    return -1;
  } else if (countNegative == 1 && countPositive == 0) {
    return -1;
  }

  for (let i = 0; i < a.length; i++) {
    if (copy[0] > 0) copy.shift();
  }

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] < 0) {
      flag = false;
    } else if (copy[i] > 0) {
      flag = true;
    }

    if (flag) {
      sum += copy[i];
    } else {
      sumArr.push(sum);
      sum = 0;
    }
  }

  return Math.max(...sumArr);
}

// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python and JavaScript, Nothing for Haskell.

// No negative element should be present in this sum.

// Example:

// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.

// (https://www.codewars.com/kata/6066ae080168ff0032c4107a)
