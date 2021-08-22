const { body, validationResult } = require('express-validator');

const Post = require('../models/post');

exports.post_list = (req, res, next) => {
  Post.find().exec((err, listPosts) => {
    if (err) {
      return next(err);
    }
    return res.send(listPosts);
  });
};

exports.post_create = [
  body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('body', 'Body must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('image', 'Image must not be empty.').isURL().withMessage('Image URL must be a valid URL.'),

  (req, res, next) => {
    const errors = validationResult(req);

    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      date: req.body.date,
      image: req.body.image,
      published: req.body.published,
    });

    if (!errors.isEmpty()) {
      return res.send(errors);
    }
    post.save((err) => {
      if (err) {
        return next(err);
      }
      return res.send(post);
    });
  },
];

exports.post_detail = (req, res, next) => {
  Post.findById(req.params.id).exec((err, post) => {
    if (err) {
      return next(err);
    }
    return res.send(post);
  });
};
