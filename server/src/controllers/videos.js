import db from '../utils/db'

export const getVideo= async (req, res, next) => {
	console.log('getVideo')
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const user = await db.getVideoById(req.params.id)
		if(user.length > 0){
			res.status(200).json(user)
		}else{
			res.status(404).json({ message: 'this video does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getVideos= async (req, res, next) => {
	console.log('getVideo')
	
	try {
		const users = await db.getVideos()
		res.status(200).json(users)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}


export const postVideo = async (req, res) => {
	try {
		if(!req.body.title || !req.body.video_url || !req.body.duration || !req.body.author_id || !req.body.shelf_id){
			res.status(401).json({message:'Missing required information'})
		}
		const lastId = await db.insertVideo(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		// res.status(500).json(e);
	}
}

export const updateVideo = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateVideo(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this video does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteVideo = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteVideo(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this video does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
