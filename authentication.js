var request = require('request'); // "Request" library

var client_id = 'ff45dabc23e54eb191262fbc8b17d458'; // Your client id
var client_secret = 'd7e053b851104123870bb06049e27584'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
// let auth;
let auth;
function extract(error, response, body) {
    if (!error && response.statusCode === 200) {
  
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/users/21ixa2stpyvp2uz4ra2fj6cja',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      console.log(options.headers.Authorization);
      //return options.headers.Authorization;
    }
  }
request.post(authOptions, extract);

console.log(auth);

