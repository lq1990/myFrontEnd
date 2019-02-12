/**
 * Target: 5V, IPower5V
 * Adaptee: 220V, Power220V
 * PowerAdapter
 * 
 * 对象适配器。适配器不继承于 源对象，用关联的方式。
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