var express = require('express');
var router = express.Router();

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'your consumer key',
  consumer_secret:      'your consumer secret',
  access_token:         'your access token',
  access_token_secret:  'your access token secret',
  timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});

module.exports = router;
