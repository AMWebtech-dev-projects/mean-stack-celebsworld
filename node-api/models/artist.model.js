var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
var Artist = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  artistBio: Any,
  artistImage: Any,
  profession: Any,
  language: Any,
  // prices: {
  //   videoMessagePrice: {
  //     type: Number,
  //     required: true
  //   },
  //   videoCallPrice: {
  //     type: Number,
  //     required: true
  //   },
  //   TextMessagePrice: {
  //     type: Number,
  //     required: true
  //   }
  // },
  artistPrice: {
    type: Number,
    required: true
  },
  minTimeResponsce: {
    type: Number,
    required: true
  },
  maxTimeResponsce: {
    type: Number,
    required: true
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
  collection: 'artist'
});

module.exports = mongoose.model('artist', Artist);