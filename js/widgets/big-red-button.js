/**
 * @widget BigRedButtonWidget
 * @globalEvents boom.big-red-button
 */
tkc.widget('big-red-button', function (core) {

    return function BigRedButtonWidget(dom) {
        var widget = this;
        var element = $(dom);

        widget.init = function () {
            element.click(function(){
                core.trigger('boom');
            });
        };

        return widget;
    };
});