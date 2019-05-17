import db from '../utils/db'

export const getUser= async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const user = await db.getUserById(req.params.id)
		if(user.length > 0){
			res.status(200).json(user)
		}else{
			res.status(404).json({ message: 'this user does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getUsers= async (req, res, next) => {
	console.log('getUsers : getAllUsers')
	
	try {
		const users = await db.getUsers()
		res.status(200).json(users)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}



export const postUser = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertUser(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateUser = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateUser(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this user does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteUser = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteUser(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this user does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
