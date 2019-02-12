import { Context } from './Context';

/**
 * 父类State.
 * 
 * 子类的切换顺序：
 * 
 * push: blue-green-black-red-blue
 * 
 * pull: blue-red-black-green-blue
 */
export abstract class State {
    abstract handlepush(c: Context);
    abstract handlepull(c: Context);
    abstract getcolor();
}