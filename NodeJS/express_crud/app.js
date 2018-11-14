/*
 * @Author: lq 
 * @Date: 2018-11-12 18:32:55 
 * @Last Modified by: lq
 * @Last Modified time: 2018-11-14 21:30:17
 */
//#region
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
//#endregion
// ====================once more practice================================
const express = require("express");
const art_express = require("express-art-template");
const userService = require("./service/userService.js");
const bodyParser = require("body-parser");
const multer = require("multer");

let app = express(); // 创建app，app负责管理中间件

// 解析json、url数据如下。实现默认处理表单数据到req.body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
let upload = multer(); // form中为 multipart/form-data时，使用multer
// 上传文件时用form-data格式


app.engine("art", art_express); // 第一个参：文件后缀名，第二个：模板函数

app.get("/user/list", (req, res) => {
    /*
    // express引擎会默认去views文件夹内找art文件 即模板文件
    res.render("userlist.art", { // 两个参，第一个：作为模板的文件，第二个：模板文件里的内容
        mytitle: "mytitle...",
        users: userService.getUsers()
    });
    */

    // 分页获取数据, page, size.
    // 通过query获取url中 ?后面的key-val值
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    console.log(page, size);

    const data = userService.getPageUsers(page, size);
    // res.render("userlist.art",{
    //     mytitle: "title page",
    //     users: data.users,
    // })
    res.render("users/userlist.art", data);
});

// 添加用户的列表页面。当web url中有"/user/add"时，触发以下
app.get("/user/add", (req, res) => {
    res.render("users/add.art", {

    });
});

// 当到了add页面下，递交表单后，将数据post
app.post("/user/add", upload.array(), (req, res) => {
    // 拿请求数据的3种方式 =============== 重要 ====================
    // 1. req.query，获取请求的地址中的参数
    // 2. req.param，通过路由的方式获取路由参数
    // 3. req.body，获取表单参数

    console.log("--------- S: body -----------");
    console.dir(req.body);
    console.log("--------- E: body -----------");
    // res.send("ok");


    // 把add page的数据保存到 db.json 中
    userService.addUser(req.body);

    // 想要页面跳转的话，用redirect
    res.redirect("/user/list");
});


app.listen("57789", () => {
    console.log("http://127.0.0.1:57789");
});

app.get("/user/del", (req, res)=>{
    userService.delUser(parseInt(req.query.id));
    // res.send(req.query.id);

    res.redirect("/user/list");
});

