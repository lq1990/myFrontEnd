"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var CriteriaMale_1 = require("./CriteriaMale");
var CriteriaFemale_1 = require("./CriteriaFemale");
var CriteriaSingle_1 = require("./CriteriaSingle");
var AndCriteria_1 = require("./AndCriteria");
var OrCriteria_1 = require("./OrCriteria");
/**
 * 过滤器模式。
 * 使用不同的标准来过滤一组对象，
 * 通过逻辑运算以解耦的方式把它们连接起来。
 */
var persons = [];
persons.push(new Person_1.Person("Robert", "male", "single"));
persons.push(new Person_1.Person("John", "male", "married"));
persons.push(new Person_1.Person("Laura", "female", "married"));
persons.push(new Person_1.Person("Diana", "female", "single"));
persons.push(new Person_1.Person("Mike", "male", "single"));
persons.push(new Person_1.Person("Bobby", "male", "single"));
var male = new CriteriaMale_1.CriteriaMale();
var female = new CriteriaFemale_1.CriteriaFeMale();
var single = new CriteriaSingle_1.CriteralSingle();
var singleMale = new AndCriteria_1.AndCriteria(single, male);
var maleFemale = new AndCriteria_1.AndCriteria(female, male);
var singleOrFemale = new OrCriteria_1.OrCriteria(single, female);
console.log("male: \n", male.meetCriteria(persons));
console.log("female: \n", female.meetCriteria(persons));
console.log("single: \n", single.meetCriteria(persons));
console.log("singleMale: \n", singleMale.meetCriteria(persons));
console.log("maleFemale: \n", maleFemale.meetCriteria(persons)); // nothing
console.log("singleOrFemale: \n ", singleOrFemale.meetCriteria(persons));
