var express = require('express');
var compression = require('compression');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;

app = express();
app.use(compression());
app.use(serveStatic(__dirname + "/dist"));
app.listen(port);

console.log('server started '+ port);
