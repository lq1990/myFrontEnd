import { AMediator } from './AMediator';
export abstract class APerson {
    protected name: string;
    protected mediator: AMediator;

    constructor(name: string, m: AMediator) {
        this.name = name;
        this.mediator = m;
    }

    abstract contact(msg:string);

    abstract getMsg(msg: string);
}