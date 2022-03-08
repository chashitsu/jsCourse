/*
  abstract class Person
  - constructor accepts two parameters: state (active or inactive) and uid
  - both parameters should have default values - active and 0-0
  - methods:
    - getState() - return state
    - setState(newValue) - sets the state to a new value
      - check that passed value is "active" or "inactive" otherwise, it throws an exception
    - getUid() - return uid
    - static getCountOfPersons() - return total count of created persons

*/ 

/* TODO - jak vyrobit abstraktni tridu? klicove slovo abstract jde podle IDE pouzit jen v TypeScriptu*/ 

module.exports = class Person {
    
    static stateActive = 'active';
    static stateInactive = 'inactive';
    
    static counter = 0;

    constructor(state = Person.stateActive, uid='0-0'){
        this.state = state;
        this.uid = uid;
        Person.counter++;
    }   

    getState(){
        return this.state;
    }

    setState(stateNewValue){
        if(stateNewValue !== Person.stateActive && stateNewValue !== Person.stateInactive)
        {
            throw `State parameter allowed values are "${Person.stateActive}" and "${Person.stateInactive}"`;
        }
        this.state = stateNewValue;
    }

    getUid(){
        return this.uid;
    }

    static getCountOfPersons() {
        return Person.counter;
    }
    
}
