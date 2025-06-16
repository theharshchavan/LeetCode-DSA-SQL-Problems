/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let newArr = []
    for(let i = 0; i<words.length; i++){
        if(words[i].includes(x)){
            newArr.push(i)
        }
    }
    return newArr
};