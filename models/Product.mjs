import { ObjectId } from 'mongodb';
import connection from '../db/connection.mjs';

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = connection.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const product = connection.db().collection('products').find().toArray();

    return product;
  }

  static async getProductById(id) {
    const product = await connection
      .db()
      .collection('products')
      .findOne({ _id: new ObjectId(id) });

    return product;
  }

  static async removeProductById(id) {
    await connection.db().collection('products').deleteOne({ _id: new ObjectId(id) });

    return;
  }

  updateProduct(id) {
    if (!ObjectId.isValid(id)) {
      throw new Error('ID inválido');
    }

    return connection
      .db()
      .collection('products')
      .updateOne({ _id: new ObjectId(id) }, { $set: this });
  }
}

export default Product;
