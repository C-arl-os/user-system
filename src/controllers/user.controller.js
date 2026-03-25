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

module.exports = { getAll };