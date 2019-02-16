import { AMediator } from './AMediator';
export abstract class APerson {
    protected name: string;
    protected mediator: AMediator;

    constructor(name: string, mediator: AMediator) {
        this.name = name;
        this.mediator = mediator;
    }
}