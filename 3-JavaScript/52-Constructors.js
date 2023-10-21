
//we create the constructor directly without any name constraints that use the name constructor directly

class Student{

    constructor(name , age , gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Anurag" , 21 , 8);
student1.study();