"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var CriteriaMale_1 = require("./CriteriaMale");
var CriteriaFemale_1 = require("./CriteriaFemale");
var CriteriaSingle_1 = require("./CriteriaSingle");
var CriteriaAnd_1 = require("./CriteriaAnd");
var CriteriaOr_1 = require("./CriteriaOr");
/**
 * 过滤器模式。
 * 使用不同的标准来过滤一组对象。
 * 通过逻辑运算，以解耦的方式把它们连接起来。
 */
var ps = [];
ps.push(new Person_1.Person("anna", "female", "married"));
ps.push(new Person_1.Person("beta", "male", "single"));
ps.push(new Person_1.Person("delta", "male", "married"));
ps.push(new Person_1.Person("cello", "male", "married"));
ps.push(new Person_1.Person("gamma", "female", "single"));
ps.push(new Person_1.Person("ela", "female", "single"));
// console.log("ps: \n",ps);
var male = new CriteriaMale_1.CriteriaMale();
console.log("male: \n", male.meetCriteria(ps));
var female = new CriteriaFemale_1.CriteriaFemale();
console.log("female: \n", female.meetCriteria(ps));
var single = new CriteriaSingle_1.CriteriaSingle();
console.log("single: \n", single.meetCriteria(ps));
var maleSingle = new CriteriaAnd_1.CriteriaAnd(male, single);
console.log("maleSingle: \n", maleSingle.meetCriteria(ps));
var maleOrSingle = new CriteriaOr_1.CriteriaOr(male, single);
console.log("maleOrSingle: \n", maleOrSingle.meetCriteria(ps));
