const express = require('express');

const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/:postid', commentController.comment_list);
router.post('/', commentController.comment_create);

module.exports = router;
