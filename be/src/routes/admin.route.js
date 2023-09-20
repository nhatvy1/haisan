import express from 'express'
import * as adminController from '../controllers/admin.controller'

const router = express.Router()
import verifyTokenAdmin from '../middlewares/verifyTokenAdmin'

router.get('/get-list-user', verifyTokenAdmin, adminController.getUser)

export default router