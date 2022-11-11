import express from 'express'
import auth from '../middleware/auth.js'
import ContactController from '../controllers/contacts.js'

const router = express.Router()
router.get('/contacts', auth, ContactController.list)
router.get('/contacts/:id', auth, ContactController.show)
router.get('/contacts/:id/edit', auth, ContactController.edit)
router.post('/contacts', auth, ContactController.create)
router.post('/contacts/:id/update', auth, ContactController.update)
router.post('/contacts/:id/delete', auth, ContactController.delete)

export default router