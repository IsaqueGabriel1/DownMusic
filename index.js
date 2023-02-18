const express = require("express")
const app = express();
const yt = require('yt-converter');
const bodyParser = require('body-parser')


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post("/baixarMusica", (req, res) => {
    const titulo = req.body.txtNome;
    const url = req.body.txtURL;
    const user = req.body.txtUser
    yt.convertAudio({
        url: url,
        itag: 140,
        directoryDownload: `C:/Users/${user}/Downloads/`,
        title: titulo
    }).then(res.redirect("downTrue.html"))
})

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () => {console.log("Rodando")})