function filterLongWords(sentence, n) {
  let newWords = [];
  let words = sentence.split(" ");

  for (let i = 0, s = words.length; i < s; i++) {
    if (words[i].length > n) {
      newWords.push(words[i]);
    }
  }

  return newWords;
}

// Write a function filterLongWords that takes a string sentence and an integer n.
// Return a list of all words that are longer than n.

// Example:
// filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

// (https://www.codewars.com/kata/5697fb83f41965761f000052)
