const warehouse = require("./warehouse");

class Factory {
    
    constructor(power = 10){
        this.power = power;
        this.warehouse = new warehouse();
    }


    produceCar(color="red", wheels=4,engine=false)
    {        
        if(this.power < 2){
            // todo - boost
            console.log("No power no fun.");
            return null;
        }
        
        this.power -= 2;
        
        
        let newCar = {
            id: this.warehouse.getNextId(), //auto incremented value which should be stored in warehouse
            color: color, //from param
            wheels: wheels, //from param
            engine: engine, //from param
        }
        
      
        this.warehouse.parkCar(newCar); // park car

        return newCar; 
    }

    changeCarColor(car, newColor)
    {
        
      /*    
        if(!newColor)
        {
            // no color defined
            return null;
        } 
        */


        if(this.power < 1){
            // todo - boost
            return null;

        }
        
        this.power--;
        

        car.color = car.color === 'red' ? 'blue' : 'red';
        return car;
    }

    addEnergyPower(power){
        this.power += power;
    }
}

module.exports = Factory;


