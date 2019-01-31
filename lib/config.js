"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQBJQYWzViBpXs1gPB2bemyzm1XhPF26dnIAtGY_b_UW-0kQGmgWbr_J9NylSqxSrtMFwiqCPT9lW_IUtiim9yhZo5ZMa6SLVRTPbhHtGeZ0CglhLA3S6Zk4m5uxdPGlcyZnm7clcSv2Xl4';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;