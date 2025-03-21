import express from 'express';
import ProductController from '../controllers/ProductController.mjs';

const router = express.Router();

router.get('/', ProductController.showProducts);
router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
router.get('/:id', ProductController.getProduct);
router.post('/remove/:id', ProductController.removeProduct);
router.get('/edit/:id', ProductController.getFullForm);
router.post('/edit/', ProductController.editProductPost);


export default router;
