class Car{
    constructor(name , year ){
        this.name = name;
        this.year = year;
    }
    drive(){
        console.log(`You are driving the ${this.name}`);
    }
}

const car1 = new Car("Maruti" , 1990);
const car2 = new Car("Suzuki" , 2002);

const cars = [car1 , car2];

console.log(cars[0].name);


function raceStart(car){
    for(const car of cars){
        console.log(car.drive());
    }
}
raceStart(cars);