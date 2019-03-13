# Merge Two Sorted Lists

URL: <https://leetcode.com/problems/merge-two-sorted-lists/submissions/>

> Runtime: 72 ms, faster than 66.49% of JavaScript online submissions for Merge Two Sorted Lists.
> Memory Usage: 36.2 MB, less than 12.81% of JavaScript online submissions for Merge Two Sorted Lists.


두 개의 리스트를 하나로 합치는 문제

````javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(0);
    let point = l3;
    while(l2 !== null || l1 !== null) {
        let isL1;
        if(l2 === null) {
            isL1 = true;
        } else if(l1 === null) {
            isL1 = false;
        } else if(l1.val < l2.val) {
            isL1 = true;
        } else {
            isL1 = false
        }
        
        point.next = new ListNode(isL1 ? l1.val : l2.val);
        point = point.next;
        if(isL1) {
            l1 = (l1 === null) ? null : l1.next;            
        } else {
            l2 = (l2 === null) ? null : l2.next;
        }
    }
    return l3.next;
};