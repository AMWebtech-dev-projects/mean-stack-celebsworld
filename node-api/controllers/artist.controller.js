const Artist = require('../models/artist.model.js');
const GlobalService = require("../core/global.service.js");
require('dotenv').config();
const Booking = require("../models/booking.model")
exports.saveArtist = (req, res) => {
  let postData = req.body;
  if (postData._id) {
    postData.updatedAt = new Date();
    if (postData.artistOldImage) {
      GlobalService.removeFile(postData.artistOldImage, () => {})
    }
    Artist.updateOne({
      _id: postData._id
    }, postData, (err, data) => {
      if (err) {
        return res.json({
          status: 500,
          message: "There are in some error while update Artist!.",
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: "Artist updated succesfully.",
          data: postData
        });
      }
    });
  } else {
    let ArtistData = new Artist();
    Object.keys(postData).forEach((key) => {
      ArtistData[key] = postData[key];
    });
    ArtistData.save((err, data) => {
      if (err) {
        return res.json({
          status: 500,
          message: "There are in some error while save Artist!.",
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: "Artist saved succesfully.",
          data: data
        });
      }
    });
  }
};

exports.getArtist = (req, res) => {
  var data = req.body;
  if (data._id) {
    var wheObj = {
      _id: data._id
    };

    Artist.find(wheObj).exec((artistErr, artistResponse) => {
      if (artistResponse === null) {
        return res.json({
          status: 400,
          message: 'There are some error while getting Artist data.',
          data: artistErr
        });
      } else {
        if (data.artistType) {
          Booking.find({
            artistId: data._id,
            makeItPublic: false,
            orderStatus: process.env.ORDER_SUBMITTED
          }).select('uploadUrl').exec((bookingError, bookingResponse) => {
            if (data === null) {
              return res.json({
                status: 400,
                message: 'There are some error while getting Artist data',
                data: bookingError
              });
            } else {
              var artistDataResponse = JSON.parse(JSON.stringify(artistResponse));
              artistDataResponse[0].publicVideo = bookingResponse;
              return res.json({
                status: 200,
                message: 'Get Artist data successfully.',
                data: artistDataResponse ? artistDataResponse[0] : null
              });
            }
          })
        } else {
          return res.json({
            status: 200,
            message: 'Get Artist data successfully.',
            data: artistResponse.length ? artistResponse[0] : null
          });
        }
      }
    });
  } else if (data.artistType) {
    Artist.find({
      profession: data.artistType
    }).exec((err, data) => {
      if (data === null) {
        return res.json({
          status: 400,
          message: 'There are some error while getting Artist data.',
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: 'Get Artist data successfully.',
          data: data
        });
      }
    });
  } else {
    Artist.find().exec((err, data) => {
      if (data === null) {
        return res.json({
          status: 400,
          message: 'There are some error while getting Artist data.',
          data: err
        });
      } else {
        return res.json({
          status: 200,
          message: 'Get Artist data successfully.',
          data: data
        });
      }
    });
  }
};

exports.deleteArtist = (req, res) => {
  var postData = req.body;
  Artist.deleteOne({
    _id: postData._id
  }, (err, data) => {
    if (data === null) {
      return res.json({
        status: 400,
        message: 'There are some error while Delete Artist',
        data: err
      });
    } else {
      if (postData.artistImage) {
        GlobalService.removeFile(postData.artistImage, () => {})
      }
      return res.json({
        status: 200,
        message: 'Deleted Artist successfully.',
        data: data
      });
    }
  });
};

exports.quickSearchArtist = (req, res) => {
  var postData = req.body;
  // find first character in string use this code with regex
  // Artist.find({ "name": { $regex: new RegExp("^" + postData.quickSearch.toLowerCase(), "i",)}
  Artist.find({
    "name": {
      $regex: new RegExp(".*" + postData.quickSearch.toLowerCase() + ".*", "i", )
    }
  }, (err, data) => {
    if (data === null) {
      return res.json({
        status: 400,
        message: 'There are some error while getting category data',
        data: err
      });
    } else {
      return res.json({
        status: 200,
        message: 'Getting Category data successfully.',
        data: data
      });
    }
  });
}