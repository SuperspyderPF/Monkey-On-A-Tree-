var isSymmetric = function(root) {
    if (!root) return true;
    function checkSymmetry(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
    }
    return checkSymmetry(root.left, root.right);
};
