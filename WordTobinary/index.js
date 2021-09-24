function wordToBin(str) {
  let resoult = [];
  let arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    resoult.push("0" + arr[i].charCodeAt().toString(2));
  }

  return resoult;
}

// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.
// Example: 'man' should return [ '01101101', '01100001', '01101110' ]

// (https://www.codewars.com/kata/59859f435f5d18ede7000050)
