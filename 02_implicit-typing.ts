/**
 * TypeScript can assign types implicitly based on initial value given
 */

export {};

let a = 10;
// a = false; // <<TS2322: Type 'false' is not assignable to type 'number'>>

let b = 10; // <<let b: number>>
let c;
c = 10; // <<let c: any>>

// The variable inherit the type from function's return type
const greet1 = (): string => "Good morning";
let greeting1 = greet1(); // => <<let greeting1: string>>

// Even if the function has an implicit type
const greet2 = () => "Good morning";
let greeting2 = greet2(); // => <<let greeting2: string>>

// BUT
const greet3 = () => "Good morning";
let greeting3;
greeting3 = greet3(); // => <<let greeting: any>>
greeting3 = 10; // This line is ok with typescript since the variable type is <<any>>
