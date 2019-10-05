/**
 * ! tsc 04_classes.ts && node 04_classes.js
 *
 *
 */

class Person {
  // If field is assigned only in the constructor and can be made readonly
  private firstName: string;
  private lastName: string;

  /**
   * Class constructor
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Class methods, getters n setters
   */
  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  public setFirstName(fn: string): void {
    this.firstName = fn;
  }

  public setLastName(ln: string): void {
    this.lastName = ln;
  }
}

let aPerson: Person = new Person("Maksim", "Shubat");
console.log(aPerson.getFullName());

aPerson.setFirstName("Max");
aPerson.setLastName("");
console.log(aPerson.getFullName());
