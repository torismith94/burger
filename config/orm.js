'use strict';
// Requiring connection.js into the orm file 
var connection = require('./connection.js'); 

// Methods to execute the necessary MySQL commands in the controllers. Need 
// to retrieve and store data in my database. 

var orm = {
	selectAll: function(callback) {
		var query = 'SELECT * FROM burgers ORDER BY burger_name ASC';
    	connection.query(query, callback);
      		
	}	
}


// Export orm 
module.exports = orm; 