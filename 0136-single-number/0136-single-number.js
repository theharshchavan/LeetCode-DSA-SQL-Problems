/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let val = 0

    for(let i = 0; i<nums.length; i++){
        val ^= nums[i]
    }
    return val
};