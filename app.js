var userInput;
userInput = 5;
userInput = "Akash";
userInput = 132;
var storedName;
if (typeof userInput === "string") {
    storedName = userInput;
    console.log(storedName.toUpperCase());
}
function gernerateError(message, code) {
    throw { message: message, code: code };
}
var result = gernerateError("This is error", 404);
console.log(result); // will never be printed, hence the method 'never' returns
