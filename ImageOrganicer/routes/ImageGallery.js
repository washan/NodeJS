
module.exports = function(app) {

	var ImageGallery = require('../models/ImageGallery.js');
	var url = require('url');

	//GET - Return all Elements in DBs
	_findAll = function(req,res){
		ImageGallery.find(function(err,list){
			if(!err){
				res.send(list);
			}else{
				console.log('ERROR: ' + err);
			}
		});
	}

	//GET id - Return an unique element by ID.
	_findById = function(req,res){
		ImageGallery.findById(req.params.id,function(err,element){
		if(!err){
			res.send(element);
		}else{
			console.log('ERROR: ' + err);
			res.send('');
		}
		});
	}

	//POST - Add a new element in DBs
	_save = function(req,res){
		var body = JSON.parse(req.body.json);
		var imageGalleryTemp = new ImageGallery({
			Description: body.Description,
			Images: []
		});
		
		imageGalleryTemp.save(function(err){
			if(!err){
				console.log('created');
				res.send(imageGalleryTemp);
			}else{
				console.log('ERROR: ' + err);
				res.send('');
			}
		});
	}

	//POST - Add an related Image.


	//PUT - update a register
	_update = function(req,res){
		ImageGallery.findById(req.params.id,function(err,element){
			var body = JSON.parse(req.body.json);
			element.Description = body.Description;
			element.Updated = new Date();
			element.save(function(err){
				if(!err){
					console.log('updated...');
					res.send(element);
				}else{
					console.log('ERROR updating: ' + err);
					res.send('');
				}
			});
		});
	}


	//DELETE - delete an element by id.
	_delete = function(req,res){
		ImageGallery.findById(req.params.id,function(err,element){
			element.remove(function(err){
				if(!err){
					console.log('removed...');
					res.send(true);
				}else{
					console.log('ERROR: ' + err);
					res.send(false);
				}
			});
		});
	}


	//Union local functions and API functions
	app.get('/ImageGallery',_findAll);
	app.get('/ImageGallery/:id',_findById);
	app.post('/ImageGallery',_save);
	app.put('/ImageGallery/:id',_update);
	app.delete('/ImageGallery/:id',_delete);










}












