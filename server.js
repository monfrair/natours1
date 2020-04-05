// // const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

const app = require('./app');

// use log below to get all env variables
// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // code below to connect to local DB
  // .connect(process.env.DATABASE_LOCAL, {{)}

  //Connection to cloud DB
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    // console.log(con.connections);
    console.log('DB connection successful!');
  });

//code to test app connection to mongo db
// const testTour = new Tour({
//   name: 'Moab Monster',
//   rating: 4.8,
//   price: 797
// });

// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('ERROR 🤬', err);
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running from server.js file on port  🤪${port}....`);
});
