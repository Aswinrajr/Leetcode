function maxPathSum(root) {
  function dfs(node) {
    if (!node) return 0;

    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));

    maxSum = Math.max(maxSum, node.val + left + right);

    return node.val + Math.max(left, right);
  }

  let maxSum = -Infinity;
  dfs(root);
  return maxSum;
}
