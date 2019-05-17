'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelves = require('../controllers/shelves');

var shelfController = _interopRequireWildcard(_shelves);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setupShelfRoutes(router) {
	router.get("/", shelfController.getShelves);
	router.post('/', shelfController.postShelf);
	router.get('/:id', shelfController.getShelf);
	router.put('/:id', shelfController.updateShelf);
	router.delete('/:id', shelfController.deleteShelf);
	// router.get('/:id/students', bookmarkController.getStudents)
}

exports.default = setupShelfRoutes;