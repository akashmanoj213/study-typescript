"use strict";
let userInput;
userInput = 5;
userInput = "Akash";
userInput = 132;
let storedName;
if (typeof userInput === "string") {
    storedName = userInput;
    console.log(storedName.toUpperCase());
}
function gernerateError(message, code) {
    throw { message, code };
}
const result = gernerateError("This is error", 404);
console.log(result); // will never be printed, hence the method 'never' returns
//# sourceMappingURL=ts-only-types.js.map