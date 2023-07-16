"use strict";

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
// Approach - 1
const nums = [11, 7, 3, 2];
const target = 9;
const sumOfTwo = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    const currentIndex = i;
    const nextIndex = i + 1;
    const sumOfTwo = nums[currentIndex] + nums[nextIndex];
    if (sumOfTwo === target) {
      return [currentIndex, nextIndex];
    }
  }
  return "No such elements present.";
};
*/

// Approach-2
const nums = [11, 7, 3, 2];
const target = 9;
const sumOfTwo = (nums, target) => {
  const sumObj = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (sumObj.hasOwnProperty(complement)) {
      return [sumObj[complement], i];
    }
    sumObj[nums[i]] = i;
  }
  return "No such elements present.";
};

console.log(sumOfTwo(nums, target));
