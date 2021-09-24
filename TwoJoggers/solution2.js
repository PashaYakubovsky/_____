const nbrOfLaps = function (x, y) {
  let a = x,
    b = y,
    result = [];

  if (x == y) return [1, 1];

  for (let i = 1; ; i++) {
    a = x * i;
    if (a % x == 0 && a % y == 0) {
      result.push(i);
      break;
    }
  }

  for (let i = 1; ; i++) {
    b = y * i;
    if (b % x == 0 && b % y == 0) {
      result.push(i);
      break;
    }
  }

  return result;
};
