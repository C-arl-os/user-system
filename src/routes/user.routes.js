const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);

router.post('/', userController.create);

router.put('/:id', (req, res) => {
    res.json({ message: `Actualizar usuario con ID ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Eliminar usuario con ID ${req.params.id}` });
});

module.exports = router;