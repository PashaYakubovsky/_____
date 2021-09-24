function spinWords(string) {
  let words = string.split(" ");

  for (let i = 0, n = words.length; i < n; i++) {
    let word = words[i];

    if (words[i].length >= 5) words[i] = word.split("").reverse().join("");
  }

  return words.join(" ");
}

console.log(spinWords("Just kidding there is still one more"));
