const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const validateEmail = require('./validators');

const EmployeeSchema = new Schema({
  firstName: {type: String, required: true, max: 32},
  lastName: {type: String, required: true, max: 32},
  email: {
    type: String, required: true, unique: true, max: 32, validate: [
      validateEmail, 'Please fill a valid email address'
    ]
  },
  password: {type: String, required: true, max: 32}
}, { versionKey: false });

EmployeeSchema.pre('save', function (next) {
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
  }
});

EmployeeSchema.statics.createEmployee = function (req) {
  return this.create(req.body);
};

EmployeeSchema.statics.deleteEmployee = function (req) {
  return this.findByIdAndRemove(req.params.id, function () {
    
  });
};

module.exports = mongoose.model('Employee', EmployeeSchema);
