const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create student schema 
const studentSchema = new Schema({
	firstname:String,
	lastname: String,
	dob: String,
	Address: String,
	sex: String,
	class: String

});
// create a model

const Student = mongoose.model('studentBio', studentSchema);

module.exports = Student;  