var Posts = require('../models/Posts');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../static/images/')
    },
    filename: (req, file, cb) => {
        let ext = file.originalname.substring(file.originalname.indexOf(".") + 1);
        cb(null, file.fieldname + '-' + Date.now() + "." + ext)
    }
});
var upload = multer({
    storage: storage
});

/* GET ALL products */
router.get('/', function(req, res, next) {
    Posts.find(function(err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Posts.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE PRODUCT 
router.post('/', function(req, res, next) {
  Products.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/

router.post('/', upload.single('image'),
    function(req, res) {
        console.log(req.file)
        let post = req.body;
        post.title = req.body.name
        post.image = req.body.image != 'undefined' ? req.file.filename : null
        post.description = req.body.description
        post.design = req.body.design
        post.product_link = req.body.product_link
        Posts.create(post, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });

    });

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Posts.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    Posts.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;