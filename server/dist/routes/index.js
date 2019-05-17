'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _videos = require('./videos');

var _videos2 = _interopRequireDefault(_videos);

var _bookmarks = require('./bookmarks');

var _bookmarks2 = _interopRequireDefault(_bookmarks);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _reviews = require('./reviews');

var _reviews2 = _interopRequireDefault(_reviews);

var _shelves = require('./shelves');

var _shelves2 = _interopRequireDefault(_shelves);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupRoutes(app) {
	// Auth
	const authRouter = _express2.default.Router();
	(0, _auth2.default)(authRouter);
	app.use('/api/auth', authRouter);

	// Video
	const videoRouter = _express2.default.Router();
	(0, _videos2.default)(videoRouter);
	app.use('/api.js/video', videoRouter);

	// User
	const userRouter = _express2.default.Router();
	(0, _users2.default)(userRouter);
	app.use('/api.js/users', userRouter);

	// Bookmark
	const bookmarkRouter = _express2.default.Router();
	(0, _bookmarks2.default)(bookmarkRouter);
	app.use('/api.js/bookmarks', bookmarkRouter);

	// Review
	const reviewRouter = _express2.default.Router();
	(0, _reviews2.default)(reviewRouter);
	app.use('/api.js/reviews', reviewRouter);

	// Shelf
	const shelfRouter = _express2.default.Router();
	(0, _shelves2.default)(shelfRouter);
	app.use('/api.js/shelves', shelfRouter);

	app.get('/', async (req, res) => {
		console.log('root route called');
	});
}

exports.default = setupRoutes;