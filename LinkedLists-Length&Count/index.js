/*
    Linked Lists - Length & Count

    Implement Length() to count the number of nodes in a linked list.

    length(null) => 0
    length(1 -> 2 -> 3 -> null) => 3
    Implement Count() to count the occurrences of an integer in a linked list.

    count(null, 1) => 0
    count(1 -> 2 -> 3 -> null, 1) => 1
    count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
    I've decided to bundle these two functions within the same Kata since they are both very similar.
*/

function Node(data) {
    this.data = data;
    this.next = null;
}

function getCountLength(next, c) {
    if (!next.next) {
        return c;
    }

    return 1 + getCountLength(next.next, c);
}

function getCountData(next, c) {
    if (!next.next) {
        return c;
    }

    return [next.data, ...getCountData(next.next, c)];
}

function length(head) {
    if (!head.next) {
        return 0;
    }

    return getCountLength(head, 1);
}

function count(head, data) {
    const rangeData = getCountData(head, []);

    return rangeData.reduce((acc, cur, index) => {
        if (cur === data) {
            return [...acc, index];
        }

        return acc;
    }, [])[0];
}

const node = new Node(12);
node.next = new Node(22);
node.next.next = new Node(8);

console.log(length(node));
console.log(count(node, ));
