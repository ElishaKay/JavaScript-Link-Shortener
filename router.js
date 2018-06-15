var logic = require('./logic');
var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

var route = function(app){

	app.get('/geturls', function(req,res){
		connection.query(
	       `select id,
	        url, 
	       	segment as hash, 
			DATE_FORMAT(datetime_added, "%M %d, %Y") AS date,
			num_of_clicks
				from 
			urls`, function(err, rows){
				if(err){
					console.log('error: ', err)
				} else {
					res.json(rows);
				}
    		})
    });

	app.get('/add', function(request, response){
		var url = request.param('url');
		var vanity = request.param('vanity');
		logic.addUrl(url, request, response, vanity);
	});

	app.get('/whatis', function(request, response){
		var url = request.param('url');
		logic.whatIs(url, request, response);
	});
		
	app.get('/:segment', function(request, response){
			logic.getUrl(request.params.segment, request, response);
		});
	}

exports.route = route;