const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: { type: String, required: true, max: 100 },
  content: { type: String, required: true },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      text: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
  date: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model('List', ListSchema);
