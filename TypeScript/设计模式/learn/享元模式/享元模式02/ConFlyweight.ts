import { AFlyweight } from './AFlyweight';

export class ConFlyweight extends AFlyweight {
    private str: string;

    constructor(str: string){
        super();
        this.str = str;
    }

    operation(): void {
        console.log("concrete flyweight: "+this.str);
    }

}