/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/yash/CovidHealthCheklist/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});