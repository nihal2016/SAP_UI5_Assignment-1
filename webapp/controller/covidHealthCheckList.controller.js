sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("com.yash.CovidHealthCheklist.controller.covidHealthCheckList", {
		onInit: function () {
		},
		buttonPress: function () {
			MessageBox.confirm("Form Submitted successfully!");
		}
	});
});