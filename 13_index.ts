/**
 * Edit    package.json    file before
 *
 *   ...
 *   "main": "13_index.ts",
 *   "scripts": {
 *     ...
 *     "start": "tsc 13_index.ts && node 13_index.js",
 *     ...
 *   }
 *   ...
 */

import { Person } from "./10_modules-class";

export {};

let foo = new Person("Maksim", "Shubat");
console.log(foo.getFullName());
