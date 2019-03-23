const EmployeeModel = require('../models/employee.model');

module.exports.getEmployees = (req, res, next) => {
  EmployeeModel.find({}, (err, employees) => {
    if (err) {
      return next(err);
    }

    return res.json(employees);
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

module.exports.deleteEmployee = (req, res, next) => {
  EmployeeModel.findByIdAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      next.error(err)
    }

    return res.json({status: 'OK'})
  })
};

module.exports.updateEmployee = (req, res, next) => {
  EmployeeModel.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, (err) => {
    if (err) {
      next.error(err)
    }

    return res.json({status: 'OK'})
  })
};

module.exports.createEmployee = async (req, res, next) => {
  try {
    await EmployeeModel.createEmployee(req);
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
