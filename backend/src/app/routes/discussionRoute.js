const express = require('express');
const router = express.Router();

const discussionController = require('../controllers/discussionController');
// const authMiddleware = require('../middlewares/authMiddleware')

router.get('/:discussionId', discussionController.getDiscussionById)
router.post('/', discussionController.createDiscussion)
// router.delete('/', authMiddleware, containerController.deleteContainers)
// router.get('/:containerId', authMiddleware, containerController.getContainerById)
// router.put('/:containerId', authMiddleware, containerController.updateContainerById)
// router.delete('/:containerId', authMiddleware, containerController.deleteContainerById)

module.exports = router;