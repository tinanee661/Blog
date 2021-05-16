const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./DB');
const posts = require('./routes/posts');
const contacts = require('./routes/contacts');
const products = require('./routes/products');
const  category = require ('../routes/category');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB);

const app = express();
app.use(express.static('images'));
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', posts);
app.use('/products', products);
app.use('/contacts', contacts);
app.use('/category', category);
var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log('NodeJS Server started on Port: ', port);
});

