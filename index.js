var express = require('express');
var studentController = require('./controller/studentController');



var app = express();
//set up engine
app.set('view engine', 'ejs');
//set up stattic files
app.use(express.static('./public'));

//fire controller
studentController(app);


//dynamic rendering



app.listen(3001);
