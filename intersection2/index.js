var intersect = function (nums1, nums2) {
    return nums1.reduce((acc, cur) => {
        const intersection = nums2.filter(x => x === cur);

        if (intersection.length > 0 && !acc.includes(cur)) {
            const repeat = [];

            for (let i = 0; i < intersection.length; i++) {
                repeat.push(cur);
            }

            return [...acc, ...repeat];
        }

        return acc;
    }, []);
};

intersect([1, 2, 2, 1], [2, 2]);
