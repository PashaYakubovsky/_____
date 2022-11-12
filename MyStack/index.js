var MyStack = function () {
    this.value = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.value = [x, ...this.value];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    const top = this.value[0];

    if (top) {
        this.value = this.value.slice(1);
    }

    return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.value[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.value.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const obj = new MyStack();
obj.push(1);
obj.push(2);

const param_3 = obj.top();
const param_2 = obj.pop();
const param_4 = obj.empty();
