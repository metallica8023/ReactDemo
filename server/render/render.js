/**
 * Created by zhaobo on 15/11/20.
 */
require('node-jsx').install({harmony: true});
var fs = require("fs");

var Router = require("react-router");

var app_router = require("../../app/app_router");
var router = require('express').Router({caseSensitive: true, strict: true});

var template = fs.readFileSync(__dirname + "/../../baseTpl.html", {encoding:'utf8'});
router.use(function (req, res, next) {
	//console.log(req);
	if (req.originalUrl == "/favicon.icon") {
		return next();
	}
	//res.send(template);
	Router.renderRoutesToString(app_router, req.originalUrl).then( function (data) {
		console.log('data', data);
		var html = template.replace(/\{\{body\}\}/, data.html);
		html = html.replace(/\{\{title\}\}/, data.title);
		res.status(data.httpStatus).send(html);

	}, function (err) {
		if (err.httpStatus == 302 && err.location) {
			return res.redirect(err.location);
		}
		if (err.httpStatus == 404) {
			return next();
		}

		next(err);
	});
	//res.end();
});

module.exports = router;