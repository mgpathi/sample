const mongoose = require('mongoose');
 
mongoose.connect('mongodb://rootuser:Mon8oCN2@192.168.1.143:1611/admin', {useNewUrlParser: true}, (err) => {
//mongoose.connect('mongodb://localhost:27017/local_db', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');