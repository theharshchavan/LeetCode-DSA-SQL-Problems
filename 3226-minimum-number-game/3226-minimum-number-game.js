/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
      let arr = [];

    while (nums.length > 0) {
        nums.sort((a, b) => a - b);         // Sort nums to find the smallest two
        let alice = nums.shift();           // Alice removes the smallest
        let bob = nums.shift();             // Bob removes the next smallest
        arr.push(bob);                      // Bob appends his number first
        arr.push(alice);                    // Then Alice appends hers
    }

    return arr;
};