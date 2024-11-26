//module pattern
function createPerson() {
  //property
  const name = "John Smith";
  const age = 30;

  //method
  const greet = function () {
    console.log("Hello");
  };
  const getName = function () {
    return name;
  };

  return {
    age,
    greet,
    getName,
  };
}

const person = createPerson();
console.log(person.getName());

//"use strict"
//this
class People {
  constructor() {
    this.name = "john";
  }
  greet() {
    console.log("Hello", this.name);
  }
}
const people = new People();
people.greet();
