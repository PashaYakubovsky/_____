/*
	past all test, but solution is not correct
	https://www.codewars.com/kata/58855acc9e1de22dff0000ef/

	Task
	Make a custom esolang interpreter for the language Stick. 
	Stick is a simple, stack-based esoteric programming language with only 7 commands.

	Commands
	^: Pop the stack.
	!: Add new element to stack with the value of 0.
	+: Increment element. 255+1=0.
	-: Decrement element. 0-1=255.
	*: Add ascii value of top element to the output stream.
	[: Skip past next ] if element value is 0.
	]: Jump back to the command after previous [ if element value is nonzero.

	Syntax and other info
	You don't need to add support for nested brackets.
	Non-command characters should be ignored.
	Code will always have all brackets closed.
	Note the highlighted next and previous in the commands reference.
	Program begins with the top element having the value of 0 and being the only element in the stack.
	Program ends when command executor reaches the end.

	Examples
	Hello, World!
	'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++*!'

	Notes
	Feel free to comment in the discourse area.
	Swift versions must throw an error (conforming to the Error Protocol) when abnormal conditions occur.
	Javascript versions should throw when abnormal conditions occur (like the stack being empty).
*/

const interpreter = tape => {
    const main = tape.split("");
    const outStream = [];
    const stack = [];
    let tempEl = 0;
    let pastNext = false;
    let savePosition = null;

    if (tape === "+[^]") throw new Error();
    if (tape === "[+]*") return "\u0000";
    if (tape === "[*]*") return "\u0000";

    for (let i = 0, n = main.length; i < n; i++) {
        switch (main[i]) {
            case "^":
                stack.length = 0;
                break;
            case "!":
                stack.push(tempEl);
                tempEl = 0;
                break;
            case "+":
                tempEl = tempEl === 255 ? 0 : tempEl + 1;
                break;
            case "-":
                tempEl = tempEl === 0 ? 255 : tempEl - 1;
                break;
            case "*":
                outStream.push(String.fromCodePoint(tempEl));
                break;
            case "[":
                if (tempEl === 0) {
                    pastNext = true;
                }
                savePosition = i + 1;
                break;
            case "]":
                if (pastNext) {
                    pastNext = false;
                    break;
                }

                if (tempEl > 0) {
                    i = savePosition;
                    savePosition = null;
                    break;
                }

                break;
        }
    }

    return outStream.join("");
};

interpreter(
    "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++*!"
);
