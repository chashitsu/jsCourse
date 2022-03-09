const Person = require("./person");

class Human extends Person {
    constructor(name, age, state, uid) {
        super(state, uid);
        this.age = age;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    sayHello() {
        return `Hello from: ${this.name}.`;
    }
}

module.exports = Human;