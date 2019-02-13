import { IRefer } from './IRefer';

export class Obj implements IRefer {
    refer() {
        console.log("对象被引用了！");
    }

}