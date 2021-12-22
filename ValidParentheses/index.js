/*
    Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
    The function should return true if the string is valid, and false if it's invalid.

    Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    Constraints
    0 <= input.length <= 100
*/

const validParentheses = parens => {
    const chunks = parens.split("");
    const pair = {
        left: 0,
        right: 0,
    };

    for (let i = 0, length = chunks.length; i < length; i++) {
        if (i === 0 && chunks[i] === ")") return false;

        if (chunks[i] === "(") pair.left++;
        if (chunks[i] === ")") {
            pair.right++;

            if (pair.right > pair.left) {
                return false;
            }
        }
    }

    return chunks.length === 0 || pair.left % pair.right === 0;
};

console.log(validParentheses("())("));
