function addOne(value: number) {
    return value + 1;
}

const addition = addOne(4);
console.log(addition);


const sum = (num1: number, num2: number) => num1 + num2;
const answer = sum(4, 6);
console.log(answer);

const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

const result = multiply(2, 10);
console.log(result);



// ----------------  Void Return Type -----------------------
function greet(personName: string = "Anonymous"): void {
    console.log(`Hello ${personName}`);
}
greet();


// ---------------- Use Cases of Never Return Type -----------------------
function throwError(msg: string): never {
    throw new Error(msg);
}


function infiniteLoop(): never {
    while (true) {
        // More code here
    }
}


let value: never;
function neverReturns(): never {
    while (true) { }
}

value = neverReturns();