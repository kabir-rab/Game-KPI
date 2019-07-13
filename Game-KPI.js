define( [	"jquery",
			"qlik",
			"./lib/js/property",
			"./lib/js/initialProps",
			"text!./template.html",
			"text!./lib/css/game-KPI.css",
			"text!./lib/css/spectre.min.css"	
		],


	function ($, qlik, props, initProps, template, gameCSS, cssContent  ) {'use strict';
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

				$element.find('.qv-object-card').on('click', function() {
					if(this.hasAttribute("data-element")) {
						var value = parseInt(this.getAttribute("data-element"), 10), dim = 0;
						self.backendApi.selectValues(dim, [value], false);
					}
				});				
				return qlik.Promise.resolve();
			}
		};

} );
