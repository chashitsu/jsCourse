class Person {
    #possibleStates = ["active", "inactive"];
    constructor(state = "active", uid = "0-0") {
        this.setState(state);
        this.uid = uid;
        Person.countOfPeople++;
    }

    getState() {
        return this.state;
    }

    setState(newValue) {
        if (this.#possibleStates.indexOf(newValue) < 0) {
            throw new Error("Only 'active' or 'inactive' are possible states.");
        }
        this.state = newValue;
    }

    getUid() {
        return this.uid;
    }

    static getCountOfPersons() {
        return Person.countOfPeople;
    }
}

Person.countOfPeople = 0;

module.exports = Person;