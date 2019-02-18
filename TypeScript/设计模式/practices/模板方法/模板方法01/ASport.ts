export abstract class ASport {
    protected abstract init(): void;
    protected abstract start(): void;
    protected abstract end(): void;

    play(){
        this.init();
        this.start();
        this.end();
    }
}