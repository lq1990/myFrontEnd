import { IBuycar } from './IBuycar';
import { People } from './People';

export class Proxy implements IBuycar {
    private people: People;

    getPeople(): People {
        return this.people;
    }
    setPeople(p: People){
        this.people = p;
        return this;
    }
    
    buycar() {
        if(this.people.getVip()=="vip"){
            this.people.buycar();
            return;
        }
        if(this.people.getCash()>=50000){
            console.log(this.people.getUsername()+"买了新车，交易结束！");
        } else {
            console.log(this.people.getUsername()+"的钱不够，不能买车！");
        }
    }

}