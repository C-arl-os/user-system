const express = require('express')
const userRoutes = require('./src/routes/user.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo desde mi API' });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});