
import * as userController from '../controllers/users'

function setupUserRoutes(router){
	router.get("/", userController.getReviews)
	router.post('/', userController.postReview)
	router.get('/:id', userController.getReview)
	router.put('/:id', userController.updateReview)
	router.delete('/:id', userController.deleteReview)
	// router.get('/:id/students', bookmarkController.getStudents)
}

export default setupUserRoutes
