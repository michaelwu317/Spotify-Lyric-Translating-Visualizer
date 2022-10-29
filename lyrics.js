
import { getLyrics, getSong } from 'genius-lyrics-api';
 
function getCurrentTrack() {
    body = fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQCLykRgm-FGAn4wrTcNaWKJ2VTtkYVyswcwcB5v19Z142yynZ8RZrUZtLUcyUA40o_Y9m9Fw6Wrai5dURzYKNv6oW0OpNPyiAn23_cph8zNKGtttfH_Yd0lo19-7MRv7jJW2lrTJ8Un7dwwneKPqStYzStahLkn8qTZEiYrN4fVOPDmr2ndrY24VeY9hgo5BEWbjd-a'
    }
    }).then((response) => response.json())
    .then((data) => console.log(data));
}

function getTrackCharacteristics(trackID) {
    body = fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQCLykRgm-FGAn4wrTcNaWKJ2VTtkYVyswcwcB5v19Z142yynZ8RZrUZtLUcyUA40o_Y9m9Fw6Wrai5dURzYKNv6oW0OpNPyiAn23_cph8zNKGtttfH_Yd0lo19-7MRv7jJW2lrTJ8Un7dwwneKPqStYzStahLkn8qTZEiYrN4fVOPDmr2ndrY24VeY9hgo5BEWbjd-a'
    }
    }).then((response) => response.json())
    .then((data) => console.log(data));
}

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

