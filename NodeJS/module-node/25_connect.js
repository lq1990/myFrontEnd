const connect = require("connect");

//  connect本身是一个函数，返回一个中间件的控制器
let app = connect();

// 注册中间件。中间件可以注册多个。
app.use(function (req, res, next) {
    console.log("1");
    next();
});

app.use((req, res, next) => {
    console.log("2");
    next();
});

// 使用地址 过滤
app.use("/api",(req, res, next) => {
    console.log("4");
    next();
});

// 引入错误处理的中间件
app.use((err,req,res,next)=>{

});


app.use((req, res) => {
    res.write("some thing");
    console.log("3");
    res.end();
});



app.listen(58899, ()=>{
    console.log("http://127.0.0.1:58899");
});


