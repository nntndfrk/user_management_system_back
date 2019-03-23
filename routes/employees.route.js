const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/employees.controller');

router.use(passport.authenticate('jwt', {session: false}));

router.get('/', employeesController.getEmployees);
router.get('/:id', employeesController.getEmployee);

router.post('/', employeesController.createEmployee);

module.exports = router;
