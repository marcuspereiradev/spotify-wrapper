function searcher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    searchArtists: searcher.bind(this, 'artist'),
    searchAlbums: searcher.bind(this, 'album'),
    searchTracks: searcher.bind(this, 'track'),
    searchPlaylist: searcher.bind(this, 'playlist'),
  };
}
