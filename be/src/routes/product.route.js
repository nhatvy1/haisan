import express from 'express';
import * as productController from '../controllers/product.controller';
import verifyTokenAdmin from '../middlewares/verifyTokenAdmin';
import uploadCloudinary from '../middlewares/upload.cloudinary';

const router = express.Router();

router.get('/get-all', productController.getProducts);
router.get('/get', productController.getProductsByCategory);
router.get('/get-best-selling', productController.getProductBestSelling);
router.get('/get-detail', productController.getProductDetail)

router.post('/add', verifyTokenAdmin, uploadCloudinary.single('images'), productController.addProduct);
router.put('/update', verifyTokenAdmin, uploadCloudinary.single('images'), productController.upDateProduct);
router.delete('/delete', verifyTokenAdmin, productController.deleteProduct);

export default router;
