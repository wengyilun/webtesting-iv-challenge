
import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
	// VIDEO
	getVideos,
	insertVideo,
	getVideoById,
	updateVideo,
	deleteVideo,
	
	// BOOKMARK
	getBookmarks,
	insertBookmark,
	getBookmarkById,
	updateBookmark,
	deleteBookmark,
	
	// REVIEW
	getReviews,
	insertReview,
	getReviewById,
	updateReview,
	deleteReview,
	
	// USER
	getUser,
	insertUser,
	getUserById,
	updateUser,
	deleteUser,
	
	// SHELF
	getShelves,
	insertShelf,
	getShelfById,
	updateShelf,
	deleteShelf
}

async function get(tbl){
	return db(tbl)
}

async function post(tbl, video){
	return db.insert(video)
	.into(tbl)
}

async function updateById(tbl, id, video){
	return db.where({id:id})
	.update(video)
	.into(tbl)
}

async function deleteById(tbl, id){
	return db(tbl)
	.where({id:id})
	.del()
}

// async function getRecipe(tbl, id){
// 	return  db('recipes')
// 		.join('dishes', 'dishes.id', 'recipes.dish_id')
// 		.select(knex.raw(`recipes.name as 'RECIPE',dishes.name as 'DISH'`))
// 		.where({'recipes.id': id})
// 		.distinct()
// }
// =========================
//  	 VIDEO
// =========================

async function getVideos(){
	return db('video')
}

async function insertVideo(video){
	return db.insert(video)
		.into('video')
}

async function getVideoById(id){
	return db('video')
	.where({id:id})
	.then(videos => {
		return videos
	})
	.catch(e => e)
}

async function updateVideo(id, video){
	return db.where({id:id})
		.update(video)
		.into('video')
}

async function deleteVideo(id){
	return db('video')
		.where({id:id})
		.del()
}

// =========================
//  	 Bookmark
// =========================

async function getBookmarks(){
	return db('bookmark')
}

async function insertBookmark(bookmark){
	return db.insert(bookmark)
	.into('bookmark')
}

async function getBookmarkById(id){
	return db('bookmark')
	.where({id:id})
	.then(bookmarks => {
		return bookmarks
	})
	.catch(e => e)
}

async function updateBookmark(id, bookmark){
	return db.where({id:id})
	.update(bookmark)
	.into('bookmark')
}

async function deleteBookmark(id){
	return db('bookmark')
	.where({id:id})
	.del()
}

// =========================
//  	 REVIEW
// =========================

async function getReviews(){
	return db('review')
}

async function insertReview(review){
	return db.insert(review)
	.into('review')
}

async function getReviewById(id){
	return db('review')
	.where({id:id})
	.then(reviews => {
		return reviews
	})
	.catch(e => e)
}

async function updateReview(id, review){
	return db.where({id:id})
	.update(review)
	.into('review')
}

async function deleteReview(id){
	return db('review')
	.where({id:id})
	.del()
}

// =========================
//  	 Users
// =========================

async function getUser(){
	return db('user')
}

async function insertUser(user){
	return db.insert(user)
	.into('user')
}

async function getUserById(id){
	return db('user')
	.where({id:id})
	.then(users => {
		return users
	})
	.catch(e => e)
}

async function updateUser(id, user){
	return db.where({id:id})
	.update(user)
	.into('user')
}

async function deleteUser(id){
	return db('user')
	.where({id:id})
	.del()
}

// =========================
//  	 Shelf
// =========================

async function getShelves(){
	return db('shelf')
}

async function insertShelf(shelf){
	return db.insert(shelf)
	.into('shelf')
}

async function updateShelf(id, shelf){
	return db.where({id:id})
	.update(shelf)
	.into('shelf')
}

async function getShelfById(id){
	return db('shelf')
	.where({id:id})
	.then(shelves => {
		return shelves
	})
	.catch(e => e)
}

async function deleteShelf(id){
	return db('shelf')
	.where({id:id})
	.del()
}


export default dao
