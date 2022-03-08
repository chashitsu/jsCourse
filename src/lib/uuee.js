/* Uuee - inherits from Person
- constructor accepts three parameters: owner, state, uid
- check that owner is instance of Human otherwise, it throws an exception
- methods:
  - sayHello(caller) - if the caller is the owner: return "Hello {ownerName}." otherwise return "No!" */

  const Person = require("./person");
  
  module.exports = class UuEE extends Person {
    
    constructor(owner, state, uid){   
      
        if(owner.constructor.name !== 'Human')
        {           
          throw 'Owner parameter must type of Human!';
        }
        super(state, uid);
        this.owner = owner;        
      }
  
      sayHello(caller){
          // TODO - sayHello(caller) - if the caller is the owner: return "Hello {ownerName}." otherwise return "No!" */
        if(caller === this.owner){ 
          return `Hello ${this.owner.name}.`; } 
        else{
          return `No!`;
        }
        
      }
    
}
