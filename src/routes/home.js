import express from 'express'
import HomeController from '../controllers/home.js'

const router = express.Router()
router.get('/', HomeController.index)
router.post('/login', HomeController.login)
router.get('/logout', HomeController.logout)

export default router