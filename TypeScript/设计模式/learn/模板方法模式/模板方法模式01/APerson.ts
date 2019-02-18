export abstract class APerson {
    preToSchool() {
        this.dressUp();
        this.eatBreakfast();
        this.takeThings();
    }

    protected abstract dressUp(): void;
    protected abstract eatBreakfast(): void;
    protected abstract takeThings(): void;
}