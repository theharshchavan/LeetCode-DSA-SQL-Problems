/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels)
    let count = 0
    for(const s of stones){
        if(jewelSet.has(s))
            count++
    }
    return count
};