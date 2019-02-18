export class FontFactory {
    private font: string;

    constructor(f: string) {
        this.font = f;
    }

    getFontInfo() {
        console.log("当前font是："+this.font) ;
    }
}