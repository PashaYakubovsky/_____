function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
    if (root === null) return null;
    if (root.val === val) return root;
    if (root.left) return searchBST(root.left, val);
    if (root.right) return searchBST(root.right, val);
    return null;
};

const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));

const x = searchBST(tree, 5);
