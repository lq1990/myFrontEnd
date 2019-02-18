import { FlyweightFac } from './FlyweightFac';
import { AFlyweight } from './AFlyweight';
/**
 * 享元模式
 * 
 */
let fac = new FlyweightFac();
let fly1: AFlyweight;
let fly2: AFlyweight;
let fly3: AFlyweight;
let fly4: AFlyweight;
let fly5: AFlyweight;
let fly6: AFlyweight;

fly1 = fac.getFlyweight("google");
fly2 = fac.getFlyweight("qutr");
fly3 = fac.getFlyweight("baidu");
fly4 = fac.getFlyweight("google");
fly5 = fac.getFlyweight("google");
fly6 = fac.getFlyweight("google");

fly1.operation();
fly2.operation();
fly3.operation();
fly4.operation();
fly5.operation();
fly6.operation();

let objInfo = fac.getFlyweightInfo();
console.log(objInfo);