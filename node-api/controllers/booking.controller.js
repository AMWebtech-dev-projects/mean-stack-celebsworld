const Booking = require('../models/booking.model.js');
const GlobalService = require("../core/global.service.js");
require('dotenv').config();
var Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_KEY_SECRET
})

exports.razorPayCreateOrder = (req, res) => {
    var orderInfo = req.body;
    var options = {
        amount: (toString(orderInfo.amount).search(/\./)) ? orderInfo.amount = (orderInfo.amount + '').replace('.', '') : orderInfo.amount = orderInfo.amount + '00',
        currency: 'INR',
        receipt: Date.now(),
        payment_capture: 0
    }

    instance.orders.create(options, (err, order) => {
        if (err) {
            return res.json({
                status: 500,
                message: 'There are some error while creating order.',
                data: err
            });
        } else {
            return res.json({
                status: 200,
                message: 'Now Just order was created.',
                order: order,
                razor_key_id: process.env.RAZOR_KEY_ID
            });
        }
    })

};


exports.razorPayOrdayPayment = (req, res) => {
    postData = req.body;
    var currentUser = req.session.current_user;
    let BookingData = new Booking();
    Object.keys(postData).forEach((key) => {
        BookingData[key] = postData[key];
    });
    var emailAmount = postData.amount;
    postData.amount = (toString(postData.amount).search(/\./)) ? postData.amount = (postData.amount + '').replace('.', '') : postData.amount = postData.amount + '00';
    instance.payments.capture(postData.razorpayPaymentId, postData.amount, 'INR', (razorErr, razorCaptureRes) => {
        if (razorErr) {
            return res.json({
                status: 500,
                message: "There are in some error while Capture the payment!.",
                data: err
            })
        } else {
            BookingData.paymentStatus = process.env.STATUS_CAPTURED;
            BookingData.save((bookErr, bookData) => {
                if (bookErr) {
                    return res.json({
                        status: 500,
                        message: "There are in some error while save Booking!.",
                        data: bookErr
                    });
                } else {
                    emailAmount = parseFloat(emailAmount).toLocaleString('en')
                    recievedMailInfo = [{
                            firstName: 'Admin',
                            lastName: '',
                            email: process.env.ADMIN_MAIL,
                            mailTemplate: 'orderDetailsForAdmin.html',
                            subject: 'Order Received',
                            templateName: 'order-details-for-admin'
                        },
                        {
                            firstName: currentUser.firstName,
                            lastName: currentUser.lastName,
                            email: currentUser.email,
                            mailTemplate: 'orderDetailsForUser.html',
                            subject: 'Order Details',
                            templateName: "order-details-for-user"
                        }
                    ];
                    recievedMailInfo.map((ele) => {
                        var prepareEmailConfig = {
                            email: ele.email,
                            firstName: GlobalService.capitalize(ele.firstName),
                            markerData: {
                                customerName: GlobalService.capitalize(currentUser.firstName + ' ' + currentUser.lastName),
                                name: GlobalService.capitalize(ele.firstName + ' ' + ele.lastName),
                                artistName: postData.artistInfo.name,
                                profession: postData.artistInfo.profession,
                                amount: emailAmount,
                                message: postData.message
                            },
                            templatePath: "public/assets/emailtemplates/" + ele.mailTemplate,
                            subject: ele.subject,
                            html: "",
                            templateName: ele.templateName, // NEW
                        };
                        GlobalService.prepareEmailData(prepareEmailConfig, (err, resp) => {});
                    })

                    return res.json({
                        status: 200,
                        message: "Booking has been succesfully.",
                        data: bookData
                    });
                }
            });
        }
    })
}

exports.getRazorPayOrderList = (req, res) => {
    var currentUser = req.session.current_user;
    var wheObj = {}
    if (currentUser.role === 'user') {
        wheObj = {
            userId: currentUser._id
        }
    }
    Booking.find(wheObj).populate('userId').populate('artistId').exec((err, data) => {
        if (data === null) {
            return res.json({
                status: 400,
                message: 'There are some error while getting Artist data',
                data: err
            });
        } else {
            return res.json({
                status: 200,
                message: "Get Booking data successfully",
                data: data
            })
        }
    })
}

exports.razorPayRefundOrderPayment = (req, res) => {
    postData = req.body;
    var emailAmount = postData.amount;
    postData.amount = (toString(postData.amount).search(/\./)) ? postData.amount = (postData.amount + '').replace('.', '') : postData.amount = postData.amount + '00';
    instance.payments.refund(postData.razorpayPaymentId, {
        amount: postData.amount,
        notes: postData.refundComment
    }, (razorErr, razorreRefundRes) => {
        if (razorErr) {
            return res.json({
                status: 500,
                message: "There are in some error while Refund the payment!.",
                data: razorErr
            })
        } else {
            postData.updatedAt = new Date();
            Booking.updateOne({
                _id: postData._id
            }, {
                orderStatus: process.env.ORDER_CANCEL,
                paymentStatus: process.env.STATUS_REFUNDED,
                refundComment: postData.refundComment
            }, (err, data) => {
                if (err) {
                    return res.json({
                        status: 500,
                        message: "There are in some error while Refunding Amount!.",
                        data: err
                    });
                } else {
                    emailAmount = parseFloat(emailAmount).toLocaleString('en')

                    var prepareEmailConfig = {
                        email: postData.userId.email,
                        firstName: GlobalService.capitalize(postData.userId.firstName),
                        markerData: {
                            name: GlobalService.capitalize(postData.userId.firstName + ' ' + postData.userId.lastName),
                            artistName: postData.artistId.name,
                            profession: postData.artistId.profession,
                            amount: emailAmount,
                            message: postData.refundComment
                        },
                        templatePath: "public/assets/emailtemplates/refundNotificationEmail.html",
                        subject: 'Amount Refunded',
                        html: "",
                        templateName: 'refund-notification', // NEW
                    };
                    GlobalService.prepareEmailData(prepareEmailConfig, (err, resp) => {});
                    return res.json({
                        status: 200,
                        message: "Refund Amount succesfully.",
                        data: data
                    });
                }
            });

        }
    })
}

exports.orderStatusAndUploadVideo = (req, res) => {
    postData = req.body;
    Booking.updateOne({
        _id: postData._id
    }, {
        orderStatus: postData.orderStatus,
        uploadUrl: postData.uploadUrl
    }, (err, data) => {
        if (err) {
            return res.json({
                status: 500,
                message: "There are in some error while update Category!.",
                data: err
            });
        } else {
            if (postData.orderStatus !== "submitted" && postData.oldVideo) {
                GlobalService.removeFile(postData.oldVideo, () => {})
            }
            return res.json({
                status: 200,
                message: "Booking saved succesfully.",
                data: data
            });
        }
    });
}