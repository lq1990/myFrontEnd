export abstract class ACount {
    protected abstract add(c: ACount):void;
    protected abstract remove(c: ACount):void;
    abstract count():void;
}