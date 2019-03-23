const EmployeeModel = require('../models/employee.model');

module.exports.getEmployees = (req, res, next) => {
  EmployeeModel.find({}, (err, employees) => {
    if (err) {
      return next(err);
    }

    return res.json(...employees);
  });
};

module.exports.getEmployee = (req, res, next) => {
  EmployeeModel.findOne({_id: req.params.id}, (err, employee) => {
    if (err) {
      next.error(err)
    }

    return res.json(employee);
  });
};

module.exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await EmployeeModel.createEmployee(req);
    res.status(201).json(
      {
        success: true,
        message: 'employee created'
      }
    )
  } catch (e) {
    next(e);
  }
};
