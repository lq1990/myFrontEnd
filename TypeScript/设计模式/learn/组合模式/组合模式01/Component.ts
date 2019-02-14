export abstract class Component {
    name: string;
    protected abstract add(c: Component): void;
    protected abstract remove(c: Component): void;
    abstract eachChild();
}