var express = require('express');
var router = express.Router();

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'nyiopp8B7ny8Qvk6oCc5US269',
  consumer_secret:      'nyGJLiN3pdcHXeZsdfjIDto7byFl7NW8jS0eOFWFvkumGXRgcj',
  access_token:         '171313967-PqQoXaY2mFofm8FsGD1vVbYPr8wsaBoRkUVOWTZp',
  access_token_secret:  'w5icoyhVRhisUxn1xcNdoW3ZImzOPXUVtCuaxI1ee9caV',
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
