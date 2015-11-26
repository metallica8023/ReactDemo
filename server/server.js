/**
 * Created by zhaobo on 15/11/20.
 */
var express = require('express');
var app = express();

var port = process.env.PORT || 8024;
//return static assets
app.use(express.static('./public'));
app.use(express.static('./build'));
app.use('/', require('./render/render'));

if (require.main === module) {
	console.log('App started goto - http://0.0.0.0:' + port);
	app.listen(port);
}

module.exports = app;