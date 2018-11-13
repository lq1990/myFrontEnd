/*
 * @Author: lq 
 * @Date: 2018-11-12 18:32:55 
 * @Last Modified by: lq
 * @Last Modified time: 2018-11-13 16:50:26
 */

/*
const express = require("express");
const path = require("path");
const art_express = require("express-art-template");

const app = express(); // 创建app。app负责管理中间件

// 设置art的模板引擎，art为文件名后缀
app.engine("art", art_express);

// 用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, "public")));

// 动态的请求
app.get("/user/list", (req, res) => {
    // res.send("abc"); // 这样send效率太低。改进方法：模板引擎
    // res.end();
    

    // res的render，
    // 第一个参数：模板的文件名，
    // 第二个参数：给模板的数据
    res.render("userlist.art",{
        title: "hello..."
    });

});

console.log("1111111122222");

app.listen(56789, () => {
    console.log("http://127.0.0.1:56789");
});


// ==================practics once more===============================
const express = require("express");
const art_express = require("express-art-template");

let app = express();

app.engine("art", art_express);

app.get("*", (req, res) => {
    // express引擎会默认去views文件夹内找
    res.render("userlist.art", {
        mytitle: "title...",
        users: [{
            name:"lq",
            id:101
        },{
            name:"anna",
            id:102
        }]
    });

    
});

app.listen("55555", () => {
    console.log("http://127.0.0.1:55555");
});
*/
// ====================once more practice================================
const express = require("express");
const art_express = require("express-art-template");
const userService = require("./service/userService.js");

let app = express(); // 创建app，app负责管理中间件

app.engine("art", art_express); // 第一个参：文件后缀名，第二个：模板函数

app.get("*", (req, res) => {
    // express引擎会默认去views文件夹内找
    res.render("userlist.art", { // 两个参，第一个：作为模板的文件，第二个：模板文件里的内容
        mytitle: "mytitle...",
        users: userService.getUsers()
    });
});

app.listen("57789", () => {
    console.log("http://127.0.0.1:57789");
})


