
import { Font } from './Font';
export class FontFactory {
  private fontPool: Map<string,Font>

  public getFont(k: string) {
    //   共享的方式，当 字体池 中已经有了 某个key，直接返回它对应的val。
    if( this.fontPool.get(k)) {
        return this.fontPool.get(k);
    } else {
        // 否则就创建新的 val 即字体。
        let f: Font = new Font(k);
        this.fontPool.set(k, f);
        return f;
    }
  }
  clear(){}
}
