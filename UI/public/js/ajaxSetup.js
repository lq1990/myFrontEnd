 // 执行了设置之后，后续所有的ajax请求，都会拥有以下的默认设置
 $.ajaxSetup({
    headers: { // 网请求头上添加信息
        "Authorization": Cookies.get("auth_token"),
        "zts": "abc.com"
    },
    statusCode: {
        "401": function (status, xhr) {
            // 401：用户没有登录直接访问 /api 接口
            $.messager.show({
                timeOut: 1500,
                title: "info",
                msg: "pls login. jump to login 2 s later",
                closable: true
            });
            setTimeout(() => {
                window.location.href = "./login.html"
            }, 2000);
        }
    },
});