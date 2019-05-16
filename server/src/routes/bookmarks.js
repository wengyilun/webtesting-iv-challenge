
import * as bookmarkController from '../controllers/bookmarks'

function setupBookmarkRoutes(router){
	router.get("/", bookmarkController.getBookmarks)
	router.post('/', bookmarkController.postBookmark)
	router.get('/:id', bookmarkController.getBookmarkById)
	router.put('/:id', bookmarkController.updateBookmark)
	router.delete('/:id', bookmarkController.deleteBookmark)
	// router.get('/:id/students', bookmarkController.getStudents)
}

export default setupBookmarkRoutes
