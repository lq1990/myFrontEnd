import { Component } from './Component';

export class Leaf extends Component {
  protected add(c: Component): void {
  }
  protected remove(c: Component): void {
  }
  eachChild() {
    console.log(this.name+"执行了");
  }
}
