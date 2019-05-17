
import * as userController from '../controllers/users'

function setupUserRoutes(router){
	router.get("/", userController.getUsers)
	router.post('/', userController.postUser)
	router.get('/:id', userController.getUser)
	router.put('/:id', userController.updateUser)
	router.delete('/:id', userController.deleteUser)
	// router.get('/:id/students', bookmarkController.getStudents)
}

export default setupUserRoutes
