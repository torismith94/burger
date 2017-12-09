'use strict';
// requiring necessary packages 
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var port = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);

// var connection = require('./config/connection');

var orm = require('./config/orm');
orm.selectAll(function(err, data) {
	console.log("Data from the orm!");
	console.log(data);
});