/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    function signFunc(nums) {
        let product = 1;

        for (let num of nums) {
            product *= num;
        }

        if (product > 0) return 1;
        if (product < 0) return -1;
        return 0;
    }
    return signFunc(nums)
};