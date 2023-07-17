const mongoose = require('mongoose');
const employee = new mongoose.Schema({
   
    email : {
        type : String,
        required : true,
        unique:true
    },
    password : {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
},{timestamps : true});
const Employee = mongoose.model('Employee' ,employee);
module.exports = Employee;