// Importa bcrypt para encriptar passwords
const bcrypt = require('bcrypt');

// Importa el model para hablar con la base de datos
const userModel = require('../models/user.model');

// Función para obtener todos los usuarios
const getAll = async () => {
    // Le pide al model que consulte la BD
    const users = await userModel.getAll();
    return users;
};

// Función para crear un usuario nuevo
const create = async (nombre, email, password) => {
    // Encripta el password antes de guardarlo
    // 10 = cuántas veces lo procesa (más = más seguro)
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Le manda al model los datos con password ya encriptado
    const newUser = await userModel.create(nombre, email, hashedPassword);
    
    // Devuelve el usuario creado
    return newUser;
};

module.exports = { getAll, create };