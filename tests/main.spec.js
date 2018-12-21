import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylist,
} from '../src/main';

chai.use(sinonChai);
global.fetch = require('node-fetch');


describe('Spotify', () => {
  let stubedFetch;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe('smoke tests', () => {
    it('should exist search method', () => {
      expect(search).to.exist;
    });
    it('should exist searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exist searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist searchPlaylist method', () => {
      expect(searchPlaylist).to.exist;
    });
  });
  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'album');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
      context('passing more than one type', () => {
        const artistAndAlbums = search('Incubus', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });
    it('should return the JSON Data from the Promise', () => {
      search('Incubus', 'artist').then((artists) => {
        expect(artists).to.be.eql({ album: 'name' });
      });
    });
  });
  describe('SearchArtists', () => {
    it('should call fetch function', () => {
      const artist = searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const artist = searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artist2 = searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });
  describe('SearchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });
  describe('SearchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });
  describe('SearchPlaylist', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylist('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch correct URL', () => {
      const playlists = searchPlaylist('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlists2 = searchPlaylist('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });
});
