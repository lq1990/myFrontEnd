$(function() {

    // ============== jQ. 简单绑定 =============
    // $("#btn").click(function() {

    // });

    // ============== jQ. 高级绑定 bind，可绑定多个事件===============

    // 第一种 (推荐使用)
    // $("#btn").bind("click",function(e) {
    //     console.log(this.value);
    //     console.log(e);
    // });
    
    $("#btn").bind("click","23456",function(e) {
        console.log(e.data);
    });

    // $("#btn").bind("click","abcde",function(e) {
    //     alert("alert");
    // });

    // 第二种
    // $("#btn2").bind("click focus",function(e){
    //     console.log(e.type);
    // });

    // 第三种
    $("#btn2").bind({
        click:function(e) {
            console.log("click");
        },
        mousedown: function(e) {
            console.log("mouse down")
        },
        mouseup: function() {
            console.log("mouse up");
        }
    });

});