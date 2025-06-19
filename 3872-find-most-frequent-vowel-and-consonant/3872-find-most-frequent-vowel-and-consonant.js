/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
      const freq = new Array(26).fill(0);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Count frequencies
    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    // Find max vowel and consonant frequencies
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 'a'.charCodeAt(0));
        const count = freq[i];
        if (count > 0) {
            if (vowels.has(char)) {
                maxVowel = Math.max(maxVowel, count);
            } else {
                maxConsonant = Math.max(maxConsonant, count);
            }
        }
    }

    return maxVowel + maxConsonant;
};