interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

class Foo implements Person {
  firstName: string;
  lastName: string;
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

let person: Person = new Foo();

let someObj = {
  firstName: "John",
  lastName: "Doe",
  foo: 10, // cannot be accessed from Foo class that implements Person interface
  getFullName:() => 'Test'
};

person = someObj;