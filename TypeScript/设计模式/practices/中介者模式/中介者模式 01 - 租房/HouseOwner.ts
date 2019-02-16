import { APerson } from './APerson';
export class HouseOwner extends APerson {

  getMsg(msg: string) {
    console.log("我是房主："+this.name+"， 收到信息："+msg);
  }
}
