export abstract class AMarket {
    name:string;

    protected abstract add(m: AMarket): void;
    protected abstract remove(m: AMarket): void;
    abstract payByCard(): void;
}