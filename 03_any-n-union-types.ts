/**
 * TypeScript has a possibility to disable all the type checking by using type <<any>>
 *     this might provide your script with some flexibility when needed
 */

export {};

let a: any;

a = 10;
a = true;
a = "any string";

/**
 * TypeScript also has possibility to make type checking for more then 1 type using pipe symbol << | >>
 */

let b: number | string;
b = 10;
// b = false; // => <<TS2322: Type 'false' is not assignable to type 'string | number'. Alt+Shift+Enter Alt+Enter>>
b = "any string";
