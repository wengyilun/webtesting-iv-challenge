'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bookmarks = require('../controllers/bookmarks');

var bookmarkController = _interopRequireWildcard(_bookmarks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setupBookmarkRoutes(router) {
	router.get("/", bookmarkController.getBookmarks);
	router.post('/', bookmarkController.postBookmark);
	router.get('/:id', bookmarkController.getBookmarkById);
	router.put('/:id', bookmarkController.updateBookmark);
	router.delete('/:id', bookmarkController.deleteBookmark);
	// router.get('/:id/students', bookmarkController.getStudents)
}

exports.default = setupBookmarkRoutes;