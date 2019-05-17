
import * as shelfController from '../controllers/shelves'

function setupShelfRoutes(router){
	router.get("/", shelfController.getShelves)
	router.post('/', shelfController.postShelf)
	router.get('/:id', shelfController.getShelf)
	router.put('/:id', shelfController.updateShelf)
	router.delete('/:id', shelfController.deleteShelf)
	// router.get('/:id/students', bookmarkController.getStudents)
}

export default setupShelfRoutes
