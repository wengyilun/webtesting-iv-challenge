import db from '../utils/db'

export const getBookmarks = async (req, res, next) => {
	try {
		const bookmarks = await db.getBookmarks()
		res.status(200).json(bookmarks)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
    }
}

export const getBookmarkById = async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const bookmark = await db.getBookmarkById(req.params.id)
		if(bookmark.length > 0){
			res.status(200).json(bookmark)
		}else{
			res.status(404).json({ message: 'this bookmark does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
    }
}
//
// export const getBookmarkById = async (req, res, next) => {
// 	try {
// 		if(!req.params.id){
// 			res.status(401).json({message:'id is required'})
// 		}
// 		const students = await db.getStudentsByCohort(req.params.id)
// 		if(students.length > 0){
// 			res.status(200).json(students)
// 		}else{
// 			res.status(404).json({ message: 'this cohort does not exist' });
// 		}
// 	}
// 	catch(e){
// 		console.error(e)
// 		res.status(500).json(e);
//     }
// }


export const postBookmark = async (req, res) => {
	try {
		if(!req.body.note || !req.body.subtitle_range || !req.body.current_position || !req.body.video_id ){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertBookmark(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
	    res.status(500).json(e);
	}
}

export const updateBookmark = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateBookmark(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	 }
}

export const deleteBookmark = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteBookmark(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
