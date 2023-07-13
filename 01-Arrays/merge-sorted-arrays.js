function mergeSortedArrays(arr1, arr2) {
  console.log("Arrays provided: ", arr1, arr2);
  if (!arr1) {
    return arr2;
  }

  if (!arr2) {
    return arr1;
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let i = 0;
  let j = 0;

  const newArr = [];

  while (i < arr1.length && j < arr2.length) {
    console.log(`Comparing ${arr1[i]} and ${arr2[j]}`);
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

const msa = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("First example: ", msa);

const msa1 = mergeSortedArrays([4, 6, 30], [0, 3, 4, 31]);
console.log("Second example: ", msa1);
