var tks = (function(){
  
  var components = {};
  var core = $(body);

  core.register = function(componentName, htmlSelector){
  	components[componentName].htmlSelector = htmlSelector;
  };

  $(function(){
  	// notifies all the component that the dom is ready
	core.trigger('ready');

	$.each(components, function(index, component){
		if(component.htmlSelector){
			// instantiate a new component per dom element matched
			$(component.htmlSelector).each(function(domElement){
				new component(domElement);
			});
		}
	});
  });

  return {
  	component: function(name, init){
		components[name] = init(core);
  	}
  };
}());