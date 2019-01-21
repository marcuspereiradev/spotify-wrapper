"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQD-VmtvnUxSIwH9EO-lk571gJ4UHcP1XYY_60LWL4cY2CpOOjqXeZzJjH6NEZFfkCfsw6JR52Fn-ICqfwYNpCSh0pWjBrMXnxNfhLWgdZf5RvXmUXqF2wNinSs3ezGMQKW-KWTPGvRZ4BI';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;