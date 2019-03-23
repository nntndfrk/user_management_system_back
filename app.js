const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
require('./configs/passport.config')(passport);
const PORT = process.env.PORT || 5000;

const {
  DB_URL,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;
// import routes
const login = require('./routes/login.route');
const employees = require('./routes/employees.route');
// create app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(passport.initialize());

// connect to mongoDB
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('mongo connected');
});

mongoose.connection.on('error', err => {
  console.error(err);
});

mongoose.connection.on('disconnected', () => {
  console.log('mongodb connection closed');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


// apply routes
app.use('/api/login', login);
app.use('/api/employees', employees);

app.get('/', function (req, res) {
  res.send("<h2>Привет Express!</h2>");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, () => {
  console.info(`'Server is up and running on port ${PORT}`);
});

console.log(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`);
