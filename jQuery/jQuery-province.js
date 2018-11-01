var data = [
    {
        name: "北京",
        cities: ["朝阳","西城","东城","","",""]
    },
    {
        name:"山东",
        cities:["济南","枣庄","青岛","","",""]
    },
    {
        name:"香港",
        cities:["中西区","湾仔区","","","",""]
    },
    {
        name:"澳门",
        cities:["大堂区","","","","",""]
    }
];

// console.log(data);

$(function (e) {
    // 初始化省的数据
    initProSel();

   

});


function initProSel() {
    var strHTMLArray = [];

    for(var i=0;i<data.length;i++) {
        var proName=data[i].name;
        // <option value="北京">北京</option>
        strHTMLArray.push('<option value="'+proName+'">'+proName+'</option>');

    }
    $("#proSel").html(strHTMLArray.join(""));


    // 给省的select标签绑定change事件
    $("#proSel").change(function () {
        // console.log($("#proSel").val());
        var proName = $("#proSel").val();
        for(var j=0;j<data.length;j++) {
            if(data[j].name == proName){
                var cities = data[j].cities; // 注意：通过上面name匹配后，在把city传。
                initCities(cities);
            }
        }

    });

    // 触发省change的事件处理程序
    $("#proSel").triggerHandler("change"); // 只有change之后，city才会显示出来。当然handler不会真正触发事件本身，不产生冒泡。

}

// 初始化城市的信息
function initCities(cities) {
    var strHTMLArray = [];
    for(var i=0;i<cities.length;i++){
        strHTMLArray.push('<option value="'+cities[i]+'" >'+cities[i]+'</option>');
    }

    $("#citySel").html(strHTMLArray.join(""));

}

// 通过 .html 传递数据
