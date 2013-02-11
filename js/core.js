var tks = (function () {

    var widgets = [];
    var core = $(body);

    core.register = function (widgetName, htmlSelector) {
        widgets[widgetName].htmlSelector = htmlSelector;
    };

    $(function () {
        // notifies all the widgets that the dom is ready
        core.trigger('ready');

        $.each(widgets, function (index, widget) {
            if (widget.htmlSelector) {
                // instantiate a new widget per dom element matched
                $(widget.htmlSelector).each(function (domElement) {
                    new widget(domElement);
                });
            }
        });
    });

    return {
        widget: function (name, init) {
            widgets[name] = init(core);
        }
    };
}());