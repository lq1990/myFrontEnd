import { Flyweight } from './Flyweight';
/**
 * 享元模式
 * 使用对象共享的方式，
 * 核心是创建 对象池
 */
let fw = new Flyweight();

let f1 = fw.getOneFont("a");
let f2 = fw.getOneFont("a");
let f3 = fw.getOneFont("A");
let f4 = fw.getOneFont("a");

console.log(fw.getPoolInfo());

