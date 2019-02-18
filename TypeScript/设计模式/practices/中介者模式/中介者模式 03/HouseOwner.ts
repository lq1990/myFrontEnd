import { APerson } from './APerson';
import { AMediator } from './AMediator';

export class HouseOwner extends APerson {
  constructor(name: string, m: AMediator) {
    super();
    this.name = name;
    this.mediator = m;
  }

  /**
   * 房主发送消息，意味着 中介拿到消息。
   * @param msg 
   */
  sendMsg(msg: string) {
    this.mediator.getPsMsg(msg, this);
  }
  getMsg(msg: string) {
    console.log('我是房东' + this.name + '，我得到消息：' + msg);
  }
}
