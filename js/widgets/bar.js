/**
 * @widget BarWidget
 * @events input
 * @html-sample
 *
 * <div>
 *     <input type="text">
 * </div>
 */
tkc.widget('bar', function (core) {

    return function BarWidget(dom) {
        var widget = this;
        var element = $(dom);
        var input = element.find('input');

        widget.init = function () {
            input.keypress(function(e){
                if(e.keyCode == 13){
                    widget.trigger('input', input.val());
                    input.val('');
                }
            });
        };

        return widget;
    };
});