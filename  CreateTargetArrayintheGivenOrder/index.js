var createTargetArray = function (nums, index) {
    return nums.reduce((acc, num, idx) => {
        return [...acc.slice(0, index[idx]), num, ...acc.slice(index[idx])];
    }, []);
};

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

createTargetArray(nums, index);
