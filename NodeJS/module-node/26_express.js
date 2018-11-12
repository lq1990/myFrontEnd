// npm i -P express
/*
const path = require("path");
const express = require("express");

let app = express();

// 引入一个网页。唯一内置的中间件static
app.use(express.static(path.join(__dirname,"dist")));

// get * ：所有请求都执行
app.get("*", (req, res, next) => { // 注意：此处的req，res不同于connect中的。而是做了更高层的封装
    console.log(req.param("id"));
    console.log(req.param("name"));

    next();
    
});
app.get("/api", (req, res) => {
    console.log("/api");
    
    res.send("12456\n-----------------");
    res.end();
});

/*
// =========== express 完全兼容connect用法。底层写法如下
app.use((req,res,next) => {
    console.log(1);
    next();
});
app.use((req,res,next) => {
    console.log(2);
    next();
});
app.use((req,res,next) => {
    console.log(3);
    res.write("234");
    res.end();
});
*/
// =============================================

// app.listen("56789")



// ==================practise once more=========================
const path = require("path");
const express = require("express");

let app = express();

app.use(express.static(path.join(__dirname,"dist")));

app.get("*",(req,res,next)=>{
    console.log(req.param("id"));
    console.log(req.param("name"));
    
    res.send("res-send");
    next();
});
app.get("/api",(req,res)=>{
    console.log("/api...");
    res.end();
})

app.listen("55555",()=>{
    console.log("listen to port: 55555, click http://127.0.0.1:55555");
});









