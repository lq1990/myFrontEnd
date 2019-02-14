import { IVisitor } from './IVisitor';

export abstract class AStudent {
    
    private name: string;
    private uni: string;
    private rating: string;

    // 让指定的visitor获得权限
    abstract accept(v: IVisitor);

    getName() {
        return this.name;
    }
    setName(name:string) {
        this.name = name;
    }

    getUni() {
        return this.uni;
    }
    setUni(u: string) {
        this.uni = u;
    }

    getRating() {
        return this.rating;
    }
    setRating(r:string) {
        this.rating = r;
    }
}