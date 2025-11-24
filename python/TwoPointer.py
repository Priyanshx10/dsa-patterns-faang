'''
Problem

Given an Array and a target , return indices of two numbers that add up to the target
Examples : 

Input nums = [2,7,11,15], target = 9
output = [0,1]

Brute Force
first we check Every pair and the time complexity is O(n*n) which is not acceptable at faang

HashMap
So we store numbers into index and check if target - current exist so the time complexity is O(n) and space complexity is o(n) 
'''

def twoSum(nums , target):
    mp = {}

    for i , num in enumerate(nums):
        complement = target - num
        
        if complement in mp:
            return [mp[complement],i]
        
        mp[num] = i

print(twoSum([2,4,6,8],10))