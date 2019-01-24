import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylist,
} from './search';
import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';
import { API_URL } from './config';
// export {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchTracks,
//   searchPlaylist,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks,
// };
export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }
}
