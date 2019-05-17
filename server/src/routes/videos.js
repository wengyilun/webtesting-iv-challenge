
import * as videoController from '../controllers/videos'

function setupVideoRoutes(router){
	router.get("/", videoController.getVideos)
	router.post('/', videoController.postVideo)
	router.get('/:id', videoController.getVideo)
	router.put('/:id', videoController.updateVideo)
	router.delete('/:id', videoController.deleteVideo)
}

export default setupVideoRoutes
