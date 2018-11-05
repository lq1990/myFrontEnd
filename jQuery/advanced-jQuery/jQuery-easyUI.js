$(function () {
    $("#btnD").on("click", function () {
        // $(".dialog-box").dialog("open");
        $(".dialog-box").dialog({
            closed: false,
            modal: true,
            collapsible: true,
            minimizable: true,
            resizable: true,
            tools: [{
                iconCls: 'icon-add',
                handler: function () { alert('new') }
            }, {
                iconCls: 'icon-save',
                handler: function () { alert('save') }
            }],
            buttons: [
                {
                    iconCls: "icon-ok",
                    text: "yes",
                    handler: function () {
                        console.log("ok");
                        $(".dialog-box").dialog("close")
                    }
                }
            ],

        });
    })
})