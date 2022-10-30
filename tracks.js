function getCurrentTrack() {
    body = fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDLB27f4cAiUGEYkKhs1n3d39v_CodCanNa8XfCc06UoT5XbgS3fAJTzgS0PoQXz3SLUdobCo5_erX3VxvXqF4bb4DLOssHOPUnhF0YmQpfRSESduBjflGAhsRlw5st9nPY6bHpMw_ocT1JYCy_GUBelWlTzskx-vAQiuxavNp5cB4hhZCX_V61uNSwv-tmju6FH3Ut'
    }
    }).then((response) => response.json())
    .then((data) => console.log(data.item.id));
}

function getTrackCharacteristics(trackID) {
    body = fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDLB27f4cAiUGEYkKhs1n3d39v_CodCanNa8XfCc06UoT5XbgS3fAJTzgS0PoQXz3SLUdobCo5_erX3VxvXqF4bb4DLOssHOPUnhF0YmQpfRSESduBjflGAhsRlw5st9nPY6bHpMw_ocT1JYCy_GUBelWlTzskx-vAQiuxavNp5cB4hhZCX_V61uNSwv-tmju6FH3Ut'
    }
    }).then((response) => response.json())
    .then((data) => console.log(data));
}

module.exports = { getCurrentTrack, getTrackCharacteristics }
