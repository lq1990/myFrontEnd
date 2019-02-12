import { Part1 } from "./Part1";
import { Part2 } from './Part2';
import { Part3 } from './Part3';

export class Facade {
    private p1: Part1 = new Part1();
    private p2: Part2 = new Part2();
    private p3: Part3 = new Part3();

    on() {
        this.p1.on();
        this.p2.on();
        this.p3.on();
    }
}