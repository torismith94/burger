'use strict';
// Requiring connection.js into the orm file 
var connection = require('./connection.js'); 

// Methods to execute the necessary MySQL commands in the controllers. Need 
// to retrieve and store data in my database. 

var orm = {
	selectAll: function(callback) {
		connection.query('SELECT * FROM burgers', function (err, result) {
    		if (err) throw err;
    		callback(result); 		
		});	
	},

	insertOne: function(burger_name, callback) {
		connection.query('INSERT INTO burgers SET ?', {
			burger_name: burger_name,
			devoured: false, 
			date: timestamp
		}, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	}, 

	updateOne: function(burgerID, callback) {
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

// Export orm 
module.exports = orm; 