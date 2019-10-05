/**
 * TypeScript allows to define visibility of class attributes and methods using
 *    private           - accessed form the class itself
 *    protected         - accessed from the class itself and any class which extended by the class
 *    public (default)  - accessed from outside the class and any other class which extended by the class
 * modifiers.
 *
 * There is also a modifier called
 *    readonly          - restricts any changes to the property of the class
 * readonly assignable only at the moment of creation property or in the constructor;
 */

class Person {
  // private firstName: string;
  // private lastName: string;
  // readonly title: string = 'Dr.';
  readonly title: string;

  // constructor(public firstName: string, public lastName: string){}
  constructor(private firstName: string, private lastName: string) {
    this.title = "Dr.";
  }

  greet(): void {
    console.log("Hey there!");
  }

  getFirstName(): string {
    return this.firstName;
  }
  setFirstName(name: string): void {
    this.firstName = name;
  }

  getLastName(): string {
    return this.lastName;
  }
  setLastName(name: string): void {
    this.lastName = name;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Programmer extends Person {
  greet(): void {
    console.log("Hello, World!");
  }

  greetAsPerson(): void {
    super.greet();
  }
}

let programmer: Person = new Programmer("Maksim", "Shubat");
programmer.greet();
// programmer.firstName; // Not accessible from outside of the class
