const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 3,
  },
  body: {
    type: String,
    required: true,
    maxLength: 5000,
    minLength: 3,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('comment', CommentSchema);
