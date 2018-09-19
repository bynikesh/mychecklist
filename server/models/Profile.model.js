const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  handle: {
    type: String,
    required: true,
    lowercase: true,
    max: 30,
  },
  gender: {
    type: String,
    required: true,
  },
  social: {
    github: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
