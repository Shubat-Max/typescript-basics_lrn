/**
 * Edit    package.json    file before
 *
 *   ...
 *   "main": "14_lodash.ts",
 *   "scripts": {
 *     ...
 *     "start": "tsc 14_lodash.ts && node 14_lodash.js",
 *     ...
 *   }
 *   ...
 */

import * as _ from "lodash"; // `npm install @types/lodash` in case of TypeScript

export {};

let initArr: number[] = [1, 2, 3, 4, 5];
_.reverse(initArr);
