// Properties

define( ["qlik","jquery"], function (qlik, $) {
    'use strict';
		
	var dimensions = {
        uses : "dimensions",
        min : 1,
        max : 1,
        items: {
            dimImg: {
                type: "string",
                label: "Profile Image expression",
                ref: "qAttributeExpressions.0.qExpression",
                component: "expression",
            }
        }
	},
    measures = {   
        uses : "measures",
        min : 1,
        max : 3 
    },
    settings = { 
        uses : "settings",
        items : {
            initFetchRows : {
                ref : "qHyperCubeDef.qInitialDataFetch.0.qHeight",
                label : "Initial fetch rows",
                type : "number",
                defaultValue : 50
            }
        } 
    };
    
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            settings: settings
            //sorting: sorting,
            //appearance: appearancePanel
			//addons: addons
        }
    };
} );