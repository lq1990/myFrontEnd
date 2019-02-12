export abstract class Car {
    public description:string;
    getDes():string {
        return this.description;
    }

    abstract cost():number;
}