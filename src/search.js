// fetch global
import { API_URL } from './config';
import { toJSON } from './utils';

const search = (query, type) => {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`).then(toJSON);
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
