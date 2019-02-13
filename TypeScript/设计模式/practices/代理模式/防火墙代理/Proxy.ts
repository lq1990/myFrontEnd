import { IVisit } from './IVisit';
import { PC } from './PC';

export class Proxy implements IVisit {
    private pc: PC = new PC();

    visit() {
        console.log("防火墙代理先工作！");
        this.pc.visit();
    }
}