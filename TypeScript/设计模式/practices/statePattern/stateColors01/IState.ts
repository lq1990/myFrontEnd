import { Context } from './Context';

export interface IState {
    handleSX(c: Context);
    handleNX(c: Context);
}