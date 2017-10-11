const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//get the list of all student from the db
router.get('/student', function(req,res, next){
	Student.find({}).then(function(allStudent){
		res.send(allStudent);
	});
});

// get the details of a particular student
router.get('/student/:id', function(req,res, next){
	Student.find({_id: req.params.id}).then(function(student){
		res.send(student);
	});

});

// adds new students to db 
router.post('/student', function(req,res, next){
	Student.create(req.body).then(function(student){
		res.send(student);
	}).catch(next);

});

//update students info
router.put('/student/:id', function(req,res, next){
	Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Student.findOne({_id: req.params.id}).then(function(update){
			res.send(update);
		});
	});
});


//deletes student from the db
router.delete('/student/:id', function(req,res, next){
	Student.findByIdAndRemove({_id: req.params.id}).then(function(student){
		res.send(student);
	});
});

module.exports = router;

