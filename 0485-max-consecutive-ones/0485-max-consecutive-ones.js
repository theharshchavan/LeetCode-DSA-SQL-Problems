/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res=0, cur=0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 1){
            cur++
        }else{
            cur = 0
        }
        res = Math.max(res, cur)
    }
    return res
};