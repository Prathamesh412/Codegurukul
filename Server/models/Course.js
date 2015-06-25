var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
name:String,
featured:String,
published:String,
batch:String,
time:Date
});



//Compile schema into a mongoose model
var Course = mongoose.model('Course',courseSchema);


module.exports = mongoose.model('Course',courseSchema);