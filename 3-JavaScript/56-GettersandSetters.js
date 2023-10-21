//get= binds an object property to a function when that property is accessed
//again corresponds to protecting the data so that its only readable not writable thus it can be used as we want
class Car{
    constructor(power){
        this._gas= 25;
        this._power= power;//protected shouldnt mess with it
    }
    get power(){
        return `${this._power} hp`; 
    }
    get gas(){
        return `Your tank has ${this._gas} L Fuel`;
    }
    set gas(value){
        this._gas = value;
        if(value > 50){
            this._gas = 50;
        }
        else if (value<0){
            this._gas = 0;
        }
    }
}

let car = new Car(400);

car.gas = -450;//directly uses set method 
car.power = 1000;
console.log(car.power);
console.log(car.gas);//basically here we have direct access to getter method we dont need to invoke it to get it 
//also as we can see when something is protect we use _ this sign this means dont mess with it 
//basically underscore symbolically represent a protected method
