export abstract class ARead {
    protected abstract add(c: ARead): void;
    protected abstract remove(c: ARead): void;

    abstract read();
}