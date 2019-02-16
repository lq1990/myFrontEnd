import { APerson } from './APerson';

export abstract class AMediator {
    

    abstract contact(msg:string, p: APerson);
}