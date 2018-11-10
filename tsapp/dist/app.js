var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Student;
}());
var greeter = function (target) {
    console.log('Hello,', target.firstName, target.lastName);
};
var me = new Student("qiang", "liu");
greeter(me);
