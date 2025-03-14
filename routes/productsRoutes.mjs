import express from 'express';
import ProductController from '../controllers/ProductController.mjs';

const router = express.Router();

router.get('/', ProductController.showProducts);
router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);

export default router;
