/*
    https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
    Task

    Write a function dirReduc which will take an array of strings and returns an array of 
    strings with the needless directions removed (W<->E or S<->N side by side).
*/

const dirReduc = arr =>
    arr
        .filter((x, i) => arr[i + 1] !== x)
        .reduce((acc, cur) => {
            if ((cur === "NORTH" && acc[acc.length - 1] === "WEST") || acc.length === 0) {
                return [...acc, cur];
            }

            if (cur === "WEST" && acc[acc.length - 1] === "SOUTH") {
                return [...acc, cur];
            }

            if (cur === "SOUTH" && acc[acc.length - 1] === "EAST") {
                return [...acc, cur];
            }

            if (cur === "NORTH") {
                if (acc.some(x => x === "SOUTH")) {
                    return [...acc.slice(0, acc.length - 2)];
                }

                return acc.filter(x => x !== "SOUTH");
            }

            if (cur === "SOUTH") {
                if (acc[acc.length - 1] === "NORTH") {
                    return [...acc.slice(0, acc.length - 2)];
                }

                return acc.filter(x => x !== "NORTH");
            }

            if (cur === "EAST") {
                if (acc[acc.length - 1] === "WEST") {
                    return [...acc.slice(0, acc.length - 2)];
                }

                return acc.filter(x => x !== "WEST");
            }

            if (cur === "WEST") {
                if (acc[acc.length - 1] === "EAST") {
                    return [...acc.slice(0, acc.length - 2)];
                }

                return acc.filter(x => x !== "EAST");
            }

            return [...acc, cur];
        }, []);

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

