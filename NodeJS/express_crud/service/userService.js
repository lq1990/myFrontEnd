/*
 * 对读取和操作用户数据的服务封装
 *
 * 
 * 
 *  
 */

// 加载json文件模块
const dbjson = require("../db.json");

// 获取所有的用户数据
exports.getUsers = function () {
    return dbjson.users;
};

// page: 第几页， size：一页多少条
exports.getPageUsers = function (page, size) {
    // page, size: int 
    if (typeof (page) !== "number" || page <= 0) {
        return {
            code: 0,
            msg: "type or size of page is invalid."
        }
    };
    if (typeof (size) !== "number" || size <= 0) {
        return {
            code: 0,
            msg: "type or size of size is invalid."
        }
    };

    return {
        users: dbjson.users.slice((page - 1) * size, page * size),
        code: 1,
        msg: "success"
    };

};















