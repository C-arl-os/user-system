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

const create = async (nombre, email, password) => {
    const result = await pool.query(
        'INSERT INTO users (nombre, email, password) VALUES ($1, $2, $3) RETURNING id, nombre, email, created_at',
        [nombre, email, password]
    );
    return result.rows[0];
};

const update = async (id, nombre, email) => {
    const result =await pool.query(
        'UPDATE users SET nombre=$1, email=$2 WHERE id=$3 RETURNING id, nombre, email, created_at',
        [nombre, email, id]
    );
    return result.rows[0];
};
// Exporta la función para que otros archivos la usen
module.exports = { getAll, create, update };