layim-contextmenu layim 右键菜单
----

#### 更新记录
* 2019-09-28
	* 代码优化
	* 可一次性渲染多个右键菜单
	* 修复已知 bug
* 2017-10-8
	* 第一版

演示地址: [【 点我 】](https://www.m-finder.com/im)


#### 使用方法：
----
* 先引入 contextmenu ，然后 var menu = layui.contextmenu ;
* 调用
```javascript
layim.on('ready', function (options) {
        menu.init([
			{
				target: '.layim-list-friend',
				menu: [{
					text: "新增分组",
					callback: function (target) {
						layer.msg(target.find('span').text());
					}
				}]
			},
			{
				target: '.layim-list-friend >li>h5>span',
				menu: [{
					text: "重命名",
					callback: function (target) {
						layer.msg(target.find('span').text());
					}
				}, {
					text: "删除分组",
					callback: function (target) {
						layer.msg(target.find('span').text());
					}
				}]
			}
		]);
});
```

M-finder
www.m-finder.com
