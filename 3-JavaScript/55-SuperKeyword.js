//super keyword refers to Parent Class
//commonly used to invoke constructor of parent class
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name , age , runSpeed){
        super(name , age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name , age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age , flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
const rabbit = new Rabbit("rabbit" , 1 , 40);
const fish = new Fish("nemo", 2 ,80);
const hawk = new Hawk("Jatayu" , 5 , 120);
 
console.log(rabbit.name);
console.log(fish.name);
console.log(hawk.flySpeed);
