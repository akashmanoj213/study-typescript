"use strict";
function addNumbers(input1, input2) {
    return input1 + input2;
}
function printResult(res) {
    console.log("Result is : ", res);
}
function addAndHandle(input1, input2, cb) {
    const result = input1 + input2;
    cb(result);
}
addAndHandle(12, 12, printResult);
let pointer;
pointer = addNumbers;
console.log(pointer(2, 3));
