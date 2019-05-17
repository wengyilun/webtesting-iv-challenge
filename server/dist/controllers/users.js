'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUsers = exports.getUser = undefined;

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUser = exports.getUser = async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const user = await _db2.default.getUserById(req.params.id);
		if (user.length > 0) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: 'this review does not exist' });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const getUsers = exports.getUsers = async (req, res, next) => {
	console.log('getUsers : getAllUsers');

	try {
		const users = await _db2.default.getUsers();
		res.status(200).json(users);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const postUser = exports.postUser = async (req, res) => {
	try {
		if (!req.body.name) {
			res.status(401).json({ message: 'Name is a required field' });
		}
		const lastId = await _db2.default.insertUser(req.body);
		res.status(201).json(lastId);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const updateUser = exports.updateUser = async (req, res) => {
	try {
		if (!req.body.name || !req.params.id) {
			res.status(401).json({ message: 'Name and id is a required field' });
		}
		const count = await _db2.default.updateUser(req.params.id, req.body);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
		} else {
			res.status(404).json({ message: 'this user does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteUser = exports.deleteUser = async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const count = await _db2.default.deleteUser(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
		} else {
			res.status(404).json({ message: 'this user does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};