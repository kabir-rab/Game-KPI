define( [	
		"jquery",
		"qlik",
		"./lib/js/property",
		"./lib/js/initialProps",
		"text!./template.html",
		"text!./lib/css/game-KPI.css",
		"text!./lib/css/spectre.min.css",
		"./lib/js/directives",	
	],

	function ($, qlik, props, initProps, template, gameCSS, cssContent, directives  ) {'use strict';
		$("<style>").html(cssContent).appendTo("head");
		$("<style>").html(gameCSS).appendTo("head");
		var support = {	snapshot: true,
			export: true,
			exportData : true};

		return {		
			initialProperties : initProps,
			definition : props,
			support : support,
			template: template,
			
			controller: ['$scope', function ( $scope ) {
				//console.log('image location', $scope.layout);
				//console.log("element number", $scope.layout.qHyperCube.qDataPages[0].qMatrix[0][0].qElemNumber);								
			}],

			paint: function ($element) {

				var self = this;				

				self.$scope.selection = function(datavalue) {							
					self.backendApi.selectValues(0, [datavalue], false);						
				}
							
				return qlik.Promise.resolve();
			}
		};
	} 
);
