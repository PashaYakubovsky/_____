function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const getTargetCopy = (original, cloned, target) => {
    if (original.val === target.val) {
        return cloned;
    }
    if (original.left && original.right) {
        return (
            getTargetCopy(original.left, cloned.left, target) ||
            getTargetCopy(original.right, cloned.right, target)
        );
    }
    if (original.left && !original.right) {
        return getTargetCopy(original.left, cloned.left, target);
    }
    if (original.right && !original.left) {
        return getTargetCopy(original.right, cloned.right, target);
    }
};

const tree = new TreeNode(7);
tree.left = new TreeNode(4);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(19);

const result = getTargetCopy(tree, tree, tree.right);

// [(7, 4, 3, null, null, 6, 19)];
