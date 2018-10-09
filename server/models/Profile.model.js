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
  bio: {
    type: String,
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
module.exports = Profile = mongoose.model('profile', ProfileSchema);
// module.exports = mongoose.model('profile', ProfileSchema);
