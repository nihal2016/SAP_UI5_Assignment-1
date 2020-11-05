/*global QUnit*/

sap.ui.define([
	"com/yash/CovidHealthCheklist/controller/covidHealthCheckList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("covidHealthCheckList Controller");

	QUnit.test("I should test the covidHealthCheckList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});