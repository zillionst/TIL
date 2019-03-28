# Remove Element

URL: https://leetcode.com/problems/remove-element/>

> Runtime: 60 ms, faster than 91.01% of JavaScript online submissions for Remove Element.
> Memory Usage: 33.8 MB, less than 39.73% of JavaScript online submissions for Remove Element.

- 주어진 배열에서 2번째 인자를 제거 한 후 배열의 길이를 반납하는 문제
- 제약사항으로 새 배열을 선언하여서는 안되며 기존 인자로 받아온 배열을 변경하여 O(1)의 복잡도를 가져야 한다
- 풀이 자체는 remove duplicates from sorted array와 대동소이하다.

````javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};