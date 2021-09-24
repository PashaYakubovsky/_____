function vowelBack(s) {
  let res = [];
  for (let i = 0, n = s.length; i < n; i++) {
    res.push(findInAlphabet(s[i]));
  }

  return res.join("");
}

function findInAlphabet(char) {
  let flag = /[aouei]/g.test(char);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //26

  let index = alphabet.findIndex((indx) => indx == char);

  switch (char) {
    case "c":
    case "o":
      return alphabet[index - 1];
    case "d":
      return alphabet[index - 3];
    case "e":
      return alphabet[0];
  }

  if (flag) {
    index - 5 <= 0 ? (index = index - 5 + 26) : (index -= 5);
  } else {
    index + 9 > 25 ? (index += 9 - 26) : (index += 9);
  }

  switch (alphabet[index]) {
    case "c":
    case "d":
    case "o":
    case "e":
      if (flag) {
        index + 5 > 25 ? (index = index + 5 - 26) : (index += 5);
      } else {
        index - 9 <= 0 ? (index = index - 9 + 26) : (index -= 9);
      }
      break;
  }

  return alphabet[index];
}

// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

// (https://www.codewars.com/kata/57cfd92c05c1864df2001563)
