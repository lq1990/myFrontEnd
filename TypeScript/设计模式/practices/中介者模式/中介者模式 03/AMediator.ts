import { APerson } from './APerson';

export abstract class AMediator {
    abstract getPsMsg(msg: string, p: APerson);
}