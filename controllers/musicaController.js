const yt = require('yt-converter');
const ytdl = require('ytdl-core')
exports.musicaPost = (req, res) => {
    const titulo = "";
    const url = req.body.txtURL;
    const user = req.body.txtUser
    ytdl.getInfo(url).then(info => {
        yt.convertAudio({
            url: url,
            itag: 140,
            directoryDownload: `C:/Users/${user}/Downloads/`,
            title: info.videoDetails.title
        }).then(res.redirect("downTrue.html"))
    })
}