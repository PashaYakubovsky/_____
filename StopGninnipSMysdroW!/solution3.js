function spinWords(string) {
  let words = string.split(" ");
  let a = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      a = words[i];
      a = a.split("").reverse().join("");
      words[i] = a;
    }
  }
  return words.join(" ");
}
