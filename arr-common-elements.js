const arr1 = ["a", "b", "c", "x"];
const arr2 = ["x", "y", "m"];

function commonElements(_arr1, _arr2) {
  // ------------------
  // --- Solution-1 ---
  // ------------------
  //   for (let i = 0; i < _arr1.length; i++) {
  //     for (let j = 0; j < _arr2.length; j++) {
  //       if (_arr1[i] === _arr2[j]) {
  //         console.log(
  //           `Found matching elements at indexes ${i} (i) and ${j} (j).`
  //         );
  //         return true;
  //       }
  //     }
  //   }
  //   console.log("No match found.");
  //   return false;

  //   ++++++++++++++++++++++++++++++++++++++++

  // ------------------
  // --- Solution-2 ---
  // ------------------

  // Check if 2 arrays are passed for comparison
  if (!_arr1 && !arr2) {
    return "Please provide 2 arrays.";
  }

  // Check if any of the array is empty
  if (_arr1.length === 0 || _arr2.length === 0) {
    return false;
  }

  // If either of the arrays are not empty, then...
  let obj1 = {};
  _arr1.forEach((i) => {
    if (!obj1.i) {
      obj1[i] = true;
    }
  });
  console.log("obj1 is: ", obj1);

  // Compare if elements from 2nd array exists in 1st array
  for (let j = 0; j < _arr2.length; j++) {
    if (obj1[_arr2[j]]) {
      return true;
    }
  }
  return false;
}

const ce = commonElements(arr1, arr2);
console.log("Any common element in 2 arrays: ", ce);
