/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;  // Start with the initial value
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);  // Apply reducer function
    }
    return val;  // Return the final value
};