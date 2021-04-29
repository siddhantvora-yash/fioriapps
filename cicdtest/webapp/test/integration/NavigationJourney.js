	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
        "./pages/View1",
        "./pages/View2"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
            Given.iStartMyApp();
            
            
			// Assertions
            Then.onTheAppPage.iShouldSeeTheApp();
            When.onTheAppPage.iPressOnTheButton();
            Then.onTheSecondPage.iShouldSeeTheSecondpage();
            //action
            
			//Cleanup
			Then.iTeardownMyApp();
        });
        // opaTest("Should see 2nd page ",function(Given,When,Then){

        //  });
	});
