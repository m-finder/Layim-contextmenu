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
                    callback: function (target,ele) {
			    console.log(target);
			    layer.msg(ele.find('span').text());
		    }
                }, {
                    text: "复制",
                    callback: function (target,ele) {
			    console.log(target);
			    layer.msg(ele.find('span').text());
		    }
                }, {
                    text: "粘贴",
                    callback: function (target,ele) {
			    console.log(target);
			    layer.msg(ele.find('span').text());
		    }
                }, {
                    text: "删除",
                    callback: function (target,ele) {
			    console.log(target);
			    layer.msg(ele.find('span').text());
		    }
                }
            ]
        });
    });
```

M-finder
www.m-finder.com
