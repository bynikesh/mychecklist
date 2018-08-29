const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  content: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model('List', ListSchema);
