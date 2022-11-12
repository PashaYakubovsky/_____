/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const getValueArrayFromList = (list, value = []) => {
    if (!list.next) {
        return value.concat(list.val);
    }

    return getValueArrayFromList(list.next, value.concat(list.val));
};

const makeList = (arr, list = new ListNode(null)) => {
    if (arr.length === 0) return;

    list.next = new ListNode(arr[0], null);
    makeList(arr.slice(1), list.next);
};

var mergeTwoLists = function (list1, list2) {
    const value1 = getValueArrayFromList(list1);
    const value2 = getValueArrayFromList(list2);
    const sorted = value1.concat(value2).sort((a, b) => a - b);
    const list = new ListNode(sorted[0], null);
    makeList(sorted.slice(1), list);
    return list;
};

mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
);
