function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var minDepth = function (root) {
    const depths = [];

    const goIn = (root, count) => {
        if (root && root.left && root.right) {
            return Math.min(goIn(root.left, count + 1), goIn(root.right, count + 1));
        }

        if (root && root.left) {
            return goIn(root.left, count + 1);
        }

        if (root && root.right) {
            return goIn(root.right, count + 1);
        }

        if (root) {
            depths.push(count);
            return count;
        }
        return 0;
    };

    goIn(root, 1);

    return depths;
};

const tree = new TreeNode(
    12,
    new TreeNode(6, null, new TreeNode(5, null, new TreeNode(4, null, null))),
    new TreeNode(2, null, null)
);

minDepth(tree);
