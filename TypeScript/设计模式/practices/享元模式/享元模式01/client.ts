import { Flyweight } from './Flyweight';
/**
 * 享元模式：
 * 使用对象共享的做法来降低系统中对象的个数。
 */
let fw = new Flyweight();

let font1 = fw.getOneFontFromPool("a");
font1.getFontInfo();
let font2 = fw.getOneFontFromPool("b");
font2.getFontInfo();
let font3 = fw.getOneFontFromPool("a");
font3.getFontInfo();
let font4 = fw.getOneFontFromPool("a");
font4.getFontInfo();

console.log(fw.getPoolInfo());