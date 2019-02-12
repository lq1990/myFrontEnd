/**
 * 类适配器
 * 目标：220V电压转成5V，通过类适配器实现
 * Target: 5V，IPower5V
 * Adaptee: 220V, Power220V
 */

import { IPower5V } from './IPower5V';
import { NoteBook } from './NoteBook';
import { Power220V } from './Power220V';
import { PowerAdapter } from './PowerAdapter';

export {
    IPower5V,
    NoteBook,
    Power220V,
    PowerAdapter
}

