'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _videos = require('../controllers/videos');

var videoController = _interopRequireWildcard(_videos);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setupVideoRoutes(router) {
	router.get("/", videoController.getVideos);
	router.post('/', videoController.postVideo);
	router.get('/:id', videoController.getVideo);
	router.put('/:id', videoController.updateVideo);
	router.delete('/:id', videoController.deleteVideo);
}

exports.default = setupVideoRoutes;