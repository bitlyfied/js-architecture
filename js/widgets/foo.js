tks.widget('foo', function(core){
  
  // we could even remove this and use it as a default
  core.register('foo', '[data-component=foo]');

  core.on('ready', function(){
    // is some initialization is required on dom ready
    // for all the widgets
  });

  return function CarouselWidget(){
    var widget = this;

      widget.init = function(element){

    }

  };

});