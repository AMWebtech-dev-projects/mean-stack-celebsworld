const Category = require('../models/category.model.js');
const GlobalService = require("../core/global.service.js");

exports.saveCategory = (req, res) => {
  let postData = req.body;
  if (postData._id) {
    postData.updatedAt = new Date();
    if (postData.oldImage) {
      GlobalService.removeFile(postData.oldImage, () => {})
    }
    Category.updateOne({
      _id: postData._id
    }, postData, (err, data) => {
      if (err) {
        return res.json({
          status: 500,
          message: "There are in some error while updating Category!.",
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: "Category updated succesfully.",
          data: postData
        });
      }
    });
  } else {
    let CategoryData = new Category();
    Object.keys(postData).forEach((key) => {
      CategoryData[key] = postData[key];
    });
    CategoryData.save((err, data) => {
      if (err) {
        return res.json({
          status: 500,
          message: "There are in some error while saving Category!.",
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: "Category saved succesfully.",
          data: data
        });
      }
    });
  }
};

exports.getCategory = (req, res) => {
  var data = req.body;
  Category.find().exec((err, data) => {
    if (data === null) {
      return res.json({
        status: 400,
        message: 'There are some error while getting category data.',
        data: err
      });
    } else {
      return res.json({
        status: 200,
        message: 'Get Category data successfully.',
        data: data
      });
    }
  });
};



exports.deleteCategory = (req, res) => {
  var postData = req.body;
  Category.deleteOne({
    _id: postData._id
  }, (err, data) => {
    if (data === null) {
      return res.json({
        status: 400,
        message: 'There are some error while Delete Category.',
        data: err
      });
    } else {
      if (postData.image) {
        GlobalService.removeFile(postData.image, () => {})
      }
      return res.json({
        status: 200,
        message: 'Deleted Category successfully.',
        data: data
      });
    }
  });
};