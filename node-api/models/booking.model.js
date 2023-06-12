var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
var BookingSchema = new Schema({
    razorpayOrderId: {
        type: String,
        required: true
    },
    razorpayPaymentId: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    someoneElse: {
        type: Boolean,
        required: true
    },
    to: {
        type: String,
    },
    from:{
        type: String,
    },
    message :{
        type: String,
        required: true
    }, 
    eventDate :{
        type: Date,
        required: true
    },
    videoCallDuration :{
        type: String,
    }, 
    videoCallTimeSlot :{
        type: String,
    },
    makeItPublic :{
        type: Boolean,
        required: true
    },
    paymentStatus:{
        type: String,
    },
    uploadUrl:{
        type: String,
    },
    orderStatus: {
        type: String,
        required: true
    },
    refundComment:{
        type :String,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },
    artistId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'artist' },
}, {
    timestamps: true,
    collection: 'booking'
});

module.exports = mongoose.model('booking', BookingSchema);