/* Uuee - inherits from Person
- constructor accepts three parameters: owner, state, uid
- check that owner is instance of Human otherwise, it throws an exception
- methods:
  - sayHello(caller) - if the caller is the owner: return "Hello {ownerName}." otherwise return "No!" */


  class UuEE {
    
    constructor(owner, state, uid){
        // todo   check that owner is instance of Human otherwise, it throws an exception
        
        super(state, uid);
        this.owner = owner;
        
      }
  
      sayHello(){
          // todo - jak poznat ownera?
        if(false){ return `Hello ${this.owner}`; }
        return `No!`;
      }
    
}

module.exports = UuEE;