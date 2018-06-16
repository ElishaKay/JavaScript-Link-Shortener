var dotenv = require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var router = require("./router");
var con = require("./constants");

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000))
app.use(express.static('views'));

app.get('/',function(req,res){
	res.render('index.ejs');   
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

router.route(app);
