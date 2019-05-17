import express from 'express'
import setupVideoRoutes from './videos'
import setupBookmarkRoutes from './bookmarks'
import setupUserRoutes from './users'
import setupReviewRoutes from './reviews'
import setupShelfRoutes from './shelves'
import setupAuthRoutes from './auth'

function setupRoutes(app){
	console.log('setupVideoRoutes')
	// Auth
	const authRouter = express.Router()
	setupAuthRoutes(authRouter)
	app.use('/api/auth', authRouter)
	
	
	// Video
	const videoRouter = express.Router()
	setupVideoRoutes(videoRouter)
	app.use('/api/videos', videoRouter)
	
	// User
	const userRouter = express.Router()
	setupUserRoutes(userRouter)
	app.use('/api/users', userRouter)
	
	
	// Bookmark
	const bookmarkRouter = express.Router()
	setupBookmarkRoutes(bookmarkRouter)
	app.use('/api/bookmarks', bookmarkRouter)
	
	
	// Review
	const reviewRouter = express.Router()
	setupReviewRoutes(reviewRouter)
	app.use('/api/reviews', reviewRouter)
	
	
	// Shelf
	const shelfRouter = express.Router()
	setupShelfRoutes(shelfRouter)
	app.use('/api/shelves', shelfRouter)
	
	
	
	app.get('/', async (req, res) => {
		console.log('root route called')
	})
	
}

export default setupRoutes
