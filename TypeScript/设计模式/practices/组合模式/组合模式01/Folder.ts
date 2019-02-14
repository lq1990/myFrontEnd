import { ARead } from './ARead';
export class Folder extends ARead {
  private list: ARead[] = [];
  private name:string;

  constructor(name:string) {
      super();
      this.name = name;
  }

  add(c: ARead): void {
    this.list.push(c);
  }
  remove(c: ARead): void {
    let idx = this.list.indexOf(c);
    this.list.splice(idx, 1);
  }
  read() {
    console.log(this.name+"读文件夹");
    
    for (let c of this.list) {
      c.read();
    }
  }
}
