const userModel = require('../models/user.model');

const getAll = async () => {
    const users = await userModel.getAll();
    return users;
};

module.exports = { getAll };