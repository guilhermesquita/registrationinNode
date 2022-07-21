const express = require('express');     
const app = express();
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
var handlebars = exphbs.create({
    defaultLayout: 'main'
    })

//Config Handlebars
//template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//config Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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
        res.send("Texto: " + req.body.title + " Content: " + req.body.content)
    })

app.listen(8082, function(){
    console.log("Servidor Rodando")
})