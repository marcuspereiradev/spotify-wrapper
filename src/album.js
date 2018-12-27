const getAlbum = (id) => {
  fetch(`https://api.spotify.com/v1/albums/${id}`);
};
const getAlbumTracks = () => {};
export {
  getAlbum,
  getAlbumTracks,
};
