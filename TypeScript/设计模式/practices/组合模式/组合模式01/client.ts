import { Folder } from './Folder';
import { File } from './File';
/**
 * 组合模式：
 * 以文件和文件夹为例。
 * 
 * 组合模式可以解决 递归的问题。
 */
let root_folder = new Folder("总文件夹");
let folder1 = new Folder("分文件夹1")
let folder2 = new Folder("分文件夹2")
root_folder.add(folder1);
root_folder.add(folder2);

let file1 = new File("文件1");
let file2 = new File("文件2");
folder1.add(file1);
folder1.add(file2);

root_folder.read();
