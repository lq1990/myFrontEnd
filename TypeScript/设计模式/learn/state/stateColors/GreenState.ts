import { State } from './State';
import { EnumState } from './EnumState';
import { BlackState } from './BlackState';
import { BlueState } from './BlueState';

export class GreenState extends State {
  handlepush(c: import('./Context').Context) {
    console.log("green 2 black");
    c.setState(new BlackState());
  }
  handlepull(c: import('./Context').Context) {
    console.log("green 2 blue");
    c.setState(new BlueState());
  }
  getcolor() {
    return EnumState.green;
  }
}
