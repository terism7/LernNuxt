var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/', function (req, res, next) {
  var token = req.body.token;
  var message = req.body.message;

  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': token
    },
    form: {
      message: message
    }
  }, (err, httpResponse, body) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        httpResponse: httpResponse,
        body: body
      });
    }
  });
});

module.exports = router;