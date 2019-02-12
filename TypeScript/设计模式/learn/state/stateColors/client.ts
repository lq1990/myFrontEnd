import { Context } from './Context';
import { BlueState } from './BlueState';

let ctx = new Context();
ctx.setState(new BlueState());

ctx.push().push().pull().push();
// let blues = new BlueState(); 
// 对于blue这个颜色状态，在handlepush,handlepull 两种切换中，会切换到不同的颜色
// console.log(blues.getcolor());
// blues.handlepull(ctx);
// blues.handlepush(ctx);
