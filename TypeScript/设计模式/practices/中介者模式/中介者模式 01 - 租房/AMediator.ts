import { APerson } from './APerson';
export abstract class AMediator {
    /**
     * 中介，联系p，从而拿到p的msg
     * @param msg 
     * @param p 
     */
    abstract getPsMsg(msg: string, p: APerson);
}