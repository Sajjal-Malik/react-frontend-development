const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof nums);
console.log(Array.isArray(nums));

const characters: string[] = ["Goku", "Vegeta", "Broly"];
console.log(characters);
console.log(typeof characters);
console.log(Array.isArray(characters));


const products: string[] = [];
// products.push(10);  // This is wrong
// products.push(true);  // This is wrong
products.push("Iphone");
products.push("Macbook");
products.push("Apple TV");
products.push("Apple Watch");


const strItems: Array<string> = ["Mobile", "Laptop", "Watch"];
console.log(strItems);

const numericItems: Array<number> = [1122, 911, 100];
console.log(numericItems);