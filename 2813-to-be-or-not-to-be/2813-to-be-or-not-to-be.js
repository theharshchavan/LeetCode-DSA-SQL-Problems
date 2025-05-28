/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var toBe = (val2) => {
        if (val === val2) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    };

    var notToBe = (val2) => {
        if (val !== val2) {
            return true;
        } else {
            throw new Error("Equal");
        }
    };

    return {toBe, notToBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */