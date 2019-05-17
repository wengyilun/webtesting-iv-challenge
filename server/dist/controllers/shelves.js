'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteShelf = exports.updateShelf = exports.postShelf = exports.getShelves = exports.getShelf = undefined;

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getShelf = exports.getShelf = async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const user = await _db2.default.getShelfById(req.params.id);
		if (user.length > 0) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const getShelves = exports.getShelves = async (req, res, next) => {
	console.log('getShelves : getShelves');

	try {
		const users = await _db2.default.getShelves();
		res.status(200).json(users);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const postShelf = exports.postShelf = async (req, res) => {
	try {
		if (!req.body.name) {
			res.status(401).json({ message: 'Name is a required field' });
		}
		const lastId = await _db2.default.insertShelf(req.body);
		res.status(201).json(lastId);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const updateShelf = exports.updateShelf = async (req, res) => {
	try {
		if (!req.body.name || !req.params.id) {
			res.status(401).json({ message: 'Name and id is a required field' });
		}
		const count = await _db2.default.updateShelf(req.params.id, req.body);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
		} else {
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteShelf = exports.deleteShelf = async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const count = await _db2.default.deleteShelf(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
		} else {
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};