import connection from '../db/connection.mjs';

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = connection.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    });

    return product;
  }
}

export default Product;
