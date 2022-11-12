var containsDuplicate = function (nums) {
    const uniqSet = new Set(nums);
    return uniqSet.size !== nums.length;
};

containsDuplicate([1, 2, 3, 1]);
