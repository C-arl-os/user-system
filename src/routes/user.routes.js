const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.get('/', verifyToken, userController.getAll);

router.post('/', userController.create);

router.put('/:id', verifyToken, userController.update);

router.delete('/:id', verifyToken, userController.deleteById);
module.exports = router;