import { IState } from './IState';

export class Context {
    private state: IState;

    connect() {}
    beginToLogin() {}
    loginFailure() {}
    loginSuccess() {}
    logout(ctx: Context) {}
}