//static keyword belongs to class not the objects properties : useful for caches fixed configuration
//methods useful for utility functions
//to invoke use the class name instead of method name
class Car{
    static numberOfCars = 0;
    
    constructor(model){
        this.model = model;
        Car.numberOfCars +=1;
    }


}

const car1 = new Car("Mustang");
const car2 = new Car("corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);