/**
 * tsc 05_inheritance-n-polymorphism.ts && node 05_inheritance-n-polymorphism.js
 *
 * JS allows to create and implementation of inheritance and polymorphism
 */


// Class Person that contains few attributes and methods
class Person {
  firstName: string = '';
  lastName: string = '';
  wake(): void {
    console.log("Waking up...");
  }
  greet(): void {
    console.log("Hey there!");
  }
}

// Class Programmer that is extended by class Programmer and all his attributes and methods
//    but overwriting method greet()
class Programmer extends Person {
  greet(): void {
    console.log("Hello, World!");
  }

  greetLikeAPerson():void {
    super.greet();
  }
}

let coder: Programmer = new Programmer();
coder.wake();
coder.greet();
coder.greetLikeAPerson();


// Polymorphysm example
// We can only use methods and attributes defined in class Person or overwritten inside class Programmer
let anotherCoder: Person = new Programmer();
anotherCoder.wake();
anotherCoder.greet();
// anotherCoder.greetLikeAPerson(); // <<TS2339: Property 'greetLikeAPerson' does not exist on type 'Person'>>
