/* 
 Human - inherits from Person
 - constructor accepts four parameters: name, age, state, uid
 - methods:
   - getName() - return name
   - sayHello() - return: "Hello from {humanName}."
 */

  const Person = require("./person");

module.exports = class Human extends Person {    

  constructor(name, age, state, uid) {
      super(state, uid);
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name; // todo - 'name' je nejspis nejake klicove slovo, je treba pouzit jiny nazev promene, nebo pridat podtrzitka k promennym tridy
    }

    sayHello(){
      return `Hello from: ${this.name}.`;
    }
}
