let userInput: unknown;

userInput = 5;
userInput = "Akash";
userInput = 132;

let storedName: string;

if (typeof userInput === "string") {
storedName = userInput;
console.log(storedName.toUpperCase());
}

function gernerateError(message: string, code: number): never {
    throw {message, code};
}

const result = gernerateError("This is error", 404);
console.log(result); // will never be printed, hence the method 'never' returns