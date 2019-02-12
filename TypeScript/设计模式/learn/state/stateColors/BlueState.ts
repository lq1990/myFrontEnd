import { State } from './State';
import { GreenState } from './GreenState';
import { RedState } from './RedState';
import { EnumState } from './EnumState';

export class BlueState extends State {
  handlepush(c: import('./Context').Context) {
    console.log("blue 2 green");
    c.setState(new GreenState());
  }
  handlepull(c: import('./Context').Context) {
    console.log("blue 2 red");
    c.setState(new RedState());
  }
  getcolor() {
    return EnumState.blue;
  }
}
