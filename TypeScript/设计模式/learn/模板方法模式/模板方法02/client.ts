import { Cricket } from "./Cricket";
import { Football } from './Football';
import { AGame } from './AGame';

/**
 * 模板方法模式：
 * 封装不变部分，扩展可变部分。
 */
let game: AGame = new Cricket();
game.play();

console.log("-----------------");

game = new Football();
game.play();