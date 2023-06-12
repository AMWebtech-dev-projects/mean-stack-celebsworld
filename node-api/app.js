const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./core/db');
const session = require('express-session');
const usersRoutes = require('./routes/users');
const categoryRoutes = require('./routes/category');
const artistRoutes = require('./routes/artist');
const bookingRoutes = require('./routes/booking')
const GlobalService = require("./core/global.service.js");

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the Mongo database' + err)
  }
);

const app = express();
app.use(session({
  secret: 'celebs64d0be94187e7aeabc6ebc7c336bfd51',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
app.use(express.static('public'));
app.use(express.static('photos'));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:4200'],
  credentials: true,
}));
app.use('/users', usersRoutes);
app.use('/category', categoryRoutes);
app.use('/artist', artistRoutes);
app.use('/uploadImage', require('./controllers/localFileUpload'));
app.use('/booking', bookingRoutes)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

// PLEASE UNCOMMENT CODE ON AWS/DIGITALOCEAN SERVER FOR PM2 AND FOREVER but don't need it with microservice
// app.listen(process.env.PORT, function () {
//   console.log('Listening on ', process.env.PORT);
// });
module.exports = app;
