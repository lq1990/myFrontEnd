import { APerson } from './APerson';
import { AMediator } from './AMediator';

export class Tenant extends APerson {
  constructor(name: string, m: AMediator) {
    super();
    this.name = name;
    this.mediator = m;
  }

  sendMsg(msg: string) {
    this.mediator.getPsMsg(msg, this);
  }
  getMsg(msg: string) {
    console.log('我是租房客' + this.name + '，我得到消息：' + msg);
  }
}
