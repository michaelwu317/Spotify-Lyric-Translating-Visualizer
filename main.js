
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/web/index.html");
});

const { Lyrics } = require("./commands/lyrics");

app.get("/get-track-details", async function (req, res) {
    song = req.query.song
    artist = req.query.artist
    lyrics = await Lyrics(song, artist)
    res.send(lyrics)
});

app.get("/get-track-id"), function (req, res) {
  id = req.query.id
  characteristics = getTrackCharacteristics(id)
  res.send(characteristics.energy)
}

app.post('/get-language', async function (req, res) {
  translated = await translate(req.body.lyrics, req.body.language)

  response_body = {
    'translation': translated
  }

  res.send(JSON.stringify(response_body))
});

app.listen(8080, function() {
    console.log("Server is running on localhost8080");
}); 

var http = require('http');
const { getCurrentTrack, getTrackCharacteristics } = require("./tracks");
const { translate } = require("./commands/lyrics");

/** var http = require('http');

/* Create an HTTP server to handle responses */

/**http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  })
  .listen(8080); **/