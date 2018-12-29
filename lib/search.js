"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylist = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

// fetch global
var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type)).then(_utils.toJSON);
};

exports.search = search;

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylist = function searchPlaylist(query) {
  search(query, 'playlist');
};

exports.searchPlaylist = searchPlaylist;