import { HKMacSeller } from './HKMacSeller';
import { USAMacSeller } from './USAMacSeller';
/**
 * 代理模式。
 * 主题和代理都实现 同一个接口。
 * 代理内部有私有成员。
 */
// let seller = new HKMacSeller();
let seller = new USAMacSeller();
seller.buy();