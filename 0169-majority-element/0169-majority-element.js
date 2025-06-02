/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = {};
    let n = nums.length;
    for(let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
        if(countMap[num] > Math.floor(n/2)) {
            return num;
        }
    }
};