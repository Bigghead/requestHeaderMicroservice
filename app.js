var express = require('express'),
    app = express(),
    ip = require('my-local-ip');

app.get('/api/whoami', function(req, res){
  var language = req.headers['accept-language'].split(',')[0];
  var opSystem = req.headers['user-agent'].split(/[()]+/).filter(function(e) { return e; })[1];

  console.log(ip());
  var returnedObj = {
    language : language,
    software : opSystem
  };
  res.send(returnedObj);
});

app.listen(4000, function(req, res){
  console.log('Listening on 4000');
});
