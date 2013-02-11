/**
 * @widget BazWidget
 * A Baz Widget required a BarWidget and a FooWidget
 */
tkc.widget('baz', function (core) {

    return function BazWidget(dom) {
        var widget = this;
        var element = $(dom);

        widget.init = function () {
            widget.bar = core.findWidget(element, 'bar');
            widget.foo = core.findWidget(element, 'foo');

            widget.bar.on('input', function(event, value){
                widget.foo.value(value);
            });
        };

        return widget;
    };
});