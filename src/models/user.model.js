// Trae la conexión a la base de datos
const pool = require('../config/database');

// Define una función que toma tiempo (async)
const getAll = async () => {
    // Espera el resultado del SELECT (await)
    const result = await pool.query(
        'SELECT id, nombre, email, created_at FROM users'
    );
    // Devuelve solo los datos
    return result.rows;
};

// Exporta la función para que otros archivos la usen
module.exports = { getAll };