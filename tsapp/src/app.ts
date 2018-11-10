// interface
interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var greeter = function (target: Person) {
    console.log(
        'Hello,', target.firstName, target.lastName);

}

let me = new Student("qiang","liu");

greeter(me);
