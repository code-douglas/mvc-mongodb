import express from 'express';
import exphbs from 'express-handlebars';
const app = express();

import connection from './db/connection.mjs';
import productRoutes from './routes/productsRoutes.mjs';

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/products', productRoutes);
app.get('/', (req, res) => {
  res.redirect('/products');
});


app.listen(3003, console.log('http://localhost:3003'));
