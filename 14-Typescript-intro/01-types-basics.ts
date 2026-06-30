// Basics of Typescript

let myName: string = "Malik";
// myName = 45;  // This will not work
console.log(myName);


let favNumber: number = 7;
// favNumber = "Bhatti";  // This will not work
console.log(favNumber);

let isHard: boolean = false;
// isHard = "True";  // This will not work
console.log(isHard);



let language = "Typescript";
console.log(language);
console.log(typeof language);

// This will work in Javascript but NOT in Typescript
language = "Python";
console.log(language);


let object: any = [
    { id: 1, "user 1": "User One" },
    { id: 2, "user 2": "User Two" }
];

// Changing values due to :any type
object = { id: 3, "user 3": "User Three" };
object = "User Four";
object = 24;

// This will return in output based on given code
object = true;

console.log(object);