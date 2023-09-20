import express from 'express'
import * as userController from '../controllers/user.controller'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

// router.use(verifyToken)
router.get('/get-current-user', verifyToken, userController.getCurrent)

export default router