import Product from '../models/Product.mjs';

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
}

export default ProductController;
