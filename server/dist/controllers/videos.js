'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteVideo = exports.updateVideo = exports.postVideo = exports.getVideos = exports.getVideo = undefined;

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getVideo = exports.getVideo = async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const user = await _db2.default.getVideoById(req.params.id);
		if (user.length > 0) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: 'this video does not exist' });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const getVideos = exports.getVideos = async (req, res, next) => {

	try {
		const users = await _db2.default.getVideos();
		res.status(200).json(users);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const postVideo = exports.postVideo = async (req, res) => {
	try {
		if (!req.body.name) {
			res.status(401).json({ message: 'Name is a required field' });
		}
		const lastId = await _db2.default.insertVideo(req.body);
		res.status(201).json(lastId);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const updateVideo = exports.updateVideo = async (req, res) => {
	try {
		if (!req.body.name || !req.params.id) {
			res.status(401).json({ message: 'Name and id is a required field' });
		}
		const count = await _db2.default.updateVideo(req.params.id, req.body);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
		} else {
			res.status(404).json({ message: 'this video does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteVideo = exports.deleteVideo = async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const count = await _db2.default.deleteVideo(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
		} else {
			res.status(404).json({ message: 'this video does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};