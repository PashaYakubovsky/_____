const intersect = function (nums1, nums2) {
    return nums1.reduce(
        (acc, cur) => {
            if (nums2.includes(cur)) {
                return { ...acc, v: acc.v.concat(cur) };
            }

            return { x: [acc.x.length > acc.v.length ? acc.x : acc.v], v: [] };
        },
        { x: [], v: [] }
    ).x;
};
intersect([1, 2, 2, 1], [2, 2]);
