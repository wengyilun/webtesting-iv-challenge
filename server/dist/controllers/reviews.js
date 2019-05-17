'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteReview = exports.updateReview = exports.postReview = exports.getReviews = exports.getReview = undefined;

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getReview = exports.getReview = async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const student = await _db2.default.getReviewById(req.params.id);
		if (student.length > 0) {
			res.status(200).json(student);
		} else {
			res.status(404).json({ message: 'this review does not exist' });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const getReviews = exports.getReviews = async (req, res, next) => {
	console.log('getReviews : getAllReviews');

	try {
		const students = await _db2.default.getReviews();
		res.status(200).json(students);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const postReview = exports.postReview = async (req, res) => {
	try {
		if (!req.body.name) {
			res.status(401).json({ message: 'Name is a required field' });
		}
		const lastId = await _db2.default.insertReview(req.body);
		res.status(201).json(lastId);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const updateReview = exports.updateReview = async (req, res) => {
	try {
		if (!req.body.name || !req.params.id) {
			res.status(401).json({ message: 'Name and id is a required field' });
		}
		const count = await _db2.default.updateReview(req.params.id, req.body);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
		} else {
			res.status(404).json({ message: 'this review does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteReview = exports.deleteReview = async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const count = await _db2.default.deleteReview(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
		} else {
			res.status(404).json({ message: 'this review does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};