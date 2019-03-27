# Jewels And Stones

URL: <https://leetcode.com/problems/jewels-and-stones/>

> Runtime: 64 ms, faster than 78.35% of JavaScript online submissions for Jewels and Stones.
> Memory Usage: 34.9 MB, less than 20.85% of JavaScript online submissions for Jewels and Stones.

- 설명은 주얼이니 타입이니 복잡하게 되어있으나
주어지는 두 개의 문자열 J, S에서 J의 각 문자열이 S에 몇 개 들었는지를 리턴하는 문제
- 두 번의 루프로 간단하게 해결 가능하다.

````javascript
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    for(let i =0; i < S.length; i++) {
        for(let j = 0; j < J.length; j++) {
            if(J[j] === S[i]) count++;
        }
        //if(J.includes(S[i])) count++; //혹은 2중 for문 대신 includes() 함수를 써도 된다.
    }
    return count;
};