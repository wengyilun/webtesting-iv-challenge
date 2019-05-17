import db from '../utils/db'

export const getShelf= async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const user = await db.getShelfById(req.params.id)
		if(user.length > 0){
			res.status(200).json(user)
		}else{
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getShelves= async (req, res, next) => {
	console.log('getShelves : getShelves')
	
	try {
		const users = await db.getShelves()
		res.status(200).json(users)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}



export const postShelf = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertShelf(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateShelf = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateShelf(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteShelf = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteShelf(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this shelf does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
