import { AMediator } from './AMediator';

export abstract class APerson {
  protected name: string;
  protected mediator: AMediator;

  constructor(name: string, m: AMediator) {
    this.name = name;
    this.mediator = m;
  }

  sendMsg(msg: string) {
    this.mediator.getPsMsg(msg, this); // 中介拿到this人的msg。
  }
  abstract getMsg(msg: string);
}
