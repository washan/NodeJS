
//Inicialization
var express = require('express'),
	http	= require("http"),
	mongoose= require('mongoose'),
	app		= express(),
	server	= http.createServer(app);

//Configuration
app.configure(function(){
	//app.use(express.bodyParser());
	
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.multipart());

	app.use(express.methodOverride());
	app.use(app.router);
});

/* ROUTES */
//
app.get('/',function(req,res){
	res.send('Hello World');
});

routes  = require('./routes/ImageGallery')(app);


/* DB and Server Inicialicing */

//DB connect
mongoose.connect('mongodb://localhost/dbImageGallery', function(err,res){
	if(err){
		console.log('ERROR: connecting to Database. ' + err);
	}else{
		console.log(' - Connected to Database');
	}
});

server.listen(3000,function(){
	console.log(" - Node Server running on http://localhost:3000");
});