var tkc = (function () {

    var widgets = [];
    var widgetsInstances = [];
    var core = $('<div/>');

    /**
     * Helper used to find a widget inside an element
     */
    core.findWidget = function(el, widgetId){
        return el.find('.' + widgetId + '-widget').data(widgetId + '-widget');
    };


    $(function () {

        // construction
        $.each(widgets, function (index, widget) {
            // instantiate a new widget per dom element matched
            $('.' + widget.id + '-widget').each(function(index, domElement) {
                var instance = widget.call($({}), domElement);
                $(domElement).data(widget.id + '-widget', instance);
                widgetsInstances.push(instance);
            });
        });

        // initialization
        $.each(widgetsInstances, function (index, widgetInstance) {
            widgetInstance.init();
        });

        // notifies all the widgets that the dom is ready
        core.trigger('ready');
    });

    return {
        widget: function (id, init) {
            var widget = init(core);
            widget.id = id;
            widgets.push(widget);
        }
    };
}());