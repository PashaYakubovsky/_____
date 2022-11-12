const getValues = l => {
    if (!l.next) {
        return l.val;
    }

    return getValues(l.next) + "," + l.val;
};

const makeLList = (array, list) => {
    list.val = +array[0];
    if (array.length === 1) {
        return list;
    }
    list.next = new ListNode(null, null);
    makeLList(array.slice(1), list.next);
};

var addTwoNumbers = function (l1, l2) {
    const l1Values = +getValues(l1).split(",").join("");
    const l2Values = +getValues(l2).split(",").join("");
    const sum = l1Values + l2Values;
    const serializeValue = String(sum).split("").reverse();
    const listMain = new ListNode(null);

    makeLList(serializeValue, listMain);

    return listMain;
};

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const [l1, l2] = [
    new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(4, new ListNode(9, null))))),
    new ListNode(5, new ListNode(6, new ListNode(4, null))),
];

addTwoNumbers(l1, l2);

