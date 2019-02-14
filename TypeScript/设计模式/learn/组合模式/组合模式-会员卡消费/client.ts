import { Branch } from './Branch';
import { Join } from './Join';
/**
 * 组合模式
 */
let root = new Branch("总店");

let b1 = new Branch("分店1");
let b2 = new Branch("分店2");

let j1 = new Join("加盟店1.1");
let j2 = new Join("加盟店1.2");

b1.add(j1);
b1.add(j2);

root.add(b1);
root.add(b2);

root.payByCard();
// b1.payByCard();
