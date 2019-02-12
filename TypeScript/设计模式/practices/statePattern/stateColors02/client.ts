import { Context } from './Context';
import { YellowState } from './YellowState';
/**
 * 实现颜色的切换。
 * 顺序：红绿黄蓝
 * 逆序：蓝黄绿红
 */

let ctx = new Context();
ctx.setState(new YellowState());
ctx.sx().sx().sx().nx();