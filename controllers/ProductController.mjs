import Product from '../models/Product.mjs';
import { ObjectId } from 'mongodb';

class ProductController {
  static async showProducts(req, res) {
    const products = await Product.getProducts();
    res.render('products/all', { products });
  }
  static createProduct(req, res) {
    res.render('products/create');
  }
  static createProductPost(req, res) {
    const {
      name,
      image,
      price,
      description
    } = req.body;

    const product = new Product(name, image, price, description);

    product.save();

    res.redirect('/');
  }
  static async getProduct(req, res) {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send('ID inválido');
    }

    const product = await Product.getProductById(id);

    res.render('products/product', { product });
  }
  static async removeProduct(req, res) {
    const id = req.params.id;

    await Product.removeProductById(id);

    res.redirect('/');
  }
  static async getFullForm(req, res) {
    const id = req.params.id;

    const product = await Product.getProductById(id);

    res.render('products/edit', { product });
  }
}

export default ProductController;
