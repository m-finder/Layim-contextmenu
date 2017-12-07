layui.define(['layer', 'element'], function (exports) {

    var $ = layui.jquery
            , layer = layui.layer
            , element = layui.element
            , device = layui.device();

    !function (target, node, event) {

        var hide = function () {
            layer.closeAll('tips');
        }, stope = layui.stope;

        var othis = function (target, options) {
            //console.log(target),console.log(node),console.log(event),console.log(options);

            $(target).on('contextmenu', function () {
                //这里拿右键点击元素的相关信息
                var vthis = $(this);
                console.log(vthis);
                
                i = '';
                layui.each(options.menu, function (index, item) {
                    i += '<li class="ui-context-menu-item"><a href="javascript:void(0);" ><span>' + item.text + '</span></a></li>';
                });
                
                html = '<ul id="contextmenu">' + i + '</ul>';
                layer.tips(html, target, {
                    tips: 1,
                    time: 0,
                    anim: 5,
                    fixed: true,
                    skin: "layui-box layui-layim-contextmenu",
                    success: function (layero, index) {
                        var stopmp = function (e) {
                            stope(e);
                        };
                        layero.off('mousedown', stopmp).on('mousedown', stopmp);
                    }
                });
                return false;
            });

            $(document).off('mousedown', hide).on('mousedown', hide);

            $(document).on("click", ".ui-context-menu-item", function (t) {
                var e = event(this).index();
                layer.closeAll('tips');
                options.menu[e].callback && options.menu[e].callback();
            });


        };
        event.fn.menu = function (options) {
            return new othis(this, options), this;
        };
        
    }(window, document, $);


    exports('contextmenu');
});


