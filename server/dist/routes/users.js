'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _users = require('../controllers/users');

var userController = _interopRequireWildcard(_users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setupUserRoutes(router) {
	router.get("/", userController.getUsers);
	router.post('/', userController.postUser);
	router.get('/:id', userController.getUser);
	router.put('/:id', userController.updateUser);
	router.delete('/:id', userController.deleteUser);
	// router.get('/:id/students', bookmarkController.getStudents)
}

exports.default = setupUserRoutes;