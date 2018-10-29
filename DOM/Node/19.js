var data = 
[
{
	name: "北京",
	cities: ["东城区",
          "西城区",
          "崇文区",
          "宣武区",
          "朝阳区",
          "丰台区",
          "石景山区",
          "海淀区",
          "门头沟区",
          "房山区",
          "通州区",
          "顺义区",
          "昌平区",
          "大兴区",
          "平谷区",
          "怀柔区",
          "密云县",
          "延庆县"]
},
{
	name:"天津",
	cities: ["和平区",
          "河东区",
          "河西区",
          "南开区",
          "河北区",
          "红桥区",
          "塘沽区",
          "汉沽区",
          "大港区",
          "东丽区",
          "西青区",
          "津南区",
          "北辰区",
          "武清区",
          "宝坻区",
          "宁河县",
          "静海县",
          "蓟  县"]
},
{
	name:"河北",
	cities:["石家庄","秦皇岛","廊坊","保定"]
},
{
	name:"山西",
	cities:["太原","大同"]
},
{
	name:"内蒙古",
	cities:["呼和浩特","赤峰","通辽"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},

{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
{
	name:"辽宁",
	cities:["大连","沈阳","鞍山"]
},
];


(function () {
	document.myReady(function () {
		// 动态创建省pro的option
		initSel();

		// 省的下拉列表的改变事件
		var proSel = document.getElementById("pro");
		EventUtil.addEvent(proSel,"change",initCity);

		// 页面加载完成，省的数据加载完成后，初始化城市的选项数据
		initCity();

	});

	// 初始化
	function initCity() {
		var proSel = document.getElementById("pro");
		var cities;
			var proName = proSel.value;
			var citySel = document.getElementById("city");

			for(var j=0;j<data.length;j++) {
				if(data[j].name == proName) {
					cities = data[j].cities; // 拿到所有的城市集合
				}
			}

			// 在插入新的城市之前，先清空之前的城市选项
			citySel.innerHTML = "";

			// 添加到城市的下拉列表中
			for(var m=0;m<cities.length;m++) {
				var optCity = document.createElement("option");
				optCity.value = cities[m];
				optCity.text = cities[m];
				citySel.add(optCity,null);
			}
	}

	function initSel() {
		var proSel = document.getElementById("pro");
		// 遍历数据
		for(var i=0;i<data.length;i++) {
			var opt = document.createElement("option");
			opt.value = data[i].name;
			opt.text = data[i].name;
			proSel.add(opt,null);
			
		}
	}
})();



