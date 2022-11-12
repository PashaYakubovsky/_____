/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const checkRow = row => {
        const repeat = [];

        for (const num of row) {
            if (num !== ".") {
                if (!repeat.includes(num)) {
                    repeat.push(num);
                } else {
                    return false;
                }
            }
        }

        return true;
    };
    const checkBoardsRows = () => {
        for (const row of board) {
            if (!checkRow(row)) {
                return false;
            }
        }

        return true;
    };
    const checkColumn = () => {
        const columns = [];

        for (const row of board) {
            for (let i = 0; i < row.length; i++) {
                if (Array.isArray(columns[i])) {
                    columns[i].push(row[i]);
                } else {
                    columns[i] = [row[i]];
                }
            }
        }

        for (const column of columns) {
            if (!checkRow(column)) {
                return false;
            }
        }

        return true;
    };

    const checkCube = () => {
        const cubes = [[], [], [], [], [], [], [], [], []];

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let cubeIndex = 0;
                if (i < 3) {
                    if (j < 3) {
                        cubeIndex = 0;
                    }
                    if (j >= 3 && j < 6) {
                        cubeIndex = 1;
                    }
                    if (j >= 6 && j < 9) {
                        cubeIndex = 2;
                    }
                }
                if (i >= 3 && i < 6) {
                    if (j < 3) {
                        cubeIndex = 3;
                    }
                    if (j >= 3 && j < 6) {
                        cubeIndex = 4;
                    }
                    if (j >= 6 && j < 9) {
                        cubeIndex = 5;
                    }
                }
                if (i >= 6 && i < 9) {
                    if (j < 3) {
                        cubeIndex = 6;
                    }
                    if (j >= 3 && j < 6) {
                        cubeIndex = 7;
                    }
                    if (j >= 6 && j < 9) {
                        cubeIndex = 8;
                    }
                }

                if (board[i][j] !== ".") cubes[cubeIndex].push(board[i][j]);
            }
        }

        for (const cube of cubes) {
            const length = new Set(cube).size;

            if (length !== cube.length) {
                return false;
            }
        }

        return true;
    };

    const validStage1 = checkBoardsRows();
    if (!validStage1) {
        return false;
    }
    const validStage2 = checkColumn();
    if (!validStage2) {
        return false;
    }
    const validStage3 = checkCube();
    if (!validStage3) {
        return false;
    }

    return true;
};

const board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", "3", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board1 = [
    ["1", "2", "3", ".", "7", ".", ".", ".", "."],
    ["4", "5", "6", "1", "9", "5", ".", ".", "."],
    ["7", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board1);
