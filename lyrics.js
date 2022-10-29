
import { getLyrics, getSong } from 'genius-lyrics-api';
 
function Lyrics(song, artist){
    var options = {
        apiKey: 'YHUqc2XDBg0S5eD9csE8gIVANK0z-Pc4tzG5PlUcUL6DOnEIf6Z6DLxbjxJPZewT',
        title: song,
        artist: artist,
        optimizeQuery: true
    };

    getLyrics(options).then((lyrics) => console.log(lyrics));

    getSong(options).then((song) =>
	console.log(`
	${song.id}
	${song.title}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
);
}

Lyrics("Blinding Lights", "The Weeknd");

Lyrics("Mr. Brightside", "The Killers");

