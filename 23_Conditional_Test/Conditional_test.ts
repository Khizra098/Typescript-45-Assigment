import { toASCII } from "punycode";

// creating car variable
let car :string = 'subaru' ;

// Test No 1
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru')

// Test no 2
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru')

// Test no 3
console.log("Is car != 'Honda'? I predict true.");
console.log(car != 'Honda')

// Test no 4
console.log("Is car !== 'Ford'? I predict true.");
console.log(car !== 'Ford')

// Test no 5
console.log("Is car.Upper case == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU')

// Test no 6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU')

// Test no 7
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU')

// Test no 8
console.log("Is car === 'Train'? I predict False.");
console.log(car === 'Train')

// Test no 9
console.log("Is car === 'Bus'? I predict False.");
console.log(car === 'Bus')

// Test no 10
console.log("Is car === 'Cycle'? I predict False.");
console.log(car === 'Cycle')