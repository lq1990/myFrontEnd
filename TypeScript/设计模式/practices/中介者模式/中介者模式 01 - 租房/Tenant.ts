import { APerson } from './APerson';
export class Tenant extends APerson {
//   sendMsg(msg: string) {
//     this.mediator.contact(msg,this);
//   }
  getMsg(msg: string) {
    console.log("我是租房客："+this.name+"， 收到信息："+msg);
  }
}
