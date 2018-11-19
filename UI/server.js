const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// 重新定义路由，方式一 ====================================
// 路由重写。通过server.js 托管json-server的话，默认的json-server.json配置文件失效。只能自己重写
// server.use(jsonServer.rewriter({
//     "/api/*":"/$1",
//     "/blog/:resource/:id/show":"/:resource/:id" // 冒号：参数绑定
// }))

server.use(jsonServer.bodyParser); // bodyParse 必须放到前面。

server.get("/echo", (req, res) => {
    res.jsonp(req.query);
});

server.post("/authorized", (req, res) => {
    // res.body拿到表单用户名usename、密码userpwd
    if (req.body.username === "admin" && req.body.userpwd === "pwd") {
        // jsonp支持跨域
        res.jsonp({
            code: 1,
            msg: "msg: login successfully",
            auth_token: "qwert"
        })
    } else {
        res.jsonp({
            code:8,
            msg:"msg:failed to login"

        })
    }

});


server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createAt = Date.now(); // 在POST Body 内容中自动添加一个createAt属性，值为date
    }
    next();
});

// 使用一个中间件，挂载登录校验
server.use("/api", (req, res, next) => {
    // client、server配合 登录的校验
    // 约定： 发送ajax请求：必须带一个header：Authorization: xxjkjkdsajfiowo
    // 加密的字符串是前端登录的时候，后台生成并返回给client 的凭证。

    // isAuthorized：校验的逻辑
    if (req.get("Authorization")) {
        next(); // 跳转到下一个api中间件，line 59
    } else {
        // res.sendStatus(401); // 给客户端发送一个未验证的字符串
        res
            .status(401)
            .jsonp({
                code: 7, // 假设7：未授权
                msg: "not login, can't visit"
            })
    };
});

// 自定义输出内容
router.render = (req, res) => {
    res.jsonp({ // 对原始数据进行包装
        msg: "ok",
        code: 1,
        data: res.locals.data
    })
}

// 重新定义路由，方式二，用中间件 =============================
// 相当于：把当前所有的路由地址挂在 "/api/course"
server.use("/api", router);
server.listen(3000, () => {
    console.log("JSON Server is running...");
    console.log("http://127.0.0.1:3000");
})
