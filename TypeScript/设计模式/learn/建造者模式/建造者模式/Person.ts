export class Person {
    private head: string;
    private body: string;
    private foot: string;

    getHead():string {
        return this.head;
    }
    setHead(h: string) {
        this.head = h;
    }

    getBody() {
        return this.body;
    }
    setBody(b: string) {
        this.body = b;
    }

    getFoot() {
        return this.foot;
    }
    setFoot(f: string){
        this.foot = f;
    }

}