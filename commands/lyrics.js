const oauth = 'Bearer BQD7v2agNGVkk9RHFrKq3UdX0-MPpPuXrLCNmS_H1z3wYk7bSlva8vtalmDMpAdxLI21UbnDlijSjxyBOga3cW1QMIqKRKzIPS5xjPWBAPXh4RJbNZ8mT-tFYUKE5VU1K_WbeNkgLRcXkOSNdj_GU460BW8oCu8g48icsL4T0TArhQMiZEJkuZN2cE0me0iJf0pb2OgB';
const { getLyrics, getSong } = require("genius-lyrics-api");
 
async function getCurrentTrack() {
    await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
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

 async function Lyrics(song, artist){
    var options = {
        apiKey: 'YHUqc2XDBg0S5eD9csE8gIVANK0z-Pc4tzG5PlUcUL6DOnEIf6Z6DLxbjxJPZewT',
        title: song,
        artist: artist,
        optimizeQuery: true
    };

    lyrics = await getLyrics(options);
    return lyrics;
    // getLyrics(options).then((lyrics) => console.log(lyrics));

    // getSong(options).then((song) =>
	// console.log(`
	// ${song.id}
	// ${song.title}
	// ${song.url}
	// ${song.albumArt}
	// ${song.lyrics}`));
    // return songl;
}

const lang = {
    "English": "en",
    "Arabic": "ar",
    "Azerbaijani" : "az",
    "Chinese" : "zh",
    "Czech" : "cs",
    "Danish" : "da",
    "Dutch" : "nl",
    "Esperanto" : "eo",
    "Finnish" : "fi",
    "French" : "fr",
    "German" : "de",
    "Greek" : "el",
    "Hebrew" : "he",
    "Hindi" : "hi",
    "Hungarian" : "hu",
    "Indonesian" : "id",
    "Irish" : "ga",
    "Italian" : "it",
    "Japanese" : "ja",
    "Korean" : "ko",
    "Persian" : "fa",
    "Polish" : "pl",
    "Portugese" : "pt",
    "Russian" : "ru",
    "Slovak" : "sk",
    "Spanish" : "es",
    "Swedish" : "sv",
    "Turkish" : "tr",
    "Ukranian" : "uk",
      };
    
    //async function translateSong(lyrics,)
    async function translate(lyrics, selected_lang) {
        //console.log("params", lang)
    let x;
        await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: {
        'authority': 'libretranslate.com',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryShozRedHfOMwzyBE',
        'cookie': '_ga=GA1.1.608833753.1666833854; _ga_KPKM1EP5EW=GS1.1.1667100652.5.1.1667100660.0.0.0',
        'origin': 'https://libretranslate.com',
        'referer': 'https://libretranslate.com/?source=en&target=es&q=jerfgjegkjrefff',
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
    },
    body: '------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="q"\r\n\r\n'+lyrics+'\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="source"\r\n\r\nes\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="target"\r\n\r\n'+lang[selected_lang]+'\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="format"\r\n\r\ntext\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="api_key"\r\n\r\n\r\n------WebKitFormBoundaryShozRedHfOMwzyBE--\r\n'
}).then((response) => response.json()).then(function (data) {x = data.translatedText});
    console.log(x);
    return x;
    }

    /*async function translateLyrics(lyrics, lng){
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

Lyrics("Blinding Lights", "The Weeknd");

//Lyrics("Mr. Brightside", "The Killers");

// translateLyrics(Lyrics("Blinding Lights", "The Weeknd"), "es"); 

console.log(getCurrentTrack()); */

module.exports = { Lyrics, translate }