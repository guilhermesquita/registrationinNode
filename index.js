const express = require('express');     
const app = express();
const bodyParser = require('body-parser')
const Post = require('./models/Post')
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

//ROUTES

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('forms')
    })

    app.post('/add', function(req, res){
        Post.create({   
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("[ERROR]")
        })
    })

app.listen(8082, function(){
    console.log("Servidor Rodando")
})