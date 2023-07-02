const strings = ["a", "b", "c", "d"];

// O(1)
const itemAdded = strings.push("e"); // Returns length after adding element
console.log("Push: ", strings, "Array length: ", itemAdded);

// O(1)
const itemRemoved = strings.pop(); // Returns item that has been removed
console.log("Pop:", strings, "Item removed: ", itemRemoved);

// O(n)
const itemAddedAtBeginning = strings.unshift("x"); // Returns length of Array
console.log("Unshift: ", strings, "Array length: ", itemAddedAtBeginning);

// O(n)
const itemAfterSlice = strings.splice(2, 0, "Alien"); // Returns array of items deleted. Empty if nothing has been deleted.
console.log("Slice: ", strings, "Deleted item array: ", itemAfterSlice);
