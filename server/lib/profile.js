const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(req) {
  const errors = {};
  req.handle = !isEmpty(req.handle) ? req.handle : '';
  // req.password = !isEmpty(req.password) ? req.password : '';

  if (!Validator.isLength(req.handle, { min: 3, max: 30 })) {
    errors.handle = 'handle must be min 3 and max of 30 character';
  }

  return {
    errors,
    isValid: isEmpty(errors),zz
  };
};
