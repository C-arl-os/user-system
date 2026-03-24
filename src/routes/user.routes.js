const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: 'Obtener todos los usuarios' });
});

router.post('/', (req, res) => {
    const {nombre, email, password} = req.body;
    res.json({
        message: 'Crear un nuevo usuario',
        data: {nombre, email, password}
    })
    
});


router.put('/:id', (req, res) => {
    res.json({ message: `Actualizar usuario con ID ${req.params.id}` });
}   );

router.delete('/:id', (req, res) => {
    res.json({ message: `Eliminar usuario con ID ${req.params.id}` });
});

module.exports = router;