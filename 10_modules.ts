// We can export classes from other modules for use
import { Person } from "./10_modules-class";

export {};

function echo0(arg: any): any {
  return arg;
}
let myStr0: string = echo0(1); // This will work because TS is allowing this since the return type is <<any>>

/**
 * Generics
 */
function echo<T>(arg: T): T {
  return arg;
}
// let myStr: string = echo(1); // <<TS2322: Type '1' is not assignable to type 'string'>>
let myStr: number = echo(1);

class Admin extends Person {}

class Manager extends Person {}

let admin = new Admin("admin", "admin");
let manager = new Manager("manager", "manager");

// function personEcho<T>(person: T): T {
//   person.firstName;
//   return person;
// }
// let foo = personEcho(admin); // let foo: Admin - don't have an access to Person properties

// function personEcho(person: Person): Person {
//   person.firstName;
//   return person;
// }
// let foo = personEcho(admin); // let foo: Person - have an access to Person properties

function personEcho<T extends Person>(person: T): T {
  // person.firstName;
  return person;
}
let foo = personEcho(admin); // let foo: Admin - have an access to Person properties
let bar = personEcho(manager); // let foo: Manager - have an access to Person properties
