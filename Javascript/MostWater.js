/* Container With Most Water

Problem : Given heights of the vertical lines , find max water container.

Example: [1,8,6,2,5,4,8,3,7]
[1,2,3,4,5]

output is 49


Uses:
1.Two Pointer
2.Area Calculation
3.Move the Smaller pointer
4.Optimized thinking
*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxwater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(height[left], height[right]);
    const area = ht * width;

    maxwater = Math.max(maxwater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxwater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
