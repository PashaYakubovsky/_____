/*
Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:
N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
*/

const createSpiral = N => {
    const count = [];
    const move = "top"; // top right bottom left

    for (let i = 0; i < N; i++) {
        const item = [];

        for (let j = 0; j < N; j++) {

            item.push();
        }

        count.push(item);
    }

    return count;
};

createSpiral(5);
