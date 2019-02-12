import { Context } from './Context';
import { RedState } from './RedState';

let ctx = new Context();
ctx.setState(new RedState());
ctx.sx().sx().nx();