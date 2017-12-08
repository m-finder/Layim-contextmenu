# Layim-contextmenu
layim 模块化右键菜单

使用方法：
----
* 先引入 contextmenu ，然后 var contextmenu = layui.contextmenu ;
* 调用
```javascript
layim.on('ready', function (options) {
        $(".layim-list-friend >li > ul > li").menu({
	    target: function (ele) { // 当前元素
		    ele.css('background', 'rgba(0,0,0,.05)').siblings().css('background', '#ffffff');
		    console.log(ele);
            },
            menu: [{
                    text: "新增",
                    callback: function () {
                        alert("新增");
                    }
                }, {
                    text: "复制",
                    callback: function () {
                        alert("复制");
                    }
                }, {
                    text: "粘贴",
                    callback: function () {
                        alert("粘贴");
                    }
                }, {
                    text: "删除",
                    callback: function () {
                        alert("删除");
                    }
                }
            ]
        });
    });
```

M-finder
www.m-finder.com
