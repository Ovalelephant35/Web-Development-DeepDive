//inheritance = a child class can inherit all the methods and properties from another class
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`This ${this.name} is Running`);
    }
}

class Fish extends Animal{
    name = "Rabbit";
    swim(){
        console.log(`This ${this.name} is Swimming`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is Flying`);
    }
}

const rabbit = new Rabbit();
const fish= new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
fish.swim();