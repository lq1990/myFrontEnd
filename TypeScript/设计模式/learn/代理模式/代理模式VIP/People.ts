import { IBuycar } from './IBuycar';

export class People implements IBuycar {
    private cash: number;
    private vip: string;
    private username: string;

    
    buycar() {
        console.log(this.username + "是VIP客户，可以直接购车！");
    }

    getCash():number{
        return this.cash;
    }
    setCash(cash: number) {
        this.cash = cash;
    }

    getUsername():string {
        return this.username;
    }
    setUsername(name: string){
        this.username = name;
    }

    getVip(){
        return this.vip;
    }
    setVip(vip: string) {
        this.vip = vip;
    }
}