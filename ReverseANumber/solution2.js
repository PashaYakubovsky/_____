function reverseNumber(n) {
  let a = Array.from(n + "");
  let b = [];
  if (a[0] == "-") {
    b = a.shift();
    return +("-" + a.reverse().reduce((sum, current) => (sum += current)));
  }

  return +a.reverse().reduce((sum, current) => (sum += current));
}
