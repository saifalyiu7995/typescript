function make_album(artist: string, album: string, tracks?: number): object {

    return tracks != null ?
        {
            'artist': artist,
            'album': album,
            'tracks': tracks
        } : {
            'artist': artist,
            'album': album
        };
}

console.log(make_album('Talha Anjum', 'Open Letter'));
console.log(make_album('Jokhay', 'Khana Badosh'));
console.log(make_album('Jokhay', 'Therapy'));
console.log(make_album('JJ47', 'Abi Mashoor Nahi', 7));