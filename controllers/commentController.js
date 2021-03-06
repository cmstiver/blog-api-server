const { body, validationResult } = require('express-validator');

const Comment = require('../models/comment');

exports.comment_list = (req, res, next) => {
  Comment.find({ postid: req.params.postid })
    .sort({ date: -1 })
    .exec((err, listComments) => {
      if (err) {
        return next(err);
      }
      return res.send(listComments);
    });
};

exports.comment_create = [
  body('name', 'Name must not be empty.').trim().isLength({ min: 1, max: 100 }).escape(),
  body('body', 'Body must not be empty.').trim().isLength({ min: 1, max: 5000 }).escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    const comment = new Comment({
      name: req.body.name,
      body: req.body.body,
      date: req.body.date,
      postid: req.body.postid,
    });

    if (!errors.isEmpty()) {
      return res.send(errors);
    }
    comment.save((err) => {
      if (err) {
        return next(err);
      }
      return res.send(comment);
    });
  },
];

exports.comment_delete = (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id).exec((err, listComments) => {
    if (err) {
      return next(err);
    }
    return res.send(listComments);
  });
};
