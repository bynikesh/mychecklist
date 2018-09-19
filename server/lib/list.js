const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateListInput(req) {
  const errors = {};
  req.title = !isEmpty(req.title) ? req.title : '';
  req.content = !isEmpty(req.content) ? req.content : '';

  if (!Validator.isLength(req.title, { max: 100 })) {
    errors.title = 'title must not exceed 100 character';
  }

  if (!Validator.isLength(req.body, { max: 300 })) {
    errors.content = 'content must not exceed 100 character';
  }

  if (Validator.isEmpty(req.body)) {
    errors.content = 'content is required';
  }

  if (Validator.isEmpty(req.title)) {
    errors.title = 'content is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
