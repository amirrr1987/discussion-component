const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, containerController.getContainers)
router.post('/', authMiddleware, containerController.createContainer)
// router.delete('/', authMiddleware, containerController.deleteContainers)
// router.get('/:containerId', authMiddleware, containerController.getContainerById)
// router.put('/:containerId', authMiddleware, containerController.updateContainerById)
// router.delete('/:containerId', authMiddleware, containerController.deleteContainerById)

module.exports = router;