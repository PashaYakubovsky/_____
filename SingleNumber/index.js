var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i];
        nums[i] = null;

        const elemAlone = nums.findIndex(item => item === temp) === -1;

        if (elemAlone) {
            return temp;
        }
        nums[i] = temp;
    }
};

singleNumber([2, 2, 1]);
