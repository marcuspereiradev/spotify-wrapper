"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQD87u2-eXmunVZMixXWA72j1q5TGA0kBsic-92BkBv1YB-AZEQH8lP3TvjABOdrXgb7UIJZHaZX9ciCoc9mQgq27dzMSj1jwoxMkzOsgsmi_oHC9ogX4EWeIjLs7Zonc3mR1B74qEI0MJI';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;