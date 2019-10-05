/**
 * TypeScript compiler arguments -> [tsc]
 *
 * * --outFile output-script.js
 *
 * 	Concatenate and emit output to single file. The order of concatenation is determined by the list
 * 	of files passed to the compiler on the command line along with triple-slash references and imports.
 * 	See output file order documentation for more details.
 *
 *
 *
 * * --watch
 * * -w
 *
 * 	Run the compiler in watch mode. Watch input files and trigger recompilation on changes.
 * 	The implementation of watching files and directories can be configured using environment variable.
 * 	See configuring watch for more details.
 *
 *
 *
 * * --help
 * * -h
 *
 *  Print help message.
 */

export {};

class Person {
  firstName: string | undefined;
  lastName: string | undefined;
}
let foo = new Person();
