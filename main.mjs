import express from 'express';
import exphbs from 'express-handlebars';
import connection from './db/connection.mjs';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set(express.static('public'));

app.listen(3000);
