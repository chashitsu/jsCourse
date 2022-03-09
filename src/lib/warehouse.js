

class warehouse  { 

  constructor(){

    this.createdCars=[];
    this.nextIdentifier = 0; 
  }  

  getNextId(){
    return this.nextIdentifier++;
  }

  parkCar(car){
    this.createdCars.push(car);
  }

   //getNextId: function () { return this.nextIdentifier++; }
};

module.exports = warehouse;

