const makeCube = (index, rowIndex, board) => {
    if (index > 5) {
        if (rowIndex > 5) {
            const row1 = board[6].slice(6);
            const row2 = board[7].slice(6);
            const row3 = board[8].slice(6);

            return [row1, row2, row3];
        }
        if (rowIndex > 2) {
            const row1 = board[3].slice(6);
            const row2 = board[4].slice(6);
            const row3 = board[5].slice(6);

            return [row1, row2, row3];
        }
        const row1 = board[0].slice(6);
        const row2 = board[1].slice(6);
        const row3 = board[2].slice(6);

        return [row1, row2, row3];
    }
    if (index > 2) {
        if (rowIndex > 5) {
            const row1 = board[6].slice(3, 6);
            const row2 = board[7].slice(3, 6);
            const row3 = board[8].slice(3, 6);

            return [row1, row2, row3];
        }
        if (rowIndex > 2) {
            const row1 = board[3].slice(3, 6);
            const row2 = board[4].slice(3, 6);
            const row3 = board[5].slice(3, 6);

            return [row1, row2, row3];
        }
        const row1 = board[0].slice(3, 6);
        const row2 = board[1].slice(3, 6);
        const row3 = board[2].slice(3, 6);

        return [row1, row2, row3];
    }

    if (rowIndex > 5) {
        const row1 = board[6].slice(0, 3);
        const row2 = board[7].slice(0, 3);
        const row3 = board[8].slice(0, 3);

        return [row1, row2, row3];
    }
    if (rowIndex > 2) {
        const row1 = board[3].slice(0, 3);
        const row2 = board[4].slice(0, 3);
        const row3 = board[5].slice(0, 3);

        return [row1, row2, row3];
    }
    const row1 = board[0].slice(0, 3);
    const row2 = board[1].slice(0, 3);
    const row3 = board[2].slice(0, 3);

    return [row1, row2, row3];
};

const finish = (nextValue, nextRow, board, row, index) => {
    if (nextValue) {
        return fillSudoku(nextValue, row, board, index + 1);
    }
    if (nextRow) {
        return fillSudoku(nextRow[0], nextRow, board, 0);
    }
    return board;
};

const makeColumn = (index, board) => {
    return board.flatMap(nums => {
        if (nums[index] === ".") {
            return [];
        }
        return nums[index];
    });
};

const fillSudoku = (value, row, board, index) => {
    const rowIndex = board.findIndex(nums => nums === row);
    const nextRow = board[rowIndex + 1];
    const nextValue = row[index + 1];

    const cubeNumbers = makeCube(index, rowIndex, board).flatMap(nums =>
        nums.filter(num => +num >= 0)
    );
    const rowNumbers = row.filter(num => +num >= 0);
    const columnsNumbers = makeColumn(index, board);

    if (value !== ".") {
        return finish(nextValue, nextRow, board, row, index);
    }

    for (let num = 1; num < 10; num++) {
        const stringNum = String(num);

        if (
            cubeNumbers.filter(x => x === stringNum).length < 2 &&
            rowNumbers.filter(x => x === stringNum).length < 2 &&
            columnsNumbers.filter(x => x === stringNum).length < 2
        ) {
            row[index] = stringNum;

            return finish(nextValue, nextRow, board, row, index);
        }
    }

    return finish(nextValue, nextRow, board, row, index);
};

const solveSudoku = board => {
    const result = fillSudoku(board[0][0], board[0], board, 0);

    return result;
};

const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
