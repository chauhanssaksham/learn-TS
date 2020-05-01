export {}
let message = 'Hello World';
console.log(message);
const y = 20;

let isBool: boolean = true;
isBool = false;

interface Person{
    firstName: string,
    lastName?: string
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p: Person = {
    firstName: 'Saksham',
    lastName: 'chauhan'
}

fullName(p);

class Employee {
    protected employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
};

let emp = new Employee('Saksham');
// console.log(emp.employeeName);
emp.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manger ${this.employeeName} delegating tasks`);
    }
};

let man1 = new Manager('Chauhan');
man1.delegateWork();
man1.greet();



