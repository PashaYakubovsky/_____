function sortStringsByVowels(strings) {
  return strings.sort((a, b) => {
    let count1 = 0;
    let count2 = 0;
    let maxVowel1 = [];
    let maxVowel2 = [];

    for (let ch of a) {
      if (ch.search(/[aeiou]/i) != -1) {
        count1++;
      } else {
        count1 = 0;
      }

      maxVowel1.push(count1);
    }

    for (let ch of b) {
      if (ch.search(/[aeiou]/i) != -1) {
        count2++;
      } else {
        count2 = 0;
      }

      maxVowel2.push(count2);
    }

    if (Math.max(...maxVowel1) > Math.max(...maxVowel2)) {
      return -1;
    }

    if (Math.max(...maxVowel1) < Math.max(...maxVowel2)) {
      return 1;
    }

    return 0;
  });
}

// The goal of this Kata is to write a function that will receive an array of strings
// as its single argument, then the strings are each processed and sorted(in desending order)
// based on the length of the single longest sub - string of contiguous vowels(aeiouAEIOU) that may be
// contained within the string.The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be(often will be) multiple sub - strings of contiguous vowels.We are only interested in the single longest sub - string of
// vowels within each string, in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

// (https://www.codewars.com/kata/5d2d0d34bceae80027bffddb)
