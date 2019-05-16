import express from 'express'
import setupVideoRoutes from './videos'
import setupBookmarkRoutes from './bookmarks'
import setupUserRoutes from './users'
import setupReviewRoutes from './reviews'
import setupShelfRoutes from './shelf'

function setupRoutes(app){
	const videoRouter = express.Router()
	setupVideoRoutes(videoRouter)
	app.use('/api/video', studentRouter)
	
	const cohortRouter = express.Router()
	setupCohortRoutes(cohortRouter)
	app.use('/api/cohorts', cohortRouter)
	
	app.get('/', async (req, res) => {
		console.log('root route called')
	})
	
}

export default setupRoutes
