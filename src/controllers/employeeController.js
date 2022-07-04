const EmployeeModel = require("../models/employeeModel");

/**
 * @desc get all employees data
 * @name GET /employee/
 * @access public
 */
const getAllEmployees = async (req, res) => {

    let employees = await EmployeeModel.find();
    res.render('index', { employees });

}

/**
 * @desc crate employees data
 * @name GET /employee/
 * @access public
 */
const addNewEmployee = (req, res) => {

    res.render('create');

}


/**
 * show employee data
 * @param {*} req 
 * @param {*} res 
 */
const getSingleEmployees = async (req, res) => {

    let id = req.params.id;
    let employee = await EmployeeModel.findById(id);
    res.render('show', { employee });

}


const deleteEmployee = async (req, res) => {

    let id = req.params.id;
    await EmployeeModel.findByIdAndDelete(id);
    res.redirect('/api/employee');

}


const getEmployeeEditForm = async (req, res) => {

    let id = req.params.id;
    let editEmployee = await EmployeeModel.findById(id);
    res.render('update', { editEmployee });

}

const updateEmployee = async (req, res) => {

    const oldPhotoName = req.body.OldPhoto;

    if(!req.file){
        let id = req.params.id;
        await EmployeeModel.findByIdAndUpdate(id, {...req.body, Photo : oldPhotoName});
        res.redirect('/api/employee');
    }else{
        if(!oldPhotoName){
            let id = req.params.id;
            await EmployeeModel.findByIdAndUpdate(id, {...req.body, Photo : req.file.filename});
            res.redirect('/api/employee');
        }
    }

}





const createExployeData = (req, res) => {
    
    EmployeeModel.create({
        ...req.body,
        Photo : req.file.filename
    })
    res.redirect('/api/employee');

}



module.exports = {
    getAllEmployees,
    addNewEmployee,
    getSingleEmployees,
    createExployeData,
    deleteEmployee,
    updateEmployee,
    getEmployeeEditForm,
}

