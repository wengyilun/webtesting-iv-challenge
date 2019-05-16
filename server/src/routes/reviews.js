
import * as reviewController from '../controllers/reviews'

function setupReviewRoutes(router){
	router.get("/", reviewController.getReviews)
	router.post('/', reviewController.postReview)
	router.get('/:id', reviewController.getReview)
	router.put('/:id', reviewController.updateReview)
	router.delete('/:id', reviewController.deleteReview)
	// router.get('/:id/students', bookmarkController.getStudents)
}

export default setupReviewRoutes
