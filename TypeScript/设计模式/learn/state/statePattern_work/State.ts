import { Work } from './Work';
export abstract class State {
    abstract writeProgram(w: Work);
}