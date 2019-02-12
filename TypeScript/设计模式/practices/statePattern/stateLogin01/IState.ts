import { Context } from './Context';

/**
 * 状态接口。
 * @author wendao
 * 2019年02月
 */
export interface IState {
  connect(ctx: Context): IState;
  beginToLogin(ctx: Context): IState;
  loginFailure(ctx: Context): IState;
  loginSuccess(ctx: Context): IState;
  logout(ctx: Context): IState;
}
