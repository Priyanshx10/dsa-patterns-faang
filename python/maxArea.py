'''
Container With Most Water

Problem : Given heights of the vertical lines , find max water container.

Example: [1,8,6,2,5,4,8,3,7]
[1,2,3,4,5]

output is 49


Uses:
1.Two Pointer
2.Area Calculation
3.Move the Smaller pointer
4.Optimized thinking
'''

def maxArea(height) :
    left = 0
    right = len(height) - 1
    max_water = 0

    while(left < right):
        width = right - left
        ht = min(height[left],height[right])
        area = ht * width

        max_water = max(max_water,area)

        if (height[left] < height[right]):
            left += 1
        else :
            right -= 1
    return max_water

print (maxArea([1,2,3,4,5]))