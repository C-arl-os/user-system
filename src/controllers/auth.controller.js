const userService = require('../services/auth.service');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ message: 'Error de autenticación' });
    }


};

module.exports = { login };