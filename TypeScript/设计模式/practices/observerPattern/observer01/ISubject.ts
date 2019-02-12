import { IObserver } from "./IObserver";

export interface ISubject {
    addObserver(o: IObserver);
    removeObserver(o: IObserver);
    notifyObservers();
}