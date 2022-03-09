const warehouse = require("./warehouse");

function CarFactory(power = 10) {
    this.power = power;
    this.warehouse = warehouse;
    const newCarCost = 2;
    const colorChangeCost = 1;
    this.produceCar = function (color = "red", wheels = 4, engine = false) {
        if (this.power < newCarCost) {
            return null;
        }

        this.warehouse.createdCars.push({
            id: warehouse.nextIdentifier++,
            color: color,
            wheels: wheels,
            engine: engine,
        })

        this.power -= newCarCost;
    }

    this.addEnergyPower = function (value = 0) {
        this.power += value;
    }

    this.changeCarColor = function (car, newColor = "blue") {
        if (this.power < colorChangeCost) {
            return null;
        }
        car.color = newColor;
        this.power --;
    }

}

module.exports = CarFactory;


