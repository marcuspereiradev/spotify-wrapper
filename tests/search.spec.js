import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');


describe('Search', () => {
  let spotify;
  let stubedFetch;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe('smoke tests', () => {
    it('should exist the spotify.search.searchAlbums method', () => {
      expect(spotify.search.searchAlbums).to.exist;
    });
    it('should exist the spotify.search.searchArtists method', () => {
      expect(spotify.search.searchArtists).to.exist;
    });
    it('should exist the spotify.search.searchTracks method', () => {
      expect(spotify.search.searchTracks).to.exist;
    });
    it('should exist the spotify.search.searchPlaylist method', () => {
      expect(spotify.search.searchPlaylist).to.exist;
    });
  });
  describe('spotify.search.SearchArtists', () => {
    it('should call fetch function', () => {
      const artist = spotify.search.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const artist = spotify.search.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artist2 = spotify.search.searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });
  describe('spotify.search.SearchAlbums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = spotify.search.searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });
  describe('spotify.search.SearchTracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = spotify.search.searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });
  describe('spotify.search.SearchPlaylist', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.searchPlaylist('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const playlists = spotify.search.searchPlaylist('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlists2 = spotify.search.searchPlaylist('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });
});
