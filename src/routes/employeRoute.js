const express = require('express');
const { getAllEmployees, addNewEmployee, getSingleEmployees, createExployeData, deleteEmployee, updateEmployee, getEmployeeEditForm } = require('../controllers/employeeController');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/'));
    },

    filename : (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

// load multer
const employeeFormMulter = multer({
    storage : storage
}).single('Photo');


router.get('/', getAllEmployees);
router.get('/add-employee', addNewEmployee);
router.post('/', employeeFormMulter, createExployeData);
router.get('/update/:id', getEmployeeEditForm);
router.post('/update/:id', employeeFormMulter, updateEmployee);
router.get('/:id', getSingleEmployees);
router.get('/delete/:id', deleteEmployee);




module.exports = router;
