import { ISort } from './ISort';
export class Context {
    private method: ISort;

    constructor(m: ISort){
        this.method = m;
    }

    do(){
        this.method.sort();
    }
}