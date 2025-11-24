/*Problem
Given an Array and a target , return indices of two numbers that add up to the target

Examples : 

Input nums = [2,7,11,15], target = 9
output = [0,1]

*/

//Brute Force
/* first we check Every pair and the time complexity is O(n*n) which is not acceptable at faang*/

//HashMap
/* So we store numbers into index and check if target - current exist so the time complexity is O(n) and space complexity is o(n) */

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([3, 5, 6, 8], 11));
