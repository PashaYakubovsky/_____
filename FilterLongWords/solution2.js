function filterLongWords(sentence, n) {
  let arr = [];
  for (let word of sentence.split(" ")) {
    if (word.length > n) arr.push(word);
  }

  return arr;
}
