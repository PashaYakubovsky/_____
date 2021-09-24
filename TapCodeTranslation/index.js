function tapCodeTranslation(text) {
  let tapCode = [
    ["a", "b", "k", "d", "e"],
    ["f", "g", "h", "i", "j"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  let result = "",
    indexInsade = [],
    index = [],
    t = text.trim().split(""),
    a;

  findLetter: for (let i = 0; i < t.length; i++) {
    a = tapCode[0].findIndex(
      (item) => item == t[i] || (item == "k" && t[i] == "c")
    );

    if (a != -1) {
      index.push(1);
      indexInsade.push(a + 1);
    } else {
      for (let j = 1; j < tapCode.length; j++) {
        a = tapCode[j].findIndex((item) => item == t[i]);
        if (a != -1) {
          index.push(j + 1);
          indexInsade.push(a + 1);
          continue findLetter;
        }
      }
    }
  }

  function makeDots(n) {
    for (let i = 0; i < n; i++) {
      result += ".";
    }
  }

  for (let i = 0, length = t.length; i < length; i++) {
    makeDots(index[i]);
    result += " ";
    makeDots(indexInsade[i]);
    !(i == length - 1) ? (result += " ") : (result += "");
  }

  return result;
}

// Tap Code Translation
// Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

// The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Input:
// A lowercase string of a single word (no whitespaces or punctuation, only letters).

// Output:
// The encoded string as taps and pauses.

// Examples
// text = "dot"
//   "D" = (1, 4) = ". ...."
//   "O" = (3, 4) = "... ...."
//   "T" = (4, 4) = ".... ...."

// output: ". .... ... .... .... ...."

// "example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
// "more"    -> "... .. ... .... .... .. . ....."

// (https://www.codewars.com/kata/605f5d33f38ca800322cb18f)
