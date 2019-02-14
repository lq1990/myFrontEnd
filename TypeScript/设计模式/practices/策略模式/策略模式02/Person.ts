import { ISolve } from './ISolve';
export class Person {
    private method: ISolve;

    constructor(m: ISolve) {
        this.method = m;
    }

    solveProblem() {
        this.method.solve();
    }

}