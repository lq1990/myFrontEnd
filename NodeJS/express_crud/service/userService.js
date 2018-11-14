/*
 * 对读取和操作用户数据的服务封装
 *
 * 
 * 
 *  
 */

// 加载json文件模块
const dbjson = require("../db.json");
const fs = require("fs");
const path = require("path");

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

// 把数据放到db.json文件中
exports.addUser = function (user) {
    // 判断user对象的输几局是否合法
    if (!user.name) {
        return {
            msg: "username cannot be empty.",
            code: 0,
        }
    }

    // user.id // 自动复制id， 用Date.now()
    const newUser = Object.assign({ id: Date.now() }, user);
    dbjson.users.push(newUser);
    // 把数据保存
    _savejson(dbjson);

    return {
        msg: "save newUser to dbjson successfully",
        code: 1
    }
};


function _savejson(jsonData) {
    const strJson = JSON.stringify(jsonData); // 把一个对象转成json字符串
    fs.writeFileSync(path.join(__dirname, "../db.json"), strJson, {
        encoding: "utf8"
    });
}

exports.delUser = function (id) {
    if (id > 0 && typeof (id) == "number") {
        const idx = dbjson.users.findIndex(u => u.id == id);

        dbjson.users.splice(idx, 1);
        _savejson(dbjson);
        return {
            code:1,
            msg:"del successfully"
        }
    };

    return {
        code: 0,
        msg: "del failed"
    }
}

