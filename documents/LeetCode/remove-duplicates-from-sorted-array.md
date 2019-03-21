# Remove Duplicates From Sorted Array

URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/>

> Runtime: 92 ms, faster than 57.79% of JavaScript online submissions for Remove Duplicates from Sorted Array.
> Memory Usage: 37.1 MB, less than 61.41% of JavaScript online submissions for Remove Duplicates from Sorted Array.

숫자로 이루어진 정렬된 배열의 중복을 제거한 후 배열의 길이를 반납하는 문제
제약사항으로 새 배열을 선언하여서는 안되며 기존 인자로 받아온 배열을 변경하여 O(1)의 복잡도를 가져야 한다

````javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    let current;
    let temp = nums[0];
    while(count < nums.length) {
        current = nums[count];
        if(temp === current) {
            nums.splice(count, 1);
        } else {
            temp = nums[count];
            count++;
        }
    }
    return nums.length;
};