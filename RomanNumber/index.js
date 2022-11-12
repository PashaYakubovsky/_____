/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let rNum = "";
    const stringNum = String(num);
    const length = stringNum.length;

    for (let i = length; i >= 0; i--) {
        switch (true) {
            case i > 3: {
                const num = +stringNum
                    .split("")
                    .slice(0, length - 3)
                    .join("");

                for (let k = 0; k < num; k++) {
                    rNum += "M";
                }

                break;
            }
            case i === 2: {
                let num = +stringNum.slice(length - 3, length);

                if (num >= 900) {
                    rNum += "CM";
                    num -= 900;
                }

                if (num >= 500) {
                    rNum += "D";
                    num -= 500;
                }

                if(num >= 400) {
                    rNum += "CD"
                    num -= 400;
                }

                for (let k = num; k >= 100; k -= 100) {
                    rNum += "C";
                }
                break;
            }
            case i === 1: {
                let num = +stringNum.slice(length - 2, length);

                if (num >= 90) {
                    rNum += "XC";
                    num -= 90;
                }

                if (num >= 50) {
                    rNum += "L";
                    num -= 50;
                }

                if (num >= 40) {
                    rNum += "XL";
                    num -= 40;
                }


                for (let k = num; k >= 10; k -= 10) {
                    rNum += "X";
                }

                break;
            }
            case i === 0: {
                let num = +stringNum.slice(length - 1, length);

                if (num >= 9) {
                    rNum += "IX";
                    num -= 9;
                }

                if (num >= 5) {
                    rNum += "V";
                    num -= 5;
                }

                let del = num % 5;

                if (num === 4) {
                    rNum += "IV";
                    break;
                }

                for (let k = 0; k < del; k++) {
                    rNum += "I";
                }
            }
        }
    }

    return rNum;
};

console.log(intToRoman(10));
