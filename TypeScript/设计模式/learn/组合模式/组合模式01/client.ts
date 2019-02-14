import { Composite } from './Composite';
import { Leaf } from './Leaf';
/**
 * 组合模式：
 * 将对象组合成树形结构，以表示 部分-整体 的层次结构。
 * 此模式使得用户对单个对象和 组合对象的使用具有一致性。
 */
let root_com = new Composite();
root_com.name = "根节点";

let left_com = new Composite();
left_com.name = "左节点";

let right_com = new Composite();
right_com.name = "右节点";

let leaf1 = new Leaf();
leaf1.name = "右-子节点1";

let leaf2 = new Leaf();
leaf2.name = "右-子节点2";
right_com.add(leaf1);
right_com.add(leaf2);

root_com.add(right_com);
root_com.add(left_com);

root_com.eachChild();