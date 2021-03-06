"use strict";

//
// Debugging
//

// Declare DEBUG constant, but be sure we aren't in production
var DEBUG = Browser.inProduction() ? 0 : 1;

// Disable logging if in production
if (!DEBUG) {
	window.console = {};
	window.console.log = function(){};
	window.console.info = function(){};
	window.console.warn = function(){};
	window.console.error = function(){};
}

//
// Shorthand to localStorage, used everywhere
//

var ls = localStorage;

//
// All other constants
//

// API server
var API_SERVER = 'https://passoa.online.ntnu.no/api/';

// Loops & intervals
var BACKGROUND_LOOP = 60000; // 60s
var BACKGROUND_LOOP_DEBUG = 5000; // 5s, respond fairly quickly for us developers
var PAGE_LOOP = 10000; // 10s
var PAGE_LOOP_DEBUG = 5000; // 5s
var ONLINE_MESSAGE = '\nNow online, run mainloop\n';
var OFFLINE_MESSAGE = '\nNow offline, stop execution\n';

// Update stuff at every X intervals
var UPDATE_AFFILIATION_INTERVAL = 1; // recommended: 1
var UPDATE_CANTINAS_INTERVAL = 60; // recommended: 60
var UPDATE_BUS_INTERVAL = 2; // recommended: 1
var UPDATE_NEWS_INTERVAL = 20; // recommended: 20
