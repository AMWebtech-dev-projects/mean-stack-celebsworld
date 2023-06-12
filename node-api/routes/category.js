var express = require('express');
var router = express.Router();
const Category = require('./../controllers/category.controller.js');
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveCategory', Category.saveCategory);
router.get('/getCategory', Category.getCategory);
router.post('/deleteCategory', Category.deleteCategory);
module.exports = router;