# Minimum Depth Of Binary Tree

URL: <https://leetcode.com/problems/minimum-depth-of-binary-tree/>

> Runtime: 68 ms, faster than 88.39% of JavaScript online submissions for Minimum Depth of Binary Tree.
> Memory Usage: 37.7 MB, less than 5.33% of JavaScript online submissions for Minimum Depth of Binary Tree.

- 2진 트리 형식의 노드의 가장 짧은 depth를 찾는 문제
- 재귀를 이용하여 해결

````javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    return findDepthRecursive(0, [root]);
};

var findDepthRecursive = function(depth, nodeArr) {
    let newArr = [];
    for(let i of nodeArr) {
        if(i.left === null && i.right === null) return depth + 1;
        if(i.left) newArr.push(i.left);
        if(i.right) newArr.push(i.right);
    }
    return findDepthRecursive(depth + 1, newArr);
}
````