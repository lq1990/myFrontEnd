export abstract class Car {
    description:string;
    getDes():string {
        return this.description;
    }
    abstract cost():number;
}