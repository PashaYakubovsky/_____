function isIsogram(str) {
  let uniqString = "";

  for (let char of new Set(str.toLowerCase()).values()) {
    if (Number.isInteger(+char)) return false;
    uniqString += char;
  }

  return str.toLowerCase() === uniqString;
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// (https://www.codewars.com/kata/54ba84be607a92aa900000f1)