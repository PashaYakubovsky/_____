function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
    const goInto = (root, count) => {
        if (root.left && root.right) {
            return Math.max(goInto(root.left, count + 1), goInto(root.right, count + 1));
        }

        if (root.left) {
            return goInto(root.left, count + 1);
        }

        if (root.right) {
            return goInto(root.right, count + 1);
        }

        return count;
    };

    return goInto(root, 1);
};

const tree = new TreeNode(
    12,
    new TreeNode(6, null, new TreeNode(5, null, new TreeNode(4, null, null))),
    new TreeNode(2, null, null)
);

const x = maxDepth(tree);
