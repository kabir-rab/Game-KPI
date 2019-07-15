define(['qvangular'], function (qvangular) {
	'use strict';

	qvangular.directive("selection", [function() {
	    return {
	        link: function (scope, element, attrs) {
	        	element.bind("click", onClick);
                function onClick(event) {
					var method = element.attr("selection");
					var y = parseInt(element.attr("data-element"), 10)
                    scope.$event = y;//event;
                    scope.$apply(method);                   
	        	}
	    	}
	    }
	}]);

});