function solution(value) {
  let string = String(value);
  if (string.length == 1) return `Value is 0000${value}`;
  if (string.length == 2) return `Value is 000${value}`;
  if (string.length == 3) return `Value is 00${value}`;
  if (string.length == 4) return `Value is 0${value}`;
  if (string.length == 5) return `Value is ${value}`;
}
