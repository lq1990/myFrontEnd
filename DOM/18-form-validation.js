window.onload = function () {
    var frm = document.getElementById("frm");

    // 动态创建了 用户名长度错误消息
    var txtNameMsg = document.createElement("span");
    txtNameMsg.innerHTML = "姓名的字符串长度不少于6个";
    txtNameMsg.style.color = "red";

    // 表单提交时校验
    frm.onsubmit = function (e) {
        // console.log("form submit");

        // 用户名文本框的字符不少于6个字符
        var txtName = document.getElementById("txtName");
        // 使用正则表达式 进行校验
        var txtNameRegExp = /\w{6,}/gi;
        if(txtNameRegExp.test(txtName.value)){
            // 移除文本框错误消息
            txtName.parentNode.removeChild(txtNameMsg);
        } else {
            // 校验失败，添加错误信息，取消默认操作
            txtName.parentNode.appendChild(txtNameMsg);
            return false;

        }




        /*
        // DOM2级 取消默认操作
        e = e || window.event;
        if(e.preventDefault){
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        // DOM0级取消默认操作
        return false;
        */



    };

}