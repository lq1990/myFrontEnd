export abstract class Car {
    public description: string;
    public getDes():string{
        return this.description;
    };

    public abstract cost() :number;
}