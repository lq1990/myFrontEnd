import { Offcier } from './Officier';
import { Soldier } from './Soldier';
/**
 * 组合模式：
 * 
 * 阅兵仪式，
 * 有干部、小兵。
 * 干部可以带领干部、小兵，
 * 小兵不能带领。
 */
let leader = new Offcier("总领导");

let o1 = new Offcier("军官1");
let o2 = new Offcier("军官2");
leader.add(o1);
leader.add(o2);

let s1 = new Soldier("小兵1.1");
let s2 = new Soldier("小兵1.2");
o1.add(s1);
o1.add(s2);

leader.count();