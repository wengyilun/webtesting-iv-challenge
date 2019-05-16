
import * as studentController from '../controllers/reviews'

function setupCohortRoutes(router){
	router.get("/", studentController.getStudents)
	router.post('/', studentController.postStudents)
	router.get('/:id', studentController.getStudent)
	router.put('/:id', studentController.updateStudent)
	router.delete('/:id', studentController.deleteStudent)
}

export default setupCohortRoutes
