const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true },
  published: { type: Boolean, default: true },
});

PostSchema.virtual('url').get(function () {
  return `${this._id}`;
});

module.exports = mongoose.model('post', PostSchema);
