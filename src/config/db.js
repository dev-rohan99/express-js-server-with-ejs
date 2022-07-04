const mongoose = require('mongoose');
const dotenv = require('dotenv').config();



const mongodbConnect = () => {
    const URL = 'mongodb+srv://crud:crud9900@cluster0.knhes.mongodb.net/ejs?retryWrites=true&w=majority';
    // const OPTION = { autoindex : true }

    mongoose.connect(URL, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Connected!');
        }
    });

}


module.exports = mongodbConnect;

