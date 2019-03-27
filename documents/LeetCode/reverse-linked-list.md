# Reverse Linked List

URL: <https://leetcode.com/problems/reverse-linked-list/>

> Runtime: 64 ms, faster than 75.90% of JavaScript online submissions for Reverse Linked List.
> Memory Usage: 36.1 MB, less than 5.67% of JavaScript online submissions for Reverse Linked List.

- 리스트 노드를 역순으로 정렬하여 출력하는 문제
- 문제를 보면 열거형 혹은 재귀법으로 푸는 것을 권장하고 있다
- 일반 배열에 넣은 후 다시 리스트노드를 만들어 반납하는 법으로 풀었으나 두번째는 열거형을 이용하여 풀었다

  - 첫 번째 풀이법
````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return null;
    let list = [head.val];
    let point = head;
    while(point.next !== null) {
        point = point.next;
        list.push(point.val);s
    }
    let returnNode = new ListNode(list.pop());
    point = returnNode;
    while(list.length > 0) {
        point.next = new ListNode(list.pop());
        point = point.next;
    }
    return returnNode;
};
````

  - 두 번째 풀이법
````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let now = head;
    let prev = null;
    
    while(now) {
        let next = now.next;
        [prev, now.next] = [now, prev]
        now = next;
    }
    return prev;
};

