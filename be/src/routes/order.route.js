import express from 'express'
import * as orderController from '../controllers/order.controller'
import verifyToken from '../middlewares/verifyToken';

const router = express.Router()

router.post('/buy', verifyToken, orderController.order);
router.get('/get-order', verifyToken, orderController.getOrder);

export default router