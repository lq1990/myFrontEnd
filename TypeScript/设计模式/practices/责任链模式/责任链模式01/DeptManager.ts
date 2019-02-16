import { AHandler } from './AHandler';

export class DeptManager extends AHandler {
  handleRequest(user: string, fee: number):string {
      let str:string="";
    console.log('部门经理来处理');
    if (fee <= 1000) {
      // console.log('fee<=1000');
      if (user == 'anna') {
        // console.log('user==anna');
        str = '部门经理同意' + user + '的' + fee + '元申请';
        // console.log(str);
      } else {
        str = '部门经理拒绝' + user + '的' + fee + '元申请';
      }
    } else {
      if (this.getSuccessor() != null)
        return this.getSuccessor().handleRequest(user, fee);
    }
    return str;
  }
}
