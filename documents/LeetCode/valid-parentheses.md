# Valid Parentheses

URL: <https://leetcode.com/problems/valid-parentheses/>

> Runtime: 128 ms, faster than 5.35% of JavaScript online submissions for Valid Parentheses.
> Memory Usage: 35.1 MB, less than 15.79% of JavaScript online submissions for Valid Parentheses.


 - '(', ')', '{', '}', '['로 이루어진 문자열을 주어지고
 해당 문자열이 밎는 쌍으로 바르게 짝지어졌는가를 판단하는 문제
 - 별로 효율적이지 않았다...

````javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const startB = ['(', '{', '['];
    const endB = [')', '}', ']'];

    if(s.length <= 0) return true;
    let arr = s.split('');
    
    let result = true;
    let idx = 0;
    
    while(result && arr.length > 0) {
        if(arr.length < idx) return false;
        
        if(startB.includes(arr[idx])) {
            idx++;
        } else {
            let letter = startB[endB.indexOf(arr[idx])];
            if(arr[idx - 1] === letter) {
                arr.splice(idx - 1, 2);
                idx = 0;
            } else {
                result = false;
            }
        }
    }
    return result;
}