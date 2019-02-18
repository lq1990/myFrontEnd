export class FontFac {
    private font: string;

    constructor(f: string){
        this.font = f;
    }

    getFontInfo(){
        return this.font;
    }
}