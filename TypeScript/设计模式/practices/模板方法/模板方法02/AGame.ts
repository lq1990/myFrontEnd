export abstract class AGame {
    protected abstract init(): void;
    protected abstract start(): void;
    protected abstract end(): void;

    play() {
        this.init();
        this.start();
        this.end();
    }
}