var removeElement = function (nums, val) {
    nums.sort((a, b) => {
        if (b === val) {
            return -1;
        }
        return 1;
    });
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.length = i;
        }
    }

    return nums;
};

removeElement([3, 2, 2, 3], 3);
