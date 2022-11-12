const moveZeroes = nums => {
    nums.sort((a, b) => {
        if (b === 0) {
            return -1;
        }
        return 0;
    });

    return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
