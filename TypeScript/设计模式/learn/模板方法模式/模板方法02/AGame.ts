export abstract class AGame {
    protected abstract  init(): void;
    protected abstract startPlay(): void;
    protected abstract endPlay(): void;

    play(): void {
        this.init();
        this.startPlay();
        this.endPlay();
    }
}