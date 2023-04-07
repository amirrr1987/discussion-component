const express = require('express');
const router = express.Router();

const controllers = require('../controllers');
// const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', controllers.commentController.createComment)
router.patch('/:commentId', controllers.commentController.updateComment)
router.get('/', controllers.commentController.getCommentById)
// router.post('/', controllers.commentController.getCommentById)
// router.delete('/', authMiddleware, containerController.deleteContainers)
// router.get('/:containerId', authMiddleware, containerController.getContainerById)
// router.put('/:containerId', authMiddleware, containerController.updateContainerById)
// router.delete('/:containerId', authMiddleware, containerController.deleteContainerById)

module.exports = router;