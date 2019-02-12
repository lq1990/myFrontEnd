import { State } from './State';
import { EnumState } from './EnumState';
import { RedState } from './RedState';
import { GreenState } from './GreenState';

export class BlackState extends State {
  handlepush(c: import('./Context').Context) {
    console.log("black 2 red");
    c.setState(new RedState());
  }
  handlepull(c: import('./Context').Context) {
    console.log("black 2 green");
    c.setState(new GreenState());
  }
  getcolor() {
    return EnumState.black;
  }
}
