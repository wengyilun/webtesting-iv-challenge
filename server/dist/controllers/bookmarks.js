'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteBookmark = exports.updateBookmark = exports.postBookmark = exports.getBookmarkById = exports.getBookmarks = undefined;

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getBookmarks = exports.getBookmarks = async (req, res, next) => {
	try {
		const bookmarks = await _db2.default.getBookmarks();
		res.status(200).json(bookmarks);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const getBookmarkById = exports.getBookmarkById = async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const bookmark = await _db2.default.getBookmarkById(req.params.id);
		if (bookmark.length > 0) {
			res.status(200).json(bookmark);
		} else {
			res.status(404).json({ message: 'this bookmark does not exist' });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};
//
// export const getBookmarkById = async (req, res, next) => {
// 	try {
// 		if(!req.params.id){
// 			res.status(401).json({message:'id is required'})
// 		}
// 		const students = await db.getStudentsByCohort(req.params.id)
// 		if(students.length > 0){
// 			res.status(200).json(students)
// 		}else{
// 			res.status(404).json({ message: 'this cohort does not exist' });
// 		}
// 	}
// 	catch(e){
// 		console.error(e)
// 		res.status(500).json(e);
//     }
// }


const postBookmark = exports.postBookmark = async (req, res) => {
	try {
		if (!req.body.name) {
			res.status(401).json({ message: 'Name is a required field' });
		}
		const lastId = await _db2.default.insertBookmark(req.body);
		res.status(201).json(lastId);
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

const updateBookmark = exports.updateBookmark = async (req, res) => {
	try {
		if (!req.body.name || !req.params.id) {
			res.status(401).json({ message: 'Name and id is a required field' });
		}
		const count = await _db2.default.updateBookmark(req.params.id, req.body);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
		} else {
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteBookmark = exports.deleteBookmark = async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(401).json({ message: 'id is required' });
		}
		const count = await _db2.default.deleteBookmark(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
		} else {
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	} catch (e) {
		res.status(500).json(e);
	}
};