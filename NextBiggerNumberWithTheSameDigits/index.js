/*
	UNCOMPLETED
	https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
	Create a function that takes a positive integer and 
	returns the next bigger number that can be formed by rearranging its digits. For example:

	12 ==> 21
	513 ==> 531
	2017 ==> 2071
	nextBigger(num: 12)   // returns 21
	nextBigger(num: 513)  // returns 531
	nextBigger(num: 2017) // returns 2071
	If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

	9 ==> -1
	111 ==> -1
	531 ==> -1
	nextBigger(num: 9)   // returns nil
	nextBigger(num: 111) // returns nil
	nextBigger(num: 531) // returns nil
*/

const nextBigger = n => {
    let arr = n.toString().split("");

    for (let i = arr.length - 1; +arr.join("") <= n; i--) {
        if (i === 0) i = arr.length - 1;

        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        console.log(arr[i]);
    }

    return +arr.join("");
};

console.log(nextBigger(19000));

/*
	1234567890 1234567908
	nextBigger(12),21
	nextBigger(513),531
	nextBigger(2017),2071
	nextBigger(414),441
	nextBigger(144),414
*/
//
