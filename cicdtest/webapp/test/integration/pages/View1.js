sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5,Press) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			// actions: {
            //     iPressPage_Next: function () {
			// 		return this.waitFor({
			// 			id: "btn1",
			// 			viewName: "View1",
            //             actions: new Press(),
                        
			// 			errorMessage: "Was not able to find the control with the id bt1"
			// 		});
			// 	}
            // },
            actions: {

                iPressOnTheButton: function (sId) {

                    return this.waitFor({

                        controlType: "sap.m.Button",

                        viewName: sViewName,

                        id: "btn1",

                            actions: new Press(),

                        success: function (aBtn) {

                        //  aBtn.$().trigger("tap");

                            Opa5.assert.ok(true, "Button is clicked");

                        },

                        errorMessage: "Not able to find the button"

                    });

                }

            },

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				}
			}
		}
	});

});
