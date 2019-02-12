import { Context } from './Context';
import { GreenState } from './GreenState';
/**
 * 多种颜色之间的切换，顺序、逆序。
 * 顺序为：红、绿、黄、蓝
 * 逆序为：蓝、黄、绿、红
 */

let ctx = new Context();
ctx.setState(new GreenState());
ctx.sx().sx().sx().sx().sx().nx().nx();