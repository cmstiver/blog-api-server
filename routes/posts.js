const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.post_list);
router.get('/:id', postController.post_detail);
router.post('/:id', postController.post_update);
router.post('/', postController.post_create);
router.delete('/:id', postController.post_delete);

module.exports = router;
