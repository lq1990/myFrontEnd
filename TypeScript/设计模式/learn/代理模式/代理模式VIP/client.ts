import { People } from './People';
import { Proxy } from './Proxy';

let p1 = new People();
p1.setCash(60000);
p1.setUsername("anna");

let p2 = new People();
p2.setCash(40000);
p2.setUsername("jack");

let p3 = new People();
p3.setVip("vip");
p3.setCash(0);
p3.setUsername("tom");

let proxy = new Proxy();
proxy.setPeople(p1).buycar();

proxy.setPeople(p2).buycar();

proxy.setPeople(p3).buycar();