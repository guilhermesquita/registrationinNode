const db = require('./db');

const Post = db.sequelize.define('Posts', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true})
module.exports = Post