export abstract class CarOption {
    description:string;
    abstract getDes():string;
    abstract cost():number;
}