const findMaxConsecutiveOnes = nums => {
    const chunks = [];
    for (let i = 0; i < nums.length; i++) {
        const prevNum = chunks.at(-1)?.[0];

        if (prevNum) {
            if (prevNum === nums[i]) {
                chunks[chunks.length - 1] = [...chunks.at(-1), nums[i]];
                continue;
            }
        }
        chunks.push([nums[i]]);
    }

    return Math.max(...chunks.map(nums => nums.length * nums[0]));
};

// const nums = [1, 1, 0, 5, 5, 5, 0];

// findMaxConsecutiveOnes(nums);

var searchRange = function (nums, target) {
    const firstIndex = nums.findIndex(num => num === target);
    const lastIndex = nums.lastIndexOf(target);

    if (firstIndex === -1) {
        return [-1, -1];
    }

    return [firstIndex, lastIndex];
};

var decompressRLElist = function (nums) {
    const parts = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const lastPart = parts[parts?.length - 1];

        if (!lastPart) {
            parts[parts?.length - 1] = [nums[i]];
        } else {
            if (lastPart.length === 2) {
                parts.push([nums[i]]);
            } else {
                parts[parts.length - 1].push(nums[i]);

                const freq = parts[parts.length - 1][0];
                const val = parts[parts.length - 1][1];

                for (let j = 1; j <= freq; j++) {
                    result.push(val);
                }
            }
        }
    }

    return result;
};

// const nums = [1, 2, 3, 4];

// decompressRLElist(nums);

// const nums = [8, 8, 5, 7, 7, 8, 8, 8, 8, 10, 2, 44],
//     target = 8;

// searchRange(nums, target);

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
    const checkTree = (pC, qC) => {
        if (pC?.val === qC?.val) {
            return true;
        }
        if (pC?.right && qC?.right && pC?.left && qC?.left) {
            if (checkTree(pC?.right, qC?.right) && checkTree(pC?.left, qC?.left)) {
                return true;
            }
            return false;
        }
        if (pC?.right && qC?.right) {
            return checkTree(pC?.right, qC?.right);
        }
        if (pC?.left && qC?.left) {
            return checkTree(pC?.left, qC?.left);
        }
        if (pC?.left && !qC?.left) {
            return false;
        }
        if (pC?.right && !qC?.right) {
            return false;
        }
        return false;
    };

    return checkTree(p, q);
};

// const tree1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null));
// const tree2 = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(1, null, null));

// isSameTree(tree1, tree2);

const trap = height => {
    const waterTrapped = height.reduce((acc, cur) => {}, {inTrap: 0, })
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap(height);
