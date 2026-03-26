const userService = require('../services/user.service');

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error al obtener usuarios' });
}
};

const create = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const newUser = await userService.create(nombre, email, password);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

module.exports = { getAll, create };