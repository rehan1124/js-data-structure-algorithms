class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const removeLastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removeLastItem;
  }

  delete(index) {
    const itemToBeDeleted = this.data[index];
    this._shiftItem(index);
    this.length--;
    return itemToBeDeleted;
  }

  // --- Private methods ---
  _shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      // Copy next index item to current index
      this.data[i] = this.data[i + 1];
    }

    // Since we are looping for indexes less than array length, we still need to delete last item so as to not have duplicate copies
    // With `delete` { length: 2, data: { '0': 1, '1': 'B' } }
    // Without `delete` { length: 2, data: { '0': 1, '1': 'B', '2': 'B' } }
    delete this.data[this.length - 1];
  }
}

const arr1 = new MyArray();
console.log("arr1: ", arr1);
console.log("get(index): ", arr1.get(0));
arr1.push(1);
console.log("After push(1): ", arr1);
console.log("get(0): ", arr1.get(0));
arr1.push("Hello");
console.log("After push('Hello'): ", arr1);
console.log("get(1): ", arr1.get(1));
const poppedItem = arr1.pop();
console.log("pop(): ", poppedItem, arr1);
arr1.push("A");
arr1.push("B");
arr1.push("C");
arr1.push("D");
console.log("After adding A, B, C, D: ", arr1);
console.log("Deleting item at index 1: ", arr1.delete(1));
console.log("After deleting item at index 1: ", arr1);
console.log("Deleting item at index 0: ", arr1.delete(0));
console.log("After deleting item at index 0: ", arr1);
