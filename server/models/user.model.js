const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
// const secret = require('../config').secret;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name cannot be empty'],
  },
  email: {
    type: String,
    required: [true, 'cannot be empty.'],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

// module.exports = mongoose.model('User', UserSchema);
// export const User = mongoose.models.User || mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);
