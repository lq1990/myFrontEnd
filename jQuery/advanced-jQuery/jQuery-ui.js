$(function () {
    $(".tabs").tabs();
    $("#btnOpenDialog").on("click",function () {
        // 弹出一个对话框
        $(".dialog-box").dialog({
            modal: true,
            width:"500px",
            buttons: [{
                text:"close",
                click: function () {
                    $(this).dialog("close");
                },
            }],
            close: function () {
                console.log("is closed.")
            }

        });
    });
});
