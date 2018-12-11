import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');
import {search, searchAlbums, searchArtists, searchTracks, searchPlaylist} from '../src/main';

describe('Spotify', () => {
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
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
      fetchedStub.restore();
    });
    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search('Incubus', 'artist');
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Incubus&type=artist");
    });
  });
});
