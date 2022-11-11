import express from "express"
import auth from "../middleware/auth.js"
import ChatController from "../controllers/chat.js"

const router = express.Router()
router.get('/chat/:email', auth, ChatController.index)

export default router