const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



//initialize express
const app = express(); 

// connect to mongodb
mongoose.connect('mongodb://localhost/studentdb');
mongoose.Promise  = global.Promise;


app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});







app.listen(process.env.port ||7000, function(){
	console.log('server started');
});
