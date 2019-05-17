'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function startServer({ port = process.env.SERVER_PORT } = {}) {
	console.log('startServer');
	port = 3000;
	const app = (0, _express2.default)();
	app.use((0, _helmet2.default)());
	app.use((0, _cors2.default)());
	app.use(_express2.default.json());

	(0, _routes2.default)(app);

	app.listen(port, () => {
		console.log("Server listening at 3000");
	});
}

exports.default = startServer;