const search = (query, type) => {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());
};
const searchArtists = (query) => {
  search(query, 'artist');
};
const searchAlbums = (query) => {
  search(query, 'album');
};
const searchTracks = (query) => {
  search(query, 'track');
};
const searchPlaylist = (query) => {
  search(query, 'playlist');
};

export {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylist,
};
