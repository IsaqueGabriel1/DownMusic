const express = require("express")
const app = express();
const bodyParser = require('body-parser')
//importando os modulos com as rotas para download
const controllersMusica = require('./controllers/musicaController')
const controllersVideo = require('./controllers/videoController')
//configurando pasta public para servir as paginas
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./views');
//configurando o bodyParser, usado para capturar os paramentros enviados via post
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rota para baixar musicas do youtube
app.post('/baixarMusica', controllersMusica.musicaPost)
//rota para baixar videos do youtube
app.post('/baixarVideo', controllersVideo.videoPost)
//rota principal
app.get("/", (req, res) => {
    res.render("downTrue")
})


app.listen(3000, () => {console.log("Rodando")})