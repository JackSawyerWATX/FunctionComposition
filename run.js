var compose = function(functions) {
    return function(x) {
        for (var index = functions.length - 1; index >= 0; index--) {
            x = functions[index](x);
        }
        return x;
    }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(12));
