var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
var Category = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: '',
    },
    status: {
        type: Number,
        default: 1,
        required: true
    },
    updatedAt: Any,
    createdAt: Any,
}, {
    timestamps: true,
    collection: 'category'
});

module.exports = mongoose.model('category', Category);