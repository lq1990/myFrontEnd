import {  AMarket } from './AMarket';
export class Branch extends AMarket {
  list: AMarket[] = [];
  name: string;

  constructor(s: string) {
      super();
      this.name = s;
  }
  
  add(m: AMarket): void {
    this.list.push(m);
  }
  remove(m: AMarket): void {
    let idx = this.list.indexOf(m);
    this.list.splice(idx,1);
  }
  payByCard(): void {
    //   console.log(this.list);
    console.log(this.name+" 消费，积分累计到会员卡了！");
    for(let m of this.list) {
        console.log("m如下：====================")
        console.log(m);
        console.log("m如上=====================\n")

        m.payByCard(); // 递归
        // 对于 Branch而言 会有子元素，遍历每个子元素 调用 pay方法
        // 对于叶节点 join元素，已是终点，直接调用pay方法。
        // 最终会有 递归的效果
    }
  }
}
