function addNumbers(input1: number, input2: number) {
    return input1 + input2;
}

//print resutl
function printResult(res: number) {
    console.log("Result is : ", res);
}

function addAndHandle(input1: number, input2: number, cb: (res: number) => void) {
    const result = input1 + input2;
    cb(result);
}

addAndHandle(12, 12, printResult);

let pointer: (a: number, b: number) => number;

pointer = addNumbers;

console.log(pointer(2,3));