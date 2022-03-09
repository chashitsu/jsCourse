const Person = require("./person");
const Human = require("./human");

class Uuee extends Person {
    constructor(owner, state, uid) {
        super(state, uid);
        let test = typeof (owner);
        if (!(owner instanceof Human)) {
            throw new Error("Owner has to be human!");
        }
        this.owner = owner;
    }

    sayHello(caller) {
        if (caller === this.owner) {
            return `Hello ${this.owner.getName()}.`;
        }

        return "No!";
    }
}

module.exports = Uuee;