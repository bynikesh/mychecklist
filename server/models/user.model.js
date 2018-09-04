const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'cannot be empty.'],
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'cannot be empty.'],
      lowercase: true,
      index: true,
    },
    password: {
      String,
      required: true,
    },
    date_created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.export = mongoose.model('User', UserSchema);
