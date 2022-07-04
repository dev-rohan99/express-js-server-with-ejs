const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const expressLayouts = require('express-ejs-layouts');
const mongodbConnect = require('./src/config/db');


mongodbConnect();

// body data
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// multer



app.set('views', './src/views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);


// static folders
// app.use(express.static(path.join(__dirname, './src/public/')));
app.use('/src/assets', express.static(path.join(__dirname, '/src/assets')));
app.use('/uploads', express.static(path.join(__dirname, './src/uploads')));
// app.use('/uploads', express.static(path.join(__dirname, './src/uploads')));


// routes
app.use('/api/employee', require('./src/routes/employeRoute'));





module.exports = app;
