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

router.get('/tweet/friends', function(req, res, next) {
  T.get('followers/list', { screen_name: 'tolga_tezel' },
    function (err, data, response) {
      res.status(200).send(data);
    });
});

router.post('/tweet/upload', function(req, res, next) {
  var message = 'Hi, there';
  T.post('statuses/update', { status: message },
    function(err, data, response) {
      res.status(200).send(data);
    })
});

module.exports = router;
