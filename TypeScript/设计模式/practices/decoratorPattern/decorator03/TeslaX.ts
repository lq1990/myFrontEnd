import { Car } from './Car';
export class TeslaX extends Car{
    description:string = "This is TeslaX.";
    
    cost():number {
        return 1000;
    }
}