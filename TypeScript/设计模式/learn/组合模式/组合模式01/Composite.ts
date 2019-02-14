import { Component } from './Component';
export class Composite extends Component {
  list: Component[] = [];

  add(c: Component): void {
    this.list.push(c);
  }
  remove(c: Component): void {
    let idx = this.list.indexOf(c);
    this.list.splice(idx, 1);
  }
  eachChild() {
    console.log(this.name+"执行了");
    for(let c of this.list) {
        c.eachChild();
    }
  }
}
