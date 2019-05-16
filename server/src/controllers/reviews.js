import db from '../utils/db'

export const getReview= async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const student = await db.getReviewById(req.params.id)
		if(student.length > 0){
			res.status(200).json(student)
		}else{
			res.status(404).json({ message: 'this review does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getReviews = async (req, res, next) => {
	console.log('getReviews : getAllReviews')

	try {
		const students = await db.getReviews()
		res.status(200).json(students)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}



export const postReview = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertReview(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateReview = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateReview(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this review does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteReview = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteReview(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this review does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
