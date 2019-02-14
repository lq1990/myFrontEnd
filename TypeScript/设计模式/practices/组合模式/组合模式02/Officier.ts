import { ACount } from './ACount';

export class Offcier extends ACount {
  private list: ACount[] = [];
  private name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  add(c: ACount): void {
      console.log(c);
    this.list.push(c);
  }
  remove(c: ACount): void {
    let idx = this.list.indexOf(c);
    this.list.splice(idx, 1);
  }
  count(): void {
      console.log(this.list);
    console.log(this.name + ' 军官报数');

    for (let c of this.list) {
        // 若c是 军官，此军官会被遍历
        // 若c是 小兵，直接报数。
        console.log("c是：")
        console.log(c);
        console.log("\n")
      c.count(); // Officier.count(), Soldier.count()
    }
  }
}
