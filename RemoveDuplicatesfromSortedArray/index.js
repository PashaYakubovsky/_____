var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            do {
                const temp = nums[i + 1];
                nums = nums.slice(0, i + 1).concat(nums.slice(i + 2), temp);
            } while (nums[i] === nums[i + 1]);
        }
    }

    return new Set(nums).size;
};

removeDuplicates([1, 1, 2]);
