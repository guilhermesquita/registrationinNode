const Sequelize = require('sequelize');
const sequelize = new Sequelize('registration', 'root', '260910', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}