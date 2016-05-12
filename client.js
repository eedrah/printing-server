var request = require('request');

var r = request.post('http://localhost:3000');

process.stdin.pipe(r).pipe(process.stdout);
