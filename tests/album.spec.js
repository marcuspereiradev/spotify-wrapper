import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
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
  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const album = spotify.album.getAlbum('2034468626865798');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/2034468626865798');

      const album2 = spotify.album.getAlbum('1457291081167286');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1457291081167286');
    });
    it('should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('2034468626865798');
      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const albums = spotify.album.getAlbums(['uwhfuw8732572847582745', '75urjd39ie8u5jr8i3e9']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=uwhfuw8732572847582745,75urjd39ie8u5jr8i3e9');

      const albums2 = spotify.album.getAlbums(['1457291081167286', '2034468626865798']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=1457291081167286,2034468626865798');
    });
    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['uwhfuw8732572847582745', '75urjd39ie8u5jr8i3e9']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
  describe('getAlbumsTrack', () => {
    it('should call fetch method', () => {
      const tracks = spotify.album.getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const tracks = spotify.album.getAlbumTracks('322220058389212');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/tracks/322220058389212');

      const tracks2 = spotify.album.getAlbumTracks('1612565755648469');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/tracks/1612565755648469');
    });
    it('should return the correct data from Promise', () => {
      const tracks = spotify.album.getAlbumTracks('322220058389212');
      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
