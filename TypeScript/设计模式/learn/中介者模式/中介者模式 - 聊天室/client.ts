import { User } from './User';
/**
 * 中介者模式
 */
let robert = new User("Robert");
let john = new User("John");

robert.sendMsg("Hi! John!");
john.sendMsg("hi, robert");
