const yt = require('yt-converter');
const ytdl = require('ytdl-core')

exports.videoPost = (req, res) => {
    const titulo = req.body.txtNome;
    const url = req.body.txtURL;
    const user = req.body.txtUser
    ytdl.getInfo(url).then(info => {
        yt.convertVideo({
            url: url,
            itag: 136,
            directoryDownload: `C:/Users/${user}/Downloads/`,
            title: info.videoDetails.title
        }).then(res.redirect("downTrue.html"))

    })
}