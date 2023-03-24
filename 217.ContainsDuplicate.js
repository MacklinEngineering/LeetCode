/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //prep 
    //for in loop
    //loop over each element in the array
    //store in variable
    //loop over second element and beyond -
    //store in var2
    //check if var1=var2
    //if so return true,
    //if not return false

// for (i in nums){

    // }

    //OR: 
    //Turn it into a set, see if the length of the set and length of nums are equal.
    
    const set = new Set(nums)
    if (set.size === nums.length){
        return false
    }else{
        return true
    }
};
