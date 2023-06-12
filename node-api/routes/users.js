var express = require('express');
var router = express.Router();
const users = require('../controllers/users.controller.js');
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/doSignup', users.doSignup);
router.post('/doSignin', users.doSignin);
router.post('/emailAndNumberAlreadyExits', users.emailAndNumberAlreadyExits);
router.post('/forgotPassword', users.forgotPassword);
router.post('/authentication', users.authentication);
router.post('/logout', users.logout);
router.post('/getUserInfo', users.getUserInfo);
router.post('/saveUserInfo', users.saveUserInfo);
router.get('/getUsersList', users.getUsersList);

module.exports = router;