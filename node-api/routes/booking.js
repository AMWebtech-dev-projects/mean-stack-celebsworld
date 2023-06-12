var express = require('express');
var router = express.Router();
const Booking = require('../controllers/booking.controller.js');
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/razorPayCreateOrder', Booking.razorPayCreateOrder);
router.post('/razorPayOrdayPayment', Booking.razorPayOrdayPayment);
router.post('/razorPayRefundOrderPayment', Booking.razorPayRefundOrderPayment);
router.post('/getRazorPayOrderList', Booking.getRazorPayOrderList);
router.post('/orderStatusAndUploadVideo', Booking.orderStatusAndUploadVideo);


module.exports = router;