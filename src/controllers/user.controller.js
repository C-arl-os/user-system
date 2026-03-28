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
        if (error.code === '23505') {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const { nombre, email } = req.body;
        const updatedUser = await userService.update(id, nombre, email);
        res.json(updatedUser);  
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al actualizar usuario' });
    }


};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await userService.deleteById(id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
};
module.exports = { getAll, create, update, deleteById };