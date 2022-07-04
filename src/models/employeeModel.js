const mongoose = require('mongoose');


const EmployeesDataSchema = mongoose.Schema({
    Name : {
        type : String,
        unique : true,
        trim : true,
        required : [true, 'All fields are required!']
    },

    Email : {
        type : String,
        unique : true,
        trim : true,
        required : [true, 'All fields are required!']
    },

    Address : {
        type : String,
        trim : true
    },

    Number : {
        type : String,
        unique : true,
        trim : true,
        required : [true, 'All fields are required!']
    },

    Photo : {
        type : String,
        unique : true,
        required : [true, 'All fields are required!'],
        default : 'avatar.png'
    },

    Gender : {
        type : String,
        required : [true, 'All fields are required!']
    }
});



const EmployeeModel = mongoose.model('employees', EmployeesDataSchema);

module.exports = EmployeeModel;
