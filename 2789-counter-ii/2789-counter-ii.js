/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let setValue = init;
    var increment = ()=>{
        return ++setValue;
    }

    var decrement = ()=>{
        return --setValue;
    }

    var reset = ()=>{
        return setValue = init;
    }

    return {increment, decrement, reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */