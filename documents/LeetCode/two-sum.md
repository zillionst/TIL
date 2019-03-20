# First Unique Character In A String

URL: <https://leetcode.com/problems/two-sum/>

> Runtime: 876 ms, faster than 5.06% of JavaScript online submissions for Two Sum.
> Memory Usage: 36.5 MB, less than 8.79% of JavaScript online submissions for Two Sum.

하나의 배열이 주어지고 하나의 정수 값이 주어짐
배열 안에 있는 두 숫자를 더한 값이 정수값이 나오도록 하여야 함
해당 두 숫자의 인덱스를 출력하는 문제

````javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let test = nums.map(a => a);
    let result = [];
    while(test.length > 0 || result.length === 0) {
        let shifted = test.shift();
        let arr = test.filter(num => num + shifted === target);
        if(arr[0] !== undefined) {
            result = [nums.indexOf(shifted), nums.lastIndexOf(arr[0])];   
        }
    }
    return result;
};