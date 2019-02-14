"use strict";
exports.__esModule = true;
var Folder_1 = require("./Folder");
var File_1 = require("./File");
/**
 * 组合模式：
 * 以文件和文件夹为例
 */
var root_folder = new Folder_1.Folder("总文件夹");
var folder1 = new Folder_1.Folder("分文件夹1");
var folder2 = new Folder_1.Folder("分文件夹2");
root_folder.add(folder1);
root_folder.add(folder2);
var file1 = new File_1.File("文件1");
var file2 = new File_1.File("文件2");
folder1.add(file1);
folder1.add(file2);
root_folder.read();
