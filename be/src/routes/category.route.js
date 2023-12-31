import express from 'express'
import * as categoryController from '../controllers/category.controller'

const router = express.Router()

router.get('/get-all', categoryController.getCategories)

export default router