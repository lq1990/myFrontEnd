import { Car } from './Car';
export class TeslaS extends Car{
    description:string = "This is TeslaS";
    
    cost():number {
        return 2000;
    }
}