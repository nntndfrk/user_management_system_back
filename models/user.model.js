const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const validateEmail = require('./validators');

const UserSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  email: {
    type: String, unique: true, required: true, max: 32, validate: [
      validateEmail, 'Please fill a valid email address'
    ]
  },
  password: {type: String, required: true, max: 32}
}, { versionKey: false });

UserSchema.pre('save', function (next) {
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

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User', UserSchema);
