const oauth = "Bearer BQCXZq9KjUm5YD736PvJFq6gy3EFrIQCjnY76PcymWfNhHG1GENlA2UQ0LREBOZRf1IlxjKxuXm0Odpz8RKowCvyBs6j5FQrekQyY0ScxqqjY2cF5Jc";
import { getLyrics, getSong } from 'genius-lyrics-api';
 
function getCurrentTrack() {
    let body = fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': oauth
    }
    }).then((response) => response.json())
    .then((data) => console.log(data));
}

function getTrackCharacteristics(trackID) {
    body = fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': oauth
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
const lang = {
        en: "English",
        ar: "Arabic",
        az: "Azerbaijani",
        zh: "Chinese",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch",
        eo: "Esperanto",
        fi: "Finnish",
        fr: "French",
        de: "German",
        el: "Greek",
        he: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        id: "Indonesian",
        ga: "Irish",
        it: "Italian",
        ja: "Japanese",
        ko: "Korean",
        fa: "Persian",
        pl: "Polish",
        pt: "Portugese",
        ru: "Russian",
        sk: "Slovak",
        es: "Spanish",
        sv: "Swedish",
        tr: "Turkish",
        uk: "Ukranian",
      };
    
    async function translateLyrics(lyrics, lng){
        const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: lyrics,
            source: lang.en,
            target: lang.lng
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(await res.json());
    }

//Lyrics("Blinding Lights", "The Weeknd");

//Lyrics("Mr. Brightside", "The Killers");

//translateLyrics(Lyrics("Blinding Lights", "The Weeknd"), "es"); 

console.log(getCurrentTrack());