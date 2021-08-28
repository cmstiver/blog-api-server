const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

router.get('/test', (req, res) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token,
  });
});

router.post('/comments/:id/delete', commentController.comment_delete);

router.post('/posts/:id', postController.post_update);
router.post('/posts', postController.post_create);
router.post('/posts/:id/delete', postController.post_delete);

module.exports = router;
