const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkID);
// router.param('name', tourController.checkName);
// router.param('price', tourController.checkPrice);

//create a check body middleware funtion
//check if body contains name and price property
// if not, send back 400 (bad request)
// add it to the post handler stack

// router.param('id', (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   next();
// });

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
