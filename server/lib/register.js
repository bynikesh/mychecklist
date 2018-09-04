const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(req) {
  const errors = {};
  req.name = !isEmpty(req.name) ? req.name : '';
  req.email = !isEmpty(req.email) ? req.email : '';
  req.password = !isEmpty(req.password) ? req.password : '';
  req.password_confirm = !isEmpty(req.password_confirm) ? req.password_confirm : '';

  if (!Validator.isLength(req.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(req.name)) {
    errors.name = 'Name field is required';
  }

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

  if (!Validator.isLength(req.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = 'Password must have 6 chars';
  }

  if (!Validator.equals(req.password, req.password_confirm)) {
    errors.password_confirm = 'Password and Confirm Password must match';
  }

  if (Validator.isEmpty(req.password_confirm)) {
    errors.password_confirm = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
