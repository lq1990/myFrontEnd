import { State } from './State';
import { EnumState } from './EnumState';
import { BlueState } from './BlueState';
import { BlackState } from './BlackState';

export class RedState extends State {
  handlepush(c: import('./Context').Context) {
    console.log("red 2 blue");
    c.setState(new BlueState());
  }
  handlepull(c: import('./Context').Context) {
    console.log("red 2 black");
    c.setState(new BlackState());
  }
  getcolor() {
    return EnumState.red;
  }
}
