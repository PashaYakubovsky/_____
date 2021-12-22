/*
    UNCOMPLITED
	https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
	Given two strings s1 and s2, we want to visualize how different the two strings are. 
	We will only take into account the lowercase letters (a to z). 
	First let us count the frequency of each lowercase letters in s1 and s2.

	s1 = "A aaaa bb c"
	s2 = "& aaa bbb c d"

	s1 has 4 'a', 2 'b', 1 'c'
	s2 has 3 'a', 3 'b', 1 'c', 1 'd'

	So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. 
	In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

	We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" 
	where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands 
	for string s2 and bbb because the maximum for b is 3.

	The task is to produce a string in which each lowercase letters of s1 or s2 appears as many 
	times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed 
	by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

	In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) 
	will be in decreasing order of their length and when they have the same length sorted in ascending 
	lexicographic order (letters and digits - more precisely sorted by codepoint); 
	the different groups will be separated by '/'. See examples and "Example Tests".

	Hopefully other examples can make this clearer.

	s1 = "my&friend&Paul has heavy hats! &"
	s2 = "my friend John has many many friends &"
	mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

	s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
	s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
	mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

	s1="Are the kids at home? aaaaa fffff"
	s2="Yes they are here! aaaaa fffff"
	mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

const mix = (s1, s2) => {
    const result = [];
    const str1 = s1.trim().split("");
    const str2 = s2.trim().split("");

    const obj1 = {};
    const obj2 = {};

    for (let i = 0, n = Math.max(str1.length, str2.length); i < n; i++) {
        if (str1[i] && str1[i].toLowerCase() === str1[i] && str1[i].trim()) {
            obj1[str1[i]] = obj1[str1[i]] ? ++obj1[str1[i]] : 1;
        }

        if (str2[i] && str2[i].toLowerCase() === str2[i] && str2[i].trim()) {
            obj2[str2[i]] = obj2[str2[i]] ? ++obj2[str2[i]] : 1;
        }
    }

    const arr1 = Object.entries(obj1)
        .filter(x => x[1] > 1)
        .sort((a, b) => a[0].localeCompare(b[0]));
    const arr2 = Object.entries(obj2)
        .filter(x => x[1] > 1)
        .sort((a, b) => a[0].localeCompare(b[0]));

    const serializeCountChars = [];
    for (let i = 0, n = Math.max(arr1.length, arr2.length); i < n; i++) {
        if (arr1[i] && !arr1[i].some(x => arr2.some(l => l[0] === x[0]))) {
            serializeCountChars.push(`1:${arr1[i][0].repeat(arr1[i][1])}`);
        }

        if (arr2[i] && !arr2[i].some(x => arr1.some(l => l[0] === x[0]))) {
            serializeCountChars.push(`2:${arr2[i][0].repeat(arr2[i][1])}`);
        }
    }

    arr1.some(x =>
        arr2.some(l =>
            x[0] === l[0] && l[1] === x[1]
                ? serializeCountChars.push(["=:"].concat(x).join(""))
                : null
        )
    );

    serializeCountChars.sort((a, b) => {
        if (a.slice(1, 2).localeCompare(b.slice(1, 2))) {
            return 1;
        }

        // if (a.slice(1).length < b.slice(1).length) {
        //     return 1;
        // } else {
        //     return -1;
        // }
    });

    console.log(serializeCountChars);

    // const arr1 = Object.entries(obj1)
    //     .filter(item => item[1] > 1)
    //     .sort((a, b) => a[1] - b[1]);
    // const arr2 = Object.entries(obj2)
    //     .filter(item => item[1] > 1)
    //     .sort((a, b) => a[1] - b[1]);
    // const arr3 = [];

    // arr1.some(item =>
    //     arr2.some(x => {
    //         if (x[1] === item[1] && x[0] === item[0]) {
    //             arr3.push(item);
    //         }
    //     })
    // );

    // console.log(arr3);
    // console.log(arr1, arr2, arr3);

    // const serializeCountChars = [];
    // for (let i = Math.max(arr1.length, arr2.length); i >= 0; i--) {}

    return result.join("/");
};

mix("A generation must confront the looming ", "codewarrs");

/*
	mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr"
	mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
	mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
	mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo"
	mix("codewars", "codewars"), ""
	mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
*/
