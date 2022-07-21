const express = require('express');     
const app = express();
const exphbs  = require('express-handlebars');
var handlebars = exphbs.create({
    defaultLayout: 'main'
    })

//Config Handlebars
//template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//conexão ao mysql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('registration', 'root', '260910', {
    host: "localhost",
    dialect: "mysql"
});

//ROUTES

    app.get('/cad', function(req, res){
        res.render('forms')
    })

    app.post('/add', function(req, res){
        res.send('Forms recept!')
    })

app.listen(8082, function(){
    console.log("Servidor Rodando")
})