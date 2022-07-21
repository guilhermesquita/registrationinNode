const Sequelize = require('sequelize');
const sequelize = new Sequelize('registration', 'root', '260910', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}