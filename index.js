require('dotenv').config();
const express = require('express')
const userRoutes = require('./src/routes/user.routes');
const pool = require('./src/config/database');

const app = express();
const PORT = process.env.PORT;

pool.connect()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('Error al conectar a la base de datos', err.message));

app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo desde mi API' });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});