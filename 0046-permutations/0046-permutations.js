/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    
    function backtrack(path, used) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            path.push(nums[i]);
            used[i] = true;

            backtrack(path, used);

            path.pop();      // backtrack
            used[i] = false; // backtrack
        }
    }
    
    backtrack([], Array(nums.length).fill(false));
    return res;
};