'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reviews = require('../controllers/reviews');

var reviewController = _interopRequireWildcard(_reviews);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setupReviewRoutes(router) {
	router.get("/", reviewController.getReviews);
	router.post('/', reviewController.postReview);
	router.get('/:id', reviewController.getReview);
	router.put('/:id', reviewController.updateReview);
	router.delete('/:id', reviewController.deleteReview);
	// router.get('/:id/students', bookmarkController.getStudents)
}

exports.default = setupReviewRoutes;