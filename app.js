var express = require("express");
var app = express();
var router = require("./router");
var con = require("./constants");

app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());

var path = require("path");

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static('views'));

app.get('/',function(req,res){
	res.render('index.ejs');   
});

app.listen(3500);
console.log("Started listening at port 3500");
router.route(app);