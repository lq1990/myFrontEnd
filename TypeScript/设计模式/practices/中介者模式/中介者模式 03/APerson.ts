import { AMediator } from './AMediator';
export abstract class APerson {
    protected mediator: AMediator;
    protected name: string;
    
    abstract sendMsg(msg:string);
    abstract getMsg(msg: string);
}