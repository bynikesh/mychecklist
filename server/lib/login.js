const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(req) {
  const errors = {};
  req.email = !isEmpty(req.email) ? req.email : '';
  req.password = !isEmpty(req.password) ? req.password : '';

  if (!Validator.isEmail(req.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(req.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isLength(req.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 chars';
  }

  if (Validator.isEmpty(req.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
