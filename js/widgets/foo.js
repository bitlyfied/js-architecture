/**
 * @widget FooWidget
 * @html-sample
 *
 * <div>
 *     <p>number</p>
 * </div>
 */
tkc.widget('foo', function (core) {

    return function FooWidget(dom) {
        var widget = this;
        var element = $(dom);
        var ptag = element.find('p');

        widget.init = function () {
            widget.update();
            core.on('boom', widget.zero);
        };

        widget.update = function () {
            element.css('border-color', widget.color());
        };

        widget.value = function(newValue){
            if(typeof newValue !== 'undefined'){
                ptag.text(newValue);
                widget.update();
            }

            return parseInt(ptag.text());
        };

        widget.color = function(){
            var value = widget.value();
            switch(true){
                case value < 25:
                    return 'red';
                case value < 60:
                    return 'orange';
                default:
                    return 'green';
            }
        };

        widget.zero = function () {
            widget.value(0);
        };

        return widget;
    };
});