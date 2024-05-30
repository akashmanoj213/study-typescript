"use strict";
function combine(input1, input2, returnType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || returnType === "as-num") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
let numResult = combine(23, 20, "as-num");
console.log(numResult);
let comResult = combine("23", "20", "as-num");
console.log(comResult);
let stringResult = combine('Akash', 'Manoj', "as-str");
console.log(stringResult);
//# sourceMappingURL=union-aliases.js.map