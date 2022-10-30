const oauth = 'Bearer BQD2mIFVyjJynsJybi26Zzt4pAIkx7CgBIJSAg6OChosDkIbA_okDEeREtr7LV_oRrepMtCyYGlpiJFkBG8BGFB5iCkEZ5DaV-WURESp-eRC0px9t4xPe16Fh_TUckA3Mqqc5_VyM0S0V6XL46CDs-wbGTuTe_yJdLg92qbF8J0qEfxfFAF73930DmrYVBJdkKBAIXOsn0An4ANqf2ck5tE';
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
    
    //async function translateSong(lyrics,)
    async function translate(lyrics, lang) {
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
    body: '------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="q"\r\n\r\n'+lyrics+'\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="source"\r\n\r\nes\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="target"\r\n\r\n'+lang+'\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="format"\r\n\r\ntext\r\n------WebKitFormBoundaryShozRedHfOMwzyBE\r\nContent-Disposition: form-data; name="api_key"\r\n\r\n\r\n------WebKitFormBoundaryShozRedHfOMwzyBE--\r\n'
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