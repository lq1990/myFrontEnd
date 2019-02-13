import { IVisit } from './IVisit';
export class PC implements IVisit {
    visit() {
        console.log("PC上网！");
    }
}