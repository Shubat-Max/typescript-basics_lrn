/**
 * ! tsc 01_type-declaration.ts && node 01_type-declaration.js
 *
 * Typescript lets you to see an errors you possibly made before actual compilation.
 */



let a: number;                                  // Can only store number values (1, 1.2, 2, ...)
a = 10;
// a = false;                                   // => <<TS2322: Type 'false' is not assignable to type 'number'>>

let b: boolean;                                 // Can only store boolean values (true, false)
b = false;

let c: string;                                  // Can only store string ("any string")
c = 'Cowabunga';

let foo: undefined;                             // Only value this variable can store is 'undefined'
foo = undefined;

let  numArr: number[];                          // Array of numbers
numArr = [1, 2, 3];
numArr.push(1);
// numArr.push('anytext');                          // => <<TS2345: Argument of type '"anytext"' is not assignable to parameter of type 'number'>>
a = numArr.pop();                               // Perfectly works since variable is a number and the element of the array is a number also
// b = numArr.pop();                            // => <<TS2322: Type 'number' is not assignable to type 'boolean'>>


/**            TUPLES            **/
// Contains different types in a single array
let boolArr: [number, boolean, string];
// boolArr = [1];                               // => <<TS2739: Type '[number]' is missing the following properties from type '[number, boolean, string]'>>
boolArr = [1, true, 'string'];
/**            TUPLES            **/


const printText = (text: any):void => console.log(text);


/**
 * define parameters type
 */
const add1 = (a: number, b: number): number => a + b;
// let result: number = add(1, '2');            // => <<TS2345: Argument of type '"2"' is not assignable to parameter of type 'number'>>
// let result: number = add(2);                 // => <<TS2554: Expected 2 arguments, but got 1>>
// let result: number = add(1, 2, 3);           // => <<TS2554: Expected 2 arguments, but got 3>>
let result1: number = add1(1,2);            // => 3
printText(result1);


/**
 * the ? sign means that the parameter is OPTIONAL
 */
const add2 = (a: number, b: number, c?: number): number => a + b + (c ? c : 0);
// let result2: number = add1(1,2);             // => 3
let result2: number = add2(1, 2, 3);    // => 6
printText(result2);


/**
 * default parameter value
 */
const add3 = (a: number, b: number, c: number = 10, d?:number): number => a + b + c + (d ? d : 0);
let result3: number = add3(1, 2, 100, 50);      // => 153
// let result3: number = add3(1, 2, 100);                       // => 103
// let result3: number = add3(1, 2);                            // => 13
printText(result3);
