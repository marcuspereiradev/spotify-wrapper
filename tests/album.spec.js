import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbumTracks } from '../src/album';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves();
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with correct URL', () => {
      const album = getAlbum('2034468626865798');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/2034468626865798');

      const album2 = getAlbum('1457291081167286');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1457291081167286');
    });
  });
});
