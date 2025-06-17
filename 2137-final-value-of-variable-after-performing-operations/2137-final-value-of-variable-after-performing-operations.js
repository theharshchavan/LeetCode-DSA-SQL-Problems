/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0
    for(let i = 0; i<operations.length; i++){
        if(operations[i] === '--X')
            --value
        else if(operations[i] === 'X--')
            value--
        else if(operations[i] === 'X++')
            value++
        else if(operations[i] === '++X')
            ++value
    }
    return value
};