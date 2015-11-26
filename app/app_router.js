/** @jsx React.DOM */
var React = require("react");

var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var NotFound = Router.NotFound;
// Handlers
var App = require('./components/App');
var NotFoundHandler = require('./components/not_found');
var List1 = require('./components/List1');
//console.log('NotFoundHandler',App);

var appRouter = (
	<Routes location="history">
		<Route title="SurveyBuilder" handler={App}>
			<Route name="list" path="/" handler={List1} />
			<NotFound title="Page Not Found" handler={NotFoundHandler}/>
		</Route>
	</Routes>
);

module.exports = appRouter;