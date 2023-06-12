var express = require('express');
var router = express.Router();
const Artist = require('./../controllers/artist.controller.js');
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveArtist', Artist.saveArtist);
router.post('/getArtist', Artist.getArtist);
router.post('/deleteArtist', Artist.deleteArtist);
router.post('/quickSearchArtist', Artist.quickSearchArtist);

module.exports = router;