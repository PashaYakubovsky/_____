var scoreOfParentheses = function (s) {
    let multipleBy = 1;
    let left = 0;
    let right = 0;
    let score = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.at(i) === "(") {
            if (right > 0) {
                right--;
                score += 1;
            }
        }
        if (s.at(i) === ")") {
            right++;
            if(left > 0) {
                
            }
        }
    }
};
const s = "(())";
scoreOfParentheses(s);
