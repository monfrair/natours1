const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const userRouter = require('./routes/userRoutes');

const app = express();

// 1. Middlewares
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//global middleware declared prior to routes
app.use((req, res, next) => {
  console.log('Hello from middleware 😃😀');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Start Server

const port = 3000;
app.listen(port, () => {
  console.log(`App running from file app.js - on port 😜 ${port}....`);
});

module.exports = app;
