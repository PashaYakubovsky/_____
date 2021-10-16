/*
	https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
	For a given string s find the character c (or C) with longest consecutive repetition and return:
	[c, l]
	where l (or L) is the length of the repetition. 
	If there are two or more characters with the same l return the first in order of appearance.

	For empty string return => ["", 0]

	In JavaScript: If you use Array.sort in your solution, you might experience issues 
	with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. 
	This is not a kata issue.
*/

const longestRepetition = s => {
    const arr = s.split("");
    const res = [];
    let max = ["", 0];
    let count = 1;

    arr.forEach((el, idx) => {
        if (idx === 0) return;
        el === arr[idx - 1] || (el === arr[idx - 1] && idx === arr.length - 1)
            ? res.push([arr[idx - 1], ++count])
            : (res.push([arr[idx - 1], count]), (count = 1));
    });

    for (let el of res) {
        if (el[1] > max[1]) {
            max = el;
        }
    }

    return max;
};

console.log(longestRepetition("abcdefg"));

/*
	longestRepetition("aaaabb"),      ["a",4] 
	longestRepetition("bbbaaabaaaa"), ["a",4] 
	longestRepetition("cbdeuuu900"),  ["u",3] 
	longestRepetition("abbbbb"),      ["b",5] 
	longestRepetition("aabb"),        ["a",2] 
	longestRepetition(""),            ["",0] 
	longestRepetition("ba"),          ["b",1] 
*/
