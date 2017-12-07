'use strict';
// requiring necessary packages 
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// var connection = require('./config/connection');

var orm = require('./config/orm');
orm.selectAll(function(err, data) {
	console.log("Data from the orm!");
	console.log(data);
});