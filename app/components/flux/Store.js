/**
 * Created by zhaobo on 15/11/20.
 */
var EventEmitter = require("event-emitter");
var CHANGE_EVENT = "changeEvent";

var Store = function() {
	this.emitter = new EventEmitter();
};

// Basic event handling functions

Store.prototype.emitChange = function() {
	this.emitter.emit(CHANGE_EVENT);
};

Store.prototype.addChangeListener = function(callback) {
	this.emitter.on(CHANGE_EVENT, callback);
};

Store.prototype.removeChangeListener = function(callback) {
	this.emitter.removeListener(CHANGE_EVENT, callback);
};



// Survey-specific methods
Store.prototype.saveSurvey = function(survey) {
	console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");

	this.emitChange();
}

Store.prototype.deleteSurvey = function(id) {
	console.debug("TODO: delete survey", id);

	this.emitChange();
}

Store.prototype.recordSurvey = function(results) {
	console.debug("TODO: record the survey results", results);

	this.emitChange();
}

Store.prototype.listSurveys = function(callback) {
	console.debug("TODO: fetch surveys from server via XHR");

	callback([]);
}

Store.prototype.getSurvey = function(id) {
	console.debug("TODO: fetch survey by id from server via XHR");

	callback({});
}

// The Store is a singleton, so export only the one instance.
module.exports = new Store();